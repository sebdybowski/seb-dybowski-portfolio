import React from 'react';
import { PageLayout } from '../components';
import SEO from '../components/_examples/seo';
import { Welcome, About, Contact } from '../sections';
import './index.scss';

const IndexPage = () => (
  <PageLayout>
    <SEO title="Home" />
    <Welcome />
    <About />
    <Contact />
  </PageLayout>
);

export default IndexPage;
