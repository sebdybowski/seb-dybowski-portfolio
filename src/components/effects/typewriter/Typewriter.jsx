import React, { useEffect, useState } from 'react';
import Chance from 'chance';
import { propTypes, defaultProps } from './propTypes';

const chanceApi = new Chance();

const BASE_TYPE_INTERVAL = 150;

const Caret = `
  position: absolute;
  display: inline-block;
  height: 3rem;
  width: calc(4px + 0.1vw);
  animation: blinkTextCursor 500ms steps(24) infinite normal;
  border-right: calc(4px + 0.1vw) solid rgba(255, 255, 255, .75);
  
  @keyframes blinkTextCursor{
   from{ border-right-color: rgba(255, 255, 255, .75); }
   to{ border-right-color: transparent; }
  }
`;

const Typewriter = (props) => {
  const { prefix, children } = props;

  const [index, setIndex] = useState(0);

  const characters = children.split('');
  const dynamicText = characters.slice(0, index);

  useEffect(() => {
    const char = characters[index];
    if (char) {
      setTimeout(
        () => setIndex(index + 1),
        BASE_TYPE_INTERVAL * chanceApi.floating({ min: 0.5, max: 1.5 }),
      );
    }
  });

  return (
    <span>
      {prefix}
      {dynamicText}
      <div className="caret" />
    </span>
  );
};

Typewriter.propTypes = propTypes;
Typewriter.defaultProps = defaultProps;

export default Typewriter;
