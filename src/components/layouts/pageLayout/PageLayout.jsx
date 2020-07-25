import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { BACKGROUND, TEXT } from '../../../styles';
import Normalize from 'normalize.css';
import Comfortaa from '../../../fonts/comfortaa/Comfortaa-VariableFont_wght.ttf';

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

const PageLayoutStyled = styled.div`
  width: 60vw;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
  @media only screen and (min-width: 769px) and (max-width: 1600px) {
    width: 70vw;
  }
`;

export const PageLayout = ({ children }) => <PageLayoutStyled>
  <GlobalStyle/>
  <Header/>
  <main>{children}</main>
  <Footer/>
</PageLayoutStyled>;
