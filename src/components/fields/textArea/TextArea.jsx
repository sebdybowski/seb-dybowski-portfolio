import React from 'react';
import styled from 'styled-components';
import { TEXT, BRAND } from '../../../styles';

const LabelStyled = styled.label`
    color: ${TEXT.LIGHT};
    display: flex;
    justify-content: center;
    line-height: 36px;
`;

const TextAreaStyled = styled.textarea`
    color: ${TEXT.LIGHT};
    border: 3px solid ${TEXT.LIGHT};
    border-radius: 32px;
    height: 150px;
    width: 512px;
    background-color: transparent;
    padding: 24px 32px;
    line-height: 32px;
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

export const TextArea = () => <FieldsetStyled>
  <LabelStyled>Your message</LabelStyled>
  <TextAreaStyled rows="3" placeholder="type here..." />
</FieldsetStyled>;