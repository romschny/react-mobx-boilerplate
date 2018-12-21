import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const ButtonStyles = css`
  border: none;
  margin: 20px;
  padding: 20px 40px;
  background: #e74c3c;
  color: #fff;
`;

const Button = ({ children, ...otherProps }) => (
  <button
    type="button"
    css={ButtonStyles}
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

export default Button;
