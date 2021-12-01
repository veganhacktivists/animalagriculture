import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {Link, Red} from './styled';

const Header = () => {
    return (
        <HeaderWrapper>
            <div>
              <Image src="/images/logo.png" alt="The logo of animalagriculture.watch" width={100} height={100} />
            </div>
            <HeaderInfo>
                <Title>animal<Red>agriculture</Red>.watch</Title>
                <Subtext>Get paid by activists to watch important videos.</Subtext>
                <Link href="/about">Learn why this is important →</Link>
            </HeaderInfo>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const HeaderInfo = styled.div`
  padding-left: 20px;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 32px;
`;
const Subtext = styled.h4`
  margin: 0;
  font-weight: 300;
  font-size: 18px;
`;
