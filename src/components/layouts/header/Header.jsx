import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../navigation';
import { SPACING, BRAND, TYPOGRAPHY } from '../../../styles';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  font-size: ${TYPOGRAPHY.SIZE.MD};
`;

export const Header = () => (
  <StyledHeader>
    <Navbar />
  </StyledHeader>
);
