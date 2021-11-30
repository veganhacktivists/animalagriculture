import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button, ButtonRow, Container, PageContainer } from '../../../components/styled';
import { createVideoInstance } from '../../../services/videoService';
import { isArray } from 'util';
import Header from '../../../components/Header';


const New: NextPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [paymentUsername, setPaymentUsername] = useState('');

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
                    <Header />

                    {loading && 'One moment please...'}
                    {!loading && (
                        <div>
                            <label style={{display: 'block'}} htmlFor="username">Venmo username:</label>
                            <PaymentUsernameInput
                                type="text"
                                name="username"
                                value={paymentUsername}
                                onChange={(e) => setPaymentUsername(e.target.value)}
                                placeholder="What's your Venmo username?"
                            />

                            <ButtonRow>
                                <Button disabled={!paymentUsername} onClick={createInstance}>Submit</Button>
                            </ButtonRow>
                        </div>
                    )}
                </Container>
            </main>
        </PageContainer>
    )
}

export default New;

const PaymentUsernameInput = styled.input`
    padding: 10px 15px;
    border: none;
    background-color: #ddd;
    width: 100%;
    max-width: 300px;
`;
