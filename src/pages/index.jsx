import React from 'react';
import { Link } from 'gatsby';

import { PageLayout } from '../components/';
import SEO from '../components/_examples/seo';
import { Welcome, About } from '../sections';

const IndexPage = () => (
  <PageLayout>
    <SEO title="Home" />
    <Welcome/>
    <About/>
    <Link to="/coming-soon/">Portfolio 1</Link><br/>
    <Link to="/cs/">Portfolio 2</Link><br/>
    <Link to="/404/">Not Found</Link><br/>
  </PageLayout>
);

export default IndexPage;
