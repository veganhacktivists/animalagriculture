import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button, ButtonRow, Container, PageContainer, Margin } from '../../../components/styled';
import { createVideoInstance } from '../../../services/videoService';
import { isArray } from 'util';
import { MainHeader } from '../../../components/Header';
import useGetVideo from '../../../hooks/useGetVideo';
import { Colors } from '../../../components/styled/consts';


const New: NextPage = () => {
    const router = useRouter();
    const [paymentUsername, setPaymentUsername] = useState('');
    const {video, loading} = useGetVideo(router.query.videoId);

    console.log(video)

    const createInstance = () => {
        const videoId = router.query.videoId;

        if (videoId) {
            const singleVideoId = isArray(videoId) ? videoId[0] : videoId;
            const parsedVideoId = parseInt(singleVideoId);

            createVideoInstance(parsedVideoId, paymentUsername)
                .then((res) => {
                    const code = res.data.code;
                    router.push(`/watch/${videoId}/${code}`);
                });
        }

    };

    return (
        <PageContainer>
            <Head>
                <title>aa.watch</title>
                <meta name="description" content="Get paid to watch important videos from activists" />
            </Head>

            <main>
                <Container>
                    <MainHeader />

                    {loading && 'One moment please...'}
                    {!loading && (
                        <div>
                            <VideoInfo>
                                <h4>{video.title}</h4>
                                <h5>You&apos;ll receive <Reward>${video.reward}</Reward> for completing this video.</h5>
                            </VideoInfo>

                            <label style={{display: 'block'}} htmlFor="username">Venmo username:</label>
                            <PaymentUsernameInput
                                type="text"
                                name="username"
                                value={paymentUsername}
                                onChange={(e) => setPaymentUsername(e.target.value)}
                                placeholder="What's your Venmo username?"
                            />
                            <small style={{display: 'block', marginTop: '5px'}}>More payment options planned for the future</small>

                            <Margin marginTop="15px">
                                <ButtonRow>
                                    <Button disabled={!paymentUsername} onClick={createInstance}>Submit</Button>
                                </ButtonRow>
                            </Margin>
                        </div>
                    )}
                </Container>
            </main>
        </PageContainer>
    )
}

export default New;

const VideoInfo = styled.div`
    margin-bottom: 30px;
    background-color: ${Colors.Papaya};
    padding: 30px;

    h4, h5 {
        margin: 0;
    }

    h4 {
        font-size: 24px;
        margin-bottom: 5px;
    }
    h5 {
        color: #444;
        font-size: 18px;
    }
`;
const PaymentUsernameInput = styled.input`
    padding: 10px 15px;
    border: none;
    background-color: #ddd;
    width: 100%;
    max-width: 300px;
`;

const Reward = styled.span`
    text-decoration: underline;
    color: ${Colors.Vermillion};
`;
