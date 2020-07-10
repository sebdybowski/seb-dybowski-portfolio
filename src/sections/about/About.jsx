import React from 'react';
import { SectionLayout } from '../../components/layouts';
import { MainHeading, SubHeading } from '../../components/typography';
import { Portrait } from './Portrait';
import { SPACING, TEXT } from '../../styles';

export const About = () => <SectionLayout>
  <div style={{ display: 'flex-inline', boxSizing: 'border-box', border: `8px solid ${TEXT.LIGHT}`, borderRadius: SPACING.LG, width: '100%', padding: '48px 64px', height: '40vh' }}>
    <div>
      <MainHeading>{'Hi, I’m Seb'}</MainHeading>
      <SubHeading>Nice to meet You!</SubHeading>
    </div>
    <div style={{ maxWidth: '768px', marginBottom: '1.45rem', marginLeft: 'auto', position: 'relative', top: '-322px', right: '-20px' }}>
      <Portrait/>
    </div>
  </div>
</SectionLayout>;
