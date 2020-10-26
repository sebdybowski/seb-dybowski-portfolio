import './SubmitButton.scss';
import React from 'react';
import { propTypes } from './propTypes';

export const SubmitButton = (props) => {
  const { children } = props;
  return (
    <button id="contact-form--button__submit" type="submit">{children}</button>
  );
};

SubmitButton.propTypes = propTypes;
