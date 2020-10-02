import PropTypes from 'prop-types';

const { oneOfType, node, string } = PropTypes;

export const propTypes = {
  prefix: oneOfType([node, string]),
  children: oneOfType([node, string]).isRequired,
};

export const defaultProps = {
  prefix: '',
};
