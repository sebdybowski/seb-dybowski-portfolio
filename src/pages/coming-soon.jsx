import React from 'react';
import {Link} from 'gatsby';

import SEO from '../components/_examples/seo';
import {PageLayout} from '../components/layouts';

const ComingSoon = () =>
  <PageLayout>
    <SEO title="Comming Soon"/>
    <h1>Comming soon...</h1>
    <p>There will be content here someday.</p>
    <Link to="/">Go back to the homepage</Link>
  </PageLayout>;

export default ComingSoon;
