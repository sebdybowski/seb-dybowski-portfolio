import React from 'react';
import SEO from '../../components/_examples/seo';
import { PageLayout } from '../../components';
import { Welcome, About, Contact } from '../../sections';
import './Index.scss';

const Index = () => (
  <PageLayout>
    <SEO title="Home" />
    <Welcome />
    <About />
    <Contact />
  </PageLayout>
);

export default Index;
