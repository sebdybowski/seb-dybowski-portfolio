import React from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '../../../styles';

const MainHeadingStyled = styled.h1`
  font-size: ${TYPOGRAPHY.SIZE.XL};
  font-weight: ${TYPOGRAPHY.WEIGHT.LG};
`;

export const MainHeading = ({ children }) => <MainHeadingStyled>{children}</MainHeadingStyled>;
