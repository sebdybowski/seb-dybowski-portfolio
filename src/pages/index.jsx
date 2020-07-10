import React from 'react';
import { Link } from 'gatsby';

import { PageLayout } from '../components/';
import Image from '../components/_examples/image';
import SEO from '../components/_examples/seo';

const IndexPage = () => (
  <PageLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/coming-soon/">Portfolio 1</Link><br/>
    <Link to="/cs/">Portfolio 2</Link><br/>
    <Link to="/404/">Not Found</Link><br/>
  </PageLayout>
);

export default IndexPage;
