import React from 'react';

import { TYPOGRAPHY } from '../../../styles';

// const MainHeading = h1`
//   font-size: ${TYPOGRAPHY.SIZE.XL};
//   font-weight: ${TYPOGRAPHY.WEIGHT.LG};
// `;

export const MainHeading = ({ children }) => <h1>{children}</h1>;
