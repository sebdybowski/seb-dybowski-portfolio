import React from 'react';
import { getCurrentYear } from './utils';

export const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      {`Footer ${getCurrentYear()}`}
    </div>
  </footer>
);
