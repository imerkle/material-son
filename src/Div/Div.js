//@flow weak

import React from 'react';
import PropTypes from 'prop-types';

const Div = (props) => {
  const {children, ...other} = props;
  return(
    <div
       {...other}>
      {children}
    </div>
  );
  Div.defaultProps = {
    children: null
  }
  Div.propTypes = {
    children: PropTypes.node,
  }
}

export default Div;
