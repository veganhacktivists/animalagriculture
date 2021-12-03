import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {Link, Red} from './styled';
import {breakPoints, devices} from './styled/consts';

const Header = ({link}) => {
    return (
        <HeaderWrapper>
            <div>
              <Image src="/images/logo.png" alt="The logo of animalagriculture.watch" width={100} height={100} />
            </div>
            <HeaderInfo>
                <Title>animal<Red>agriculture</Red>.watch</Title>
                <Subtext>Get paid by activists to watch important videos.</Subtext>
                {link}
            </HeaderInfo>
        </HeaderWrapper>
    )
}

export const MainHeader = () => {
  return <Header link={<Link href="/about">Learn why this is important →</Link>} />
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (${breakPoints.laptop}) {
    flex-direction: row;
  }
`;

const HeaderInfo = styled.div`
  margin-top: 30px;

  @media (${breakPoints.laptop}) {
    padding-left: 20px;
    margin-top: 0;
  }
`;
const Title = styled.h3`
  margin: 0;
  font-size: 24px;

  @media (${devices.laptop}) {
    font-size: 32px;
  }
`;
const Subtext = styled.h4`
  margin: 0;
  font-weight: 300;
  font-size: 18px;
`;
