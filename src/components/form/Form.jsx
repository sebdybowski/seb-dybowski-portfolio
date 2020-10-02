import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Form = ({ children }) => (
  <FormStyled>
    {children}
  </FormStyled>
);
