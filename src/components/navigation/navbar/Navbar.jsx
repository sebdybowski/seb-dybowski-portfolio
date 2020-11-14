import React, { useState } from 'react';
import './Navbar.scss';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION_LINKS } from './constants';

export const Navbar = () => {
  const [isOpen, toggle] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight * 0.5);

  window.onscroll = function () {
    setScrollHeight(window.scrollY);
  };
  window.onresize = function () {
    setViewportHeight(window.innerHeight * 0.5);
  };

  console.log(scrollHeight, window.innerHeight);

  const isScreenScrolled = scrollHeight >= viewportHeight;

  return (
    <nav
      className={clsx(
        'navbar',
        'is-size-3',
        !isScreenScrolled && 'is-transparent',
        !isScreenScrolled && 'is-transparent',
        isScreenScrolled && 'is-fixed-top',
        isScreenScrolled && 'is-blur',
        isScreenScrolled && 'animate__animated animate__slideInDown',
      )}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <span>
              <span>:// seb</span>
              dybowski.com
            </span>
          </Link>
          <button
            type="button"
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
            onClick={() => toggle(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          id="navbarExampleTransparentExample"
          className={clsx(
            'navbar-menu',
            isOpen && 'is-active',
          )}
        >
          <div className="navbar-end">
            { NAVIGATION_LINKS.map(
              ({ ORDER, PATH, LABEL }) => <Link key={ORDER} to={PATH} className="navbar-item">{LABEL}</Link>,
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
