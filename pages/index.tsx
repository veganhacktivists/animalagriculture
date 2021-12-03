import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { MainHeader } from '../components/Header';
import { Button, ButtonRow, Red, Container, PageContainer, Margin } from '../components/styled';


const Home: NextPage = () => {

  return (
    <PageContainer>
      <Head>
        <title>aa.watch</title>
        <meta name="description" content="Get paid to watch important videos from activists" />
      </Head>

      <main>
        <Container>

          <MainHeader />

          <Explanation>
            <Step>
              <StepTitle><Red>1.</Red> Start watching a video</StepTitle>
              <StepBody>Activists can upload videos they want you to watch, and set a monetary reward for completing it.</StepBody>
            </Step>

            <Step>
              <StepTitle><Red>2.</Red> Answer simple questions as you watch.</StepTitle>
              <StepBody>We will show you captchas as you watch, which you need to correctly answer.</StepBody>
            </Step>

            <Step>
              <StepTitle><Red>3.</Red> Get paid.</StepTitle>
              <StepBody>After completing a video, we will notify the activist who uploaded it so they can pay you.</StepBody>
            </Step>
          </Explanation>

          <ButtonRow>
            <Link href="/watch/3/new"><Button>start watching</Button></Link>
          </ButtonRow>
          <Margin marginTop='10px'>
            <small>This is in alpha, so there is only one video for test purposes.</small>
          </Margin>
        </Container>
      </main>
    </PageContainer>
  )
}

export default Home;

const Explanation = styled.div`

`;

const Title = styled.h4``;
const Step = styled.div`
  margin-bottom: 30px;
`;
const StepTitle = styled.h5`
  margin: 0;
  font-size: 20px;
`;
const StepBody = styled.p`
  margin: 0;
`;
const Underline = styled.span`
  text-decoration: underline;
`;
