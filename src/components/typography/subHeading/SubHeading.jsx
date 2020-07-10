import React from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '../../../styles';

const SubHeadingStyled = styled.h1`
  font-size: ${TYPOGRAPHY.SIZE.LG};
  font-weight: ${TYPOGRAPHY.WEIGHT.XS};
`;

export const SubHeading = ({ children }) => <SubHeadingStyled>{children}</SubHeadingStyled>;
