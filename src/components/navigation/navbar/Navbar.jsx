// @flow
import React from 'react';
import type { Node } from 'react';
import { NAVIGATION_LINKS } from './constants';

export const Navbar = (): Node => <nav>
  { NAVIGATION_LINKS.map(
    ({ LABEL, ORDER }) =><p key={ORDER}>{LABEL}</p>
  )}
</nav>;
