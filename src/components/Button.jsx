import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Button = ({ children, ...otherProps }) => (
  <button
    type="button"
    {...otherProps}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: 'Button',
};

export default styled(Button)`
  border: none;
  margin: 20px;
  padding: 20px 40px;
  background: #e74c3c;
  color: #fff;
`;
