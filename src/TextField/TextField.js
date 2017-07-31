//@flow weak

import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'material-ui';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import cx from 'classnames';

export const styleSheet = createStyleSheet('MsonTextField',theme => ({
  underline: {
    '&:hover:before': {
      backgroundColor: 'transparent',
    },
  },
}));

const TextFieldX = (props) => {
  const {
    withUnderline,
    classes,
    className,
    children,
    ...other,
  } = props;
  return(
    <TextField
       className = {cx(
         { [classes.underline] : !withUnderline },
         className
       )}
       {...other}
       >
      {children}
    </TextField>
  );
  TextFieldX.defaultProps = {
    children: null,
  }
  TextFieldX.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
  }
}

export default withStyles(styleSheet)(TextFieldX)
