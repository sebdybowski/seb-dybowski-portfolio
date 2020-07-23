import React from 'react';
import styled from 'styled-components';

const StyledSectionLayout = styled.section`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionLayout = ({ children }) =>
  <StyledSectionLayout>{children}</StyledSectionLayout>;
