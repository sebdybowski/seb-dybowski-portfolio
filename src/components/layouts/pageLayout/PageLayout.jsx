import React from 'react';
import Normalize from 'normalize.css';
import { Footer } from '../footer/Footer';
import { BACKGROUND, TEXT } from '../../../styles';
import Comfortaa from '../../../fonts/comfortaa/Comfortaa-VariableFont_wght.ttf';
import { Navbar } from '../../navigation';

const GlobalStyle = createGlobalStyle`
  @import ${Normalize};

  @font-face {
    font-family: 'Comfortaa';
    src: url(${Comfortaa}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  body {
    background-color: ${BACKGROUND.DARK};
    color: ${TEXT.LIGHT};
    font-family: 'Comfortaa', cursive;
    font-size: 1rem;
    font-weight: 400;
    padding: 2vh 0;
    min-height: 100vh;
  }
`;

const PageLayout = `
  width: 60vw;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
  @media only screen and (min-width: 769px) and (max-width: 1600px) {
    width: 70vw;
  }
`;

export const PageLayout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
