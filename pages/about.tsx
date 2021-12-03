import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import { StyledLink, Container, PageContainer, Link } from '../components/styled';
import { Colors } from '../components/styled/consts';
import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <PageContainer>
            <main>
                <Container>
                    <Header link={<Link href="/">Start watching →</Link>}/>
                    <p>
                        One of the hardest parts of advocating for animal rights is getting people to agree that there is an issue
                        with how animals are treated. The companies that raise, kill, and distribute the billions of animals consumed every
                        year intentionally try to hide what happens by using <StyledLink href="https://en.wikipedia.org/wiki/Ag-gag" target="_blank">AgGag laws</StyledLink>, which make it hard to even see what we do to animals
                        destined for consumption.
                        <br />
                        <br />
                        Additionally, there is a growing catalogue of information on the scientific basis of plant-based diets, from environmental and 
                        nutritional viewpoints, which are also important for explaining why veganism is not only an option, but imperative.
                        <br />
                        <br />
                        Activists want this footage and information to be public knowledge, but often times there are few incentives for watching
                        what can be admittedly grizzly or uncomfortable content. This website provides that incentive by offering cold, hard cash in exchange for your attention.
                        <br />
                        <br />
                        Activists can sponsor videos to be watched, and select an amount of monetary compensation for each video. When someone completes a video, the activist
                        will be informed, so they can render payment via the information provided by the viewer before watching the video.
                        <br />
                        <br />
                        - james quinlan
                    </p>
                </Container>
            </main>
        </PageContainer>
    )
}

export default Home;
