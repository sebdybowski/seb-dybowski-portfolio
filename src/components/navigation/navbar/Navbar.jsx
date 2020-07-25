import React, { useState } from 'react';
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
  @media only screen and (max-width: 1600px) {
    visibility:  ${props => props.isOpen ? 'visible' : 'hidden'};
    background: rgba(0, 0, 0, 0.9);
    z-index: 1024;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledButton = styled.button`
  display: none;
  @media only screen and (max-width: 1600px) {
    display: flex;
    margin-left: auto;
  }
`;

export const Navbar = () => {
  const [ isOpen, toggle ] = useState(false);
  return (<>
    <StyledButton onClick={() => toggle(!isOpen)}>open</StyledButton>
    <StyledNavbar isOpen={isOpen}>
      <StyledButton onClick={() => toggle(!isOpen)}>close</StyledButton>
      { NAVIGATION_LINKS.map(
        ({ ORDER, PATH, LABEL }) => <StyledLink key={ORDER} to={PATH}>{LABEL}</StyledLink>
      )}
    </StyledNavbar>
  </>);
};
