// @flow
import React from 'react';
import type { ReactNode } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

type Props = {
  children: ReactNode
};

export const PageLayout = ({ children }: Props): ReactNode => <>
  <Header/>
  <main>{children}</main>
  <Footer/>
</>;
