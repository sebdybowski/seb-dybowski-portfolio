import React from 'react';
import { SectionLayout } from '../../components/layouts';
import { MainHeading, SubHeading } from '../../components/typography';
import { Portrait } from './Portrait';

export const About = () => (
  <SectionLayout>
    <div style={{
      display: 'flex-inline',
      boxSizing: 'border-box',
      border: `6px solid ${TEXT.LIGHT}`,
      borderRadius: SPACING.LG,
      width: '100%',
      padding: '48px 64px',
      height: '512px',
      position: 'relative',
    }}
    >
      <div>
        <MainHeading>Hi, I’m Seb</MainHeading>
        <SubHeading>Nice to meet You!</SubHeading>
      </div>
      <div style={{
        width: '768px',
        marginLeft: 'auto',
        position: 'absolute',
        bottom: '0',
        right: SPACING.MD,
      }}
      >
        <Portrait />
      </div>
    </div>
  </SectionLayout>
);
