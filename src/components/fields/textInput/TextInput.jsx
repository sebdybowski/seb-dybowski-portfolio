import React from 'react';
import styled from 'styled-components';
import { TEXT, BRAND } from '../../../styles';

const LabelStyled = styled.label`
  color: ${TEXT.LIGHT};
  display: flex;
  justify-content: center;
  line-height: 36px;
`;

const InputStyled = styled.input`
  color: ${TEXT.LIGHT};
  border: 3px solid ${TEXT.LIGHT};
  border-radius: 32px;
  height: 64px;
  width: 512px;
  background-color: transparent;
  padding: 0 32px;
  box-sizing: border-box;
  transition: border-color ease-out 0.4s;
  :focus {
    outline: none;
    border-color: ${BRAND};
    transition: border-color ease-in 0.2s;
  }
`;

const FieldsetStyled = styled.fieldset`
  border: none;
  display: flex;
`;

export const TextInput = () => <FieldsetStyled>
  <LabelStyled>Email address</LabelStyled>
  <InputStyled type="email" placeholder="type here..." />
</FieldsetStyled>;
