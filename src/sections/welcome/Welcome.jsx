import React from 'react';
import { SectionLayout } from '../../components/layouts';
import { MainHeading, SubHeading } from '../../components/typography';
import { Typewriter } from '../../components/effects/typewriter/Typewriter';
import { BRAND } from '../../styles';
import styled from 'styled-components';

const WelcomeStyled = styled.div`
  text-align: center;
`;

const PrefixStyled = styled.span`
  color: ${BRAND}
`;

export const Welcome = () => <SectionLayout>
  <WelcomeStyled>
    <MainHeading>
      <Typewriter prefix={<PrefixStyled>{'>_ '}</PrefixStyled>}>{'Hello, world!'}</Typewriter>
    </MainHeading>
    <SubHeading>Welcome on my Page!</SubHeading>
  </WelcomeStyled>
</SectionLayout>;
