import React, {useState} from 'react';
import styled from 'styled-components';
import { Colors } from './styled';

type CaptchaAnswers = {
    [captchaId: string]: string
}

const CaptchaQueue = ({captchas, submitCaptchaAnswer, removeCaptcha}) => {
    const [answers, setAnswers] = useState<CaptchaAnswers>({});
    const [erroredCaptchas, setErroredCaptchas] = useState<string[]>([]);

    const setCaptchaAnswer = (id: string, value: string) => {
        setAnswers(answers => {
            return {
                ...answers,
                [id]: value
            }
        });
    }

    const handleSubmitCaptchaAnswer = (id: string) => {
        submitCaptchaAnswer(id, answers[id])
            .then(res => {
                if (res.correct) {
                    removeCaptcha(id);
                } else {
                    setErroredCaptchas(currentErroredCaptchas =>
                        [...currentErroredCaptchas, id]
                    );
                    setCaptchaAnswer(id, '');
                }
            })
            .catch(() => setErroredCaptchas(currentErroredCaptchas =>
                [...currentErroredCaptchas, id]
            ));
    }

    return (
        <>
            <Queue>
                {captchas.map((captcha) => {
                    const isErrored = erroredCaptchas.includes(captcha.id);

                    return (
                        <CaptchaWrapper key={captcha.id} errored={isErrored}>
                            <CaptchaImage dangerouslySetInnerHTML={{__html: captcha.image}}></CaptchaImage>
                            <AnswerWrapper>
                                <CaptchaAnswer
                                    type="text"
                                    placeholder="What does the above captcha say?"
                                    onChange={(e) => setCaptchaAnswer(captcha.id, e.target.value)}
                                />
                                <SubmitButton onClick={() => handleSubmitCaptchaAnswer(captcha.id)}>
                                    submit
                                </SubmitButton>
                            </AnswerWrapper>
                        </CaptchaWrapper>
                    )
                })}
            </Queue>
        </>
    )
}

export default CaptchaQueue;


const Queue = styled.div`
    padding-left: 30px;
`;

const CaptchaWrapper = styled.div`
    margin-bottom: 30px; 
    background-color: #fff;
    border: 2px solid #fff;

    ${({errored}) => errored ? `
        border-color: ${Colors.Vermillion};
    `: ``}
`;
const CaptchaImage = styled.div`
`;
const AnswerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const CaptchaAnswer = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin-top: 0;
    border: none;
    background-color: #eee;
`;
const SubmitButton = styled.button`
    border: none;
    background-color: ${Colors.Indigo};
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
`;