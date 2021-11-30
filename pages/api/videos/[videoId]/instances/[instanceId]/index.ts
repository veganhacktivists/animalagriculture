// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseServer } from '../../../../../../services';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const videoId = req.query.videoId;
        const instanceId = req.query.instanceId;

        const {data, error} = await supabaseServer
            .from('video_instances')
            .select(`
                video_id (url, length)
            `)
            .eq('code', instanceId);

        if (error) {
            console.error(error)
            res.status(400);
            res.json({error});
        }

        res.status(200);
        res.json({data: data[0]});
    }
}
