import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../navigation/';
import { SPACING, BRAND, TYPOGRAPHY } from '../../../styles';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  font-size: ${TYPOGRAPHY.SIZE.MD};
`;

const StyledLogo = styled.span`
  padding: ${SPACING.MD} 0;
`;

const StyledBrand = styled.span`
  color: ${BRAND};
`;

export const Header = () => <StyledHeader>
  <StyledLogo><StyledBrand>:// seb</StyledBrand>dybowski.com</StyledLogo>
  <Navbar/>
</StyledHeader>;
