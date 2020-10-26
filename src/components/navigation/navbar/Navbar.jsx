import React, { useState, Fragment } from 'react';

import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION_LINKS } from './constants';
import { TEXT, SPACING, BRAND } from '../../../styles';

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
    visibility:  ${(props) => (props.isOpen ? 'visible' : 'hidden')};
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

const StyledLogo = styled.span`
            padding: ${SPACING.MD} 0;
            `;

const StyledBrand = styled.span`
            color: ${BRAND};
            `;

export const Navbar = () => {
  const [isOpen, toggle] = useState(false);
  return (
    <>
      <nav className="navbar is-transparent is-size-3">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <StyledLogo>
              <StyledBrand>:// seb</StyledBrand>
              dybowski.com
            </StyledLogo>
          </Link>
          <div className="navbar-burger burger py-5" data-target="navbarExampleTransparentExample">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            { NAVIGATION_LINKS.map(
              ({ ORDER, PATH, LABEL }) => <Link key={ORDER} to={PATH} className="navbar-item">{LABEL}</Link>,
            )}
          </div>
        </div>
      </nav>
      {/* <StyledButton onClick={() => toggle(!isOpen)}>open</StyledButton> */}
      {/* <StyledNavbar isOpen={isOpen}> */}
      {/*  <StyledButton onClick={() => toggle(!isOpen)}>close</StyledButton> */}
      {/*  { NAVIGATION_LINKS.map( */}
      {/*    ({ ORDER, PATH, LABEL }) => <StyledLink key={ORDER} to={PATH}>{LABEL}</StyledLink>, */}
      {/*  )} */}
      {/* </StyledNavbar> */}
    </>
  );
};
