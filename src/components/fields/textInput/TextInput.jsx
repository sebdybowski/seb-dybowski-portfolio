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
    :focus {
        outline: none;
        border-color: ${BRAND};
    }
`;

const FieldsetStyled = styled.fieldset`
    border: none;
    display: flex;
`;

export const TextInput = () => <FieldsetStyled>
  <LabelStyled>Test</LabelStyled>
  <InputStyled type="text" placeholder="type here..." />
</FieldsetStyled>;