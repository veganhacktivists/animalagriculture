import { useEffect, useRef, useState, useMemo } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import { MainHeader } from '../../../../components/Header';
import CaptchaQueue from '../../../../components/CaptchaQueue';
import { Button, Container, Icon, PageContainer, ButtonRow, Margin, StyledLink } from '../../../../components/styled';
import { breakPoints, Colors } from '../../../../components/styled/consts';
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

const WatchVideoPage: NextPage = () => {
    const [instance, setInstance] = useState(null);
    const videoRef = useRef(null);
    const router = useRouter();
    const videoId = router.query.videoId;
    const instanceId = router.query.instanceId;
    const [loading, setLoading] = useState(true);
    const [playerOpen, setPlayerOpen] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0);
    const [captchas, setCaptchas] = useState([]);
    const [hasAnsweredAllQuestions, setHasAnsweredAllQuestions] = useState(false);

    const completed = useMemo(() => {
        return instance && hasAnsweredAllQuestions && progress >= instance.video_id.end_time;
    }, [instance, hasAnsweredAllQuestions, progress]);

    const [getSavedProgress, setSavedProgress] = useLocalStorage(
        getVideoProgressLSKey(router.query.instanceId as string),
        null
    );
    const [hasLoadedSavedProgress, setHasLoadedSavedProgress] = useState(false);
    const [lastQueriedTime, setLastQueriedTime] = useState(0);

    useEffect(() => {
        if (volume === 0) {
            setPlaying(false);
        }
    }, [volume]);

    useEffect(() => {
        const videoId = Array.isArray(router.query.videoId) ? router.query.videoId[0] : router.query.videoId;
        const instanceId = Array.isArray(router.query.instanceId) ? router.query.instanceId[0] : router.query.instanceId;

        if (videoId && instanceId) {
            getVideoInstance(parseInt(videoId), instanceId)
            .then(res => {
                    setInstance(res.data.instance);
                    const status = res.data.status;

                    if (status === 'completed') {
                        setHasAnsweredAllQuestions(true);
                    }
                })
                .finally(() => setLoading(false))
        }

        if (router.query.instanceId) {
            const savedProgress = getSavedProgress();
            setLastQueriedTime(savedProgress);
            setProgress(savedProgress);
        }
    }, [router]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setPlaying(false);
            } else {
                setPlaying(true);
            }
        };

        window.addEventListener('visibilitychange', handleVisibilityChange);

        return () => window.removeEventListener('visibilitychange', handleVisibilityChange);
    });

    const togglePlaying = () => {
        // Dont let the user play the video is the volume is 0
        if (!playing && volume === 0) {
            return;
        }

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
                setTimeout(() => {
                    setCaptchas(currentCaptchas =>
                        currentCaptchas.filter(currentCaptcha => !incomingCaptchaIds.includes(currentCaptcha.id))
                    );
                }, 120000);
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
        const savedProgress = getSavedProgress();

        if (!hasLoadedSavedProgress && savedProgress) {
            videoRef.current?.seekTo(savedProgress, 'seconds');

        }
    }

    const handleProgress = ({ playedSeconds }) => {
        if (playedSeconds) {
            const roundedPlayedSeconds = Math.round(playedSeconds)
            setProgress(roundedPlayedSeconds);
            setSavedProgress(roundedPlayedSeconds);
        }

        // Query for questions every 5 seconds
        if (playedSeconds - lastQueriedTime > 5) {
            queryForQuestions(lastQueriedTime, playedSeconds);
        }
    }

    const handleSubmitCaptchaAnswer = (id: string, answer: string) => {
        return submitQuestionAnswer(videoId as string, instanceId as string, id, answer)
    }

    const removeCaptcha = (id: string) => {
        setCaptchas(captchas => captchas.filter(captcha => captcha.id !== id));
    }

    const handlePlay = () => {
        if (!playing) {
            setPlaying(true);
        }
    }

    const handleSeek = (seconds) => {
        setLastQueriedTime(seconds);
    }

    return (
        <PageContainer>
            <Head>
                <title>aa.watch</title>
                <meta name="description" content="Get paid to watch important videos from activists" />
            </Head>

            <main>
                <Container>
                    <MainHeader />

                    {loading && (
                        <h5>Loading...</h5>
                    )}

                    {!loading && !playerOpen && (
                        <div>
                            {completed && (
                                <Completed>
                                    <h3>You&apos;ve finished the video!</h3>
                                    <p>Nothing more for you to do, except wait to get paid. Thanks for watching.</p>
                                    <p>
                                        If you&apos;d like to provide feedback, <StyledLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf9aFZj992sck8XvGh7K2tLTYCZ18D2b-3bUVKPeQu35JDwSg/viewform?usp=sf_link">you can do that here.</StyledLink> 
                                    </p>
                                </Completed>
                            )}

                            <h4>Some things to keep in mind:</h4>
                            <ul>
                                <li>We save your progress as you watch, so watch longer videos in chunks</li>
                                <li>The questions will appear next to the video as it plays</li>
                                <li>You need to answer each question within a couple minutes of it appearing</li>
                            </ul>
                            <Button onClick={() => setPlayerOpen(true)}>
                                {progress ? 'resume watching' : 'start watching'}
                            </Button>
                        </div>
                    )}

                    {instance?.video_id?.url && playerOpen && (
                        <Modal>
                            <SectionWrapper>
                                <div style={{flexGrow: 1}}>
                                    <ReactPlayer
                                        ref={videoRef}
                                        url={instance.video_id.url}
                                        muted={!playing}
                                        playing={playing}
                                        volume={volume}
                                        width='100%'
                                        height={400}
                                        onReady={handleReady}
                                        onProgress={handleProgress}
                                        onPlay={handlePlay}
                                        onSeek={handleSeek}
                                        controls={false}
                                    />

                                    <PlayerControls>
                                        <ButtonRow>
                                            <Button onClick={togglePlaying}>
                                                {playing ? 'pause' : 'play'}
                                                <Icon margin={'0 0 0 5px'} name={playing ? 'pause' : 'play_circle_filled'} color="#fff" />
                                            </Button>
                                            <Button onClick={handleClose}>
                                                close
                                                <Icon margin={'0 0 0 5px'} name='close' color="#fff" />
                                            </Button>
                                        </ButtonRow>

                                        <VolumeWrapper>
                                            <Icon name={"volume_up"} color="#fff" />

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
                                        removeCaptcha={removeCaptcha}
                                        setHasAnsweredAllQuestions={setHasAnsweredAllQuestions}
                                    />
                                </div>
                            </SectionWrapper>
                        </Modal>
                    )}

                </Container>
            </main>
        </PageContainer>
    )
}

export default WatchVideoPage;

const Modal = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;

    ${Button} {
        margin-right: 10px;
    }
`;

const PlayerControls = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 0 30px;

    @media (${breakPoints.desktop}) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
    }
`;

const Timer = styled.div`
    color: #fff;
`;

const VolumeWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;

    @media (${breakPoints.desktop}) {
        margin: 0;
        justify-content: space-between;
    }
`;
const VolumeInput = styled.input`
    width: 200px;
`;
const SectionWrapper = styled.div`
    display: flex;    
    flex-direction: column;
    width: 100%;

    @media (${breakPoints.desktop}) {
        flex-direction: row;
        width: 1000px;
    }
`;

const Completed = styled.div`
    background-color: ${Colors.Papaya};
    padding: 30px;

    h3 {
        font-size: 32px;
        margin: 0;
    }

    p {
        margin: 0;
    }
`;
