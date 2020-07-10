import React from 'react';
import { SectionLayout } from '../../components/layouts';
import { MainHeading, SubHeading } from '../../components/typography';
import { Portrait } from './Portrait';
import { SPACING, TEXT } from '../../styles';

export const About = () => <SectionLayout>
  <div style={{ display: 'flex-inline', border: `4px solid ${TEXT.LIGHT}`, borderRadius: SPACING.LG, width: '100%', padding: SPACING.LG }}>
    <div>
      <MainHeading>{'Hi, I’m Seb'}</MainHeading>
      <SubHeading>Nice to meet You!</SubHeading>
    </div>
    <div style={{ maxWidth: '1024px', marginBottom: '1.45rem', marginLeft: 'auto', position: 'relative', top: '-30vh', right: '-10vw' }}>
      <Portrait/>
    </div>
  </div>
</SectionLayout>;
