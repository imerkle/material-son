//@flow weak

import React from 'react';
import PropTypes from 'prop-types';

const Span = (props) => {
  const {children, ...other} = props;
  return(
    <span
       {...other}>
      {children}
    </span>
  );
  Span.defaultProps = {
    children: null
  }
  Span.propTypes = {
    children: PropTypes.node,
  }
}

export default Span;
