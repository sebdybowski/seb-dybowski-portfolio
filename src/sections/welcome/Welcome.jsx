import React from 'react';
import { SectionLayout } from '../../components/layouts';
import { MainHeading, SubHeading } from '../../components/typography';

export const Welcome = () => <SectionLayout>
  <div>
    <MainHeading>{'>_ Hello, world!'}</MainHeading>
    <SubHeading>Welcome on my Page!</SubHeading>
  </div>
</SectionLayout>;
