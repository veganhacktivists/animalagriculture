// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseServer } from '../../../../../../../services';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const instanceId = Array.isArray(req.query.instanceId) ? req.query.instanceId[0] : req.query.instanceId;
            const questionId = Array.isArray(req.query.questionId) ? req.query.questionId[0] : req.query.questionId;

            const answer = req.body.answer;

            if (!answer) {
                res.status(400);
                res.json({error: 'Missing answer text'});
                return
            }

            const {data: videoInstances, error} = await supabaseServer
                .from('video_instances')
                .select(`
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

            const videoInstance = videoInstances[0];

            if (!videoInstance) {
                res.status(404);
                res.json({});
                return;
            }

            const question = videoInstance.questions.find(question => question.id === questionId);

            if (!question) {
                console.error(`Cannot find question ${questionId}`);
                res.status(400);
                res.json({error});
                return;
            }

            const answeredCorrectly = question.code === answer;

            if (answeredCorrectly) {
                await supabaseServer
                    .from('video_instances')
                    .update({answers: {...(videoInstance.answers || {}), [questionId]: answer}})
                    .eq('code', instanceId);
            }

            const answersExlcudingCurrentAnswer = Object.keys(videoInstance.answers)
                .filter(answerQuestionId => answerQuestionId !== questionId);

            // The user is finished if they have answered all the questions, or they have just answered the final question
            const isFinished = Object.keys(videoInstance.answers).length === videoInstance.questions.length ||
                (answersExlcudingCurrentAnswer.length === Object.keys(videoInstance.answers).length - 1 && answeredCorrectly) 

            res.status(200);
            res.json({
                correct: answeredCorrectly,
                finished: isFinished
            });
        } catch (e) {
            console.error(e);
            res.status(500);
            res.json({error: e});
        }
    }
}
