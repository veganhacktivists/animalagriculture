import React, {useState} from 'react';
import styled from 'styled-components';
import { Colors } from './styled';

type CaptchaAnswers = {
    [captchaId: string]: string
}

const CaptchaQueue = ({captchas, submitCaptchaAnswer}) => {
    const [answers, setAnswers] = useState<CaptchaAnswers>({});

    const setCaptchaAnswer = (id: string, value: string) => {
        setAnswers(answers => {
            return {
                ...answers,
                [id]: value
            }
        });
    }

    const handleSubmitCaptchaAnswer = (id: string) => {
        submitCaptchaAnswer(id, answers[id]);
    }

    return (
        <>
        {captchas.length && (
            <Queue>
                {captchas.map((captcha) => {
                    return (
                        <CaptchaWrapper key={captcha.id}>
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
        )}
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