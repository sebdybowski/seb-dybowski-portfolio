import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { NAVIGATION_LINKS } from './constants';
import { TEXT, SPACING } from '../../../styles';

const StyledLink = styled(Link)`
  padding: ${SPACING.MD};
  color: ${TEXT.DARK};
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: ${TEXT.LIGHT};
  }
  :last-child {
    padding-right: 0;
  }
`;

const StyledNavbar = styled.nav`
  display: flex;
  margin-left: auto;
`;

export const Navbar = () => <StyledNavbar>
  { NAVIGATION_LINKS.map(
    ({ ORDER, PATH, LABEL }) => <StyledLink key={ORDER} to={PATH}>{LABEL}</StyledLink>
  )}
</StyledNavbar>;
