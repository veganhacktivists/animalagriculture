// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import svgCaptcha from 'svg-captcha';
import { Colors } from '../../../../../../../components/styled/consts';
import { supabaseServer } from '../../../../../../../services';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const after = parseInt(Array.isArray(req.query.after) ? req.query.after[0] : req.query.after);
            const before = parseInt(Array.isArray(req.query.before) ? req.query.before[0] : req.query.before);

            const instanceId = Array.isArray(req.query.instanceId) ? req.query.instanceId[0] : req.query.instanceId;

            if (after === undefined || !before) {
                console.error('Missing after or before query param')
                res.status(400);
                res.json({error: 'Missing after or before query param'});
                return
            }

            const {data, error} = await supabaseServer
                .from('video_instances')
                .select(`
                    questions
                `)
                .eq('code', instanceId);

            if (error) {
                console.error(error)
                res.status(400);
                res.json({error});
                return;
            }

            const questionsForTimestamps = data[0].questions.filter(question => {
                return question.timestamp >= after &&
                    question.timestamp < before;
            }).map(question => {
                // @ts-ignore
                const captcha = svgCaptcha(question.code, {
                    width: 250,
                    color: true,
                    noise: 3,
                    background: Colors.Papaya
                });

                return {
                    id: question.id,
                    image: captcha
                }
            });

            res.status(200);
            res.json({data: questionsForTimestamps});
        } catch (e) {
            console.error(e);
            res.status(500);
            res.json({error: e});
        }
    }
}
