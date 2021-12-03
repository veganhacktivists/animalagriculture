import React, {useState} from 'react';
import styled from 'styled-components';
import { breakPoints, Colors } from './styled/consts';

type CaptchaAnswers = {
    [captchaId: string]: string
}

const CaptchaQueue = ({captchas, submitCaptchaAnswer, removeCaptcha}) => {
    const [answers, setAnswers] = useState<CaptchaAnswers>({});
    const [erroredCaptchas, setErroredCaptchas] = useState<string[]>([]);
    const [submittingCaptcha, setSubmittingCaptcha] = useState<boolean>(false);

    const setCaptchaAnswer = (id: string, value: string) => {
        setAnswers(answers => {
            return {
                ...answers,
                [id]: value
            }
        });
    }

    const handleSubmitCaptchaAnswer = (id: string) => {
        setSubmittingCaptcha(true);
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
            ))
            .finally(() => {
                setSubmittingCaptcha(false);
            })
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
                                    placeholder="Type the above code"
                                    onChange={(e) => setCaptchaAnswer(captcha.id, e.target.value)}
                                />
                                <SubmitButton disabled={submittingCaptcha} onClick={() => handleSubmitCaptchaAnswer(captcha.id)}>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    @media (${breakPoints.desktop}) {
        padding-left: 30px;
        margin-top: 0;
        width: 300px;
    }
`;

const CaptchaWrapper = styled.div`
    margin-bottom: 30px; 
    background-color: #fff;
    border: 2px solid #fff;
    max-width: 252px;

    ${({errored}) => errored ? `
        border-color: ${Colors.Vermillion};
    `: ``}
`;
const CaptchaImage = styled.div``;
const AnswerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -6px;
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
    font-size: 16px;

    &:disabled {
        background-color: #eee;
        color: #333;
    }
`;