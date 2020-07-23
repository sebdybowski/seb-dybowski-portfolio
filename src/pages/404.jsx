import React from 'react';

import SEO from '../components/_examples/seo';
import { PageLayout } from '../components/';
import { MainHeading } from '../components/typography';

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <div style={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <MainHeading>{'>_ 404: Not found'}</MainHeading>
        <p>{'You just hit a route that doesn\'t exist... the sadness.'}</p>
      </div>
    </div>
  </PageLayout>
);

export default NotFoundPage;
