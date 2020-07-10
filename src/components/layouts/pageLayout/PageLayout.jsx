// @flow
import React from 'react';
import type { Node } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { BACKGROUND, TEXT } from '../../../styles';
import Comfortaa from '../../../fonts/comfortaa/Comfortaa-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
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
    font-weight: 400;
  }
`;

type Props = {
  children: Node
};

export const PageLayout = ({ children }: Props): Node => <>
  <GlobalStyle/>
  <Header/>
  <main>{children}</main>
  <Footer/>
</>;
