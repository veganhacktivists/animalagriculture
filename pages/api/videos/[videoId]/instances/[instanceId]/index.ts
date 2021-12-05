// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseServer } from '../../../../../../services';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const instanceId = req.query.instanceId;

        const {data, error} = await supabaseServer
            .from('video_instances')
            .select(`
                video_id (url, length, end_time),
                questions,
                answers
            `)
            .eq('code', instanceId);

        if (error) {
            console.error(error)
            res.status(400);
            res.json({error});
            return;
        }

        if (!data.length) {
            res.status(404);
            res.json({});
            return;
        }

        const instance = data[0];
        const hasAnsweredQuestions = instance.answers && Object.keys(instance.answers).length;
        const hasCompletedQuestions = instance.answers && Object.keys(instance.answers).length === instance.questions.length;
        const status = hasCompletedQuestions ? 'completed' :
            hasAnsweredQuestions ? 'in_progress' :
            'unstarted';
        
        const payload = {
            instance: {
                "video_id": instance.video_id,
                "end_time": instance.end_time
            },
            status
        };

        res.status(200);
        res.json({data: payload});
    }
}
