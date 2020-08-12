import React from 'react';
import styled from 'styled-components';
import { getCurrentYear } from './utils';

const FooterStyled = styled.footer`
  text-align: center;
`;

export const Footer = () =>
    <FooterStyled>Footer {getCurrentYear()}</FooterStyled>;
