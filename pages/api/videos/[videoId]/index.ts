// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseServer } from '../../../../services';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const videoId = req.query.videoId;

        const {data, error} = await supabaseServer
            .from('videos')
            .select(`
                title,
                reward,
                length
            `)
            .eq('id', videoId);

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

        res.status(200);
        res.json({data: data[0]});
    }
}
