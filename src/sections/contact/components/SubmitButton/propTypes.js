import PropTypes from 'prop-types';

const { node, string, oneOfType } = PropTypes;

export const propTypes = {
  children: oneOfType([node, string]).isRequired,
};
