import React from 'react';
import { Footer } from '../footer/Footer';
import Comfortaa from '../../../fonts/comfortaa/Comfortaa-VariableFont_wght.ttf';
import { Navbar } from '../../navigation';

// const PageLayout = `
//   width: 60vw;
//   margin: 0 auto;
//   @media only screen and (max-width: 768px) {
//     width: 80vw;
//   }
//   @media only screen and (min-width: 769px) and (max-width: 1600px) {
//     width: 70vw;
//   }
// `;

export const PageLayout = ({ children }) => (
  <div className="container">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
