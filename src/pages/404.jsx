import React from 'react';

import SEO from '../components/_examples/seo';
import { PageLayout } from '../components/layouts';

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>{'You just hit a route that doesn\'t exist... the sadness.'}</p>
  </PageLayout>
);

export default NotFoundPage;
