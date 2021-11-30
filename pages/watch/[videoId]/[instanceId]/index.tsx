import { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import Header from '../../../../components/Header';
import CaptchaQueue from '../../../../components/CaptchaQueue';
import { Button, Container, PageContainer } from '../../../../components/styled';
import { getVideoInstance, getVideoInstanceQuestions, submitQuestionAnswer } from '../../../../services/videoService';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';

const getVideoProgressLSKey = (instanceId: string): string => {
    return `AA_WATCH_${instanceId}`;
}

const secondsToReadableTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const leftoverSecondsFromHours = seconds - (hours * 3600);
    const minutes = Math.floor(leftoverSecondsFromHours / 60);
    const leftOverSeconds = leftoverSecondsFromHours - (minutes * 60);

    const minutesReadable = minutes < 10 ? `0${minutes}` : minutes;
    const secondsReadable = leftOverSeconds < 10 ? `0${leftOverSeconds}` : leftOverSeconds;

    return `${hours}:${minutesReadable}:${secondsReadable}`;
}

const Home: NextPage = () => {
    const [videoURL, setVideoURL] = useState(null);
    const videoRef = useRef(null);
    const router = useRouter();
    const videoId = router.query.videoId;
    const instanceId = router.query.instanceId;
    const [playerOpen, setPlayerOpen] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [captchas, setCaptchas] = useState([]);

    // @TODO - Figure out how to ensure the LS key is correct upon first load,
    // because at the moment, the router query params are undefined when this hook runs.
    const [savedProgress, setSavedProgress] = useLocalStorage(
        getVideoProgressLSKey(router.query.instanceId as string),
        null
    );
    const [hasLoadedSavedProgress, setHasLoadedSavedProgress] = useState(false);
    const [lastQueriedTime, setLastQueriedTime] = useState(0);

    useEffect(() => {
        const videoId = Array.isArray(router.query.videoId) ? router.query.videoId[0] : router.query.videoId;
        const instanceId = Array.isArray(router.query.instanceId) ? router.query.instanceId[0] : router.query.instanceId;

        if (videoId && instanceId) {
            getVideoInstance(parseInt(videoId), instanceId)
                .then(res => {
                    setVideoURL(res.data.video_id.url);
                });
        }
    }, [router]);

    const togglePlaying = () => {
        setPlaying(!playing);
    }

    /**
     * 
     * @param after Timestamp in seconds
     * @param before  Timestamp in seconds
     * 
     * Ask the server if there are any questions for the video between these times.
     * If so, add them to the queue and create a timer to remove the questions which were just loaded
     * after 2 minutes (or some other amount of time).
     * 
     * This way a user needs to answer each captcha within a certain amount of time, but we don't
     * mess with any other captchas which may have been loaded in the meantime.
     */
    const queryForQuestions = (after: number, before: number) => {
        getVideoInstanceQuestions(videoId as string, instanceId as string, after, before)
            .then(res => {
                const incomingCaptchas = res.data;
                const incomingCaptchaIds = incomingCaptchas.map(c => c.id);

                setCaptchas(currentCaptchas => {
                    const currentCaptchaIds = currentCaptchas.map(c => c.id);
                    const newCaptchas = incomingCaptchas.filter(ic => !currentCaptchaIds.includes(ic.id));

                    return [...currentCaptchas, ...newCaptchas]
                });

                // After 2 minutes, remove any captchas that remain in the queue
                // @TODO - Figure out how to set this based on the length of the video
                setTimeout(() => {
                    setCaptchas(currentCaptchas =>
                        currentCaptchas.filter(currentCaptcha => !incomingCaptchaIds.includes(currentCaptcha.id))
                    );
                }, 1200000);
            })
            .then(() => setLastQueriedTime(before));
    }

    const handleClose = () => {
        setPlayerOpen(false);
        setPlaying(false);
        setHasLoadedSavedProgress(false);
    }

    const handleReady = () => {
        const duration = videoRef.current?.getDuration();
        setDuration(Math.floor(duration));

        if (!hasLoadedSavedProgress && savedProgress) {
            videoRef.current?.seekTo(savedProgress, 'seconds');
            setHasLoadedSavedProgress(true);
        }
    }

    const handleProgress = ({ playedSeconds }) => {
        setProgress(Math.round(playedSeconds));
        setSavedProgress(playedSeconds);

        // Query for questions every 5 seconds
        if (playedSeconds - lastQueriedTime > 5) {
            queryForQuestions(lastQueriedTime, playedSeconds);
        }
    }

    const handleSubmitCaptchaAnswer = (id: string, answer: string) => {
        submitQuestionAnswer(videoId as string, instanceId as string, id, answer)
            .then(res => console.log(res));
    }

    return (
        <PageContainer>
            <Head>
                <title>aa.watch</title>
                <meta name="description" content="Get paid to watch important videos from activists" />
            </Head>

            <main>
                <Container>
                    <Header />

                    {!videoURL && (
                        <h5>Loading...</h5>
                    )}

                    {videoURL && !playerOpen && (
                        <div>
                            <h4>Some things to keep in mind:</h4>
                            <ul>
                                <li>Take breaks if you need; it's difficult to watch at some points, and we save your progress</li>
                                <li>Save this URL, as you can only resume watching if you use the same link</li>
                            </ul>
                            <Button onClick={() => setPlayerOpen(true)}>
                                {progress ? 'resume the film' : 'start the film'}
                            </Button>
                        </div>
                    )}

                    {videoURL && playerOpen && (
                        <PlayerWrapper>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <ReactPlayer
                                        ref={videoRef}
                                        url='https://www.farmtransparency.org/uploads/videos/Dominion_720.mp4'
                                        muted={!playing}
                                        playing={playing}
                                        volume={volume}
                                        width='100%'
                                        height={400}
                                        onReady={handleReady}
                                        onProgress={handleProgress}
                                        controls={false}
                                    />

                                    <PlayerControls>
                                        <div>
                                            <Button onClick={togglePlaying}>{playing ? 'pause' : 'play'}</Button>
                                            <Button onClick={handleClose}>close</Button>
                                        </div>

                                        <VolumeWrapper>
                                            <VolumeInput
                                                type="range"
                                                min={0}
                                                max={1}
                                                step={0.02}
                                                value={volume}
                                                onChange={event => {
                                                    setVolume(event.target.valueAsNumber)
                                                }}
                                            />
                                        </VolumeWrapper>

                                        <Timer>
                                            {secondsToReadableTime(progress)} / {secondsToReadableTime(duration)}
                                        </Timer>
                                    </PlayerControls>
                                </div>
                                <div>
                                    <CaptchaQueue
                                        captchas={captchas}
                                        submitCaptchaAnswer={handleSubmitCaptchaAnswer}
                                    />
                                </div>
                            </div>
                        </PlayerWrapper>
                    )}

                </Container>
            </main>
        </PageContainer>
    )
}

export default Home;

const PlayerWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;

    ${Button} {
        margin-right: 10px;
    }
`;

const PlayerControls = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`;

const Timer = styled.div`
    color: #fff;
`;

const VolumeWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const VolumeInput = styled.input`
    width: 300px;
`;
