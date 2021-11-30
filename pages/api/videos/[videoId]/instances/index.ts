// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import {v4 as uuid} from 'uuid';
import { supabaseServer } from '../../../../../services';
import { calculateQuestionTimestamps, generateQuestionCode } from '../../../../../services/videoService';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const videoId = req.query.videoId;
        const paymentUsername = req.body.payment_username;

        if (!videoId && !paymentUsername) {
            res.status(400);
            res.json({error: 'Missing fields'});
            return;
        }

        const {data, error} = await supabaseServer
            .from('videos')
            .select()
            .eq('id', videoId);

        if (error) {
            throw error;
        }

        const video = data[0];
        const videoLength = video.length;
        const questionTimestamps = calculateQuestionTimestamps(videoLength);
        const questions = questionTimestamps.map(timestamp => {
            return {
                timestamp,
                id: uuid(),
                code: generateQuestionCode(6)
            }
        });

        const newInstancePayload = {
            video_id: videoId,
            payment_username: paymentUsername,
            questions,
        }

        const {data: newInstanceData, error: newErrorData} = await supabaseServer
            .from('video_instances')
            .insert([newInstancePayload]);

        if (newErrorData) {
            res.status(400);
            res.json({error});
            return;
        }

        res.status(201);
        res.json({data: {
            code: newInstanceData[0].code
        }});
    }
}
