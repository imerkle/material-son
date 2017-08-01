//@flow weak

import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'material-ui';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import cx from 'classnames';

export const styleSheet = createStyleSheet('MsonTextField',theme => ({
  disabled: {},
  underline: {
    '&:hover:not($disabled):before': {
      backgroundColor: 'transparent',
    },
  },
}));

const TextFieldX = (props) => {
  const {
    withUnderline,
    classes,
    InputProps: {classes: classesInputProps,...otherInputProps},
    children,
    ...other,
  } = props;
  return(
    <TextField

        InputProps = {{
            classes: {
              ...classesInputProps,
              disabled: classes.disabled,
              underline: classes.underline,
            },
            ...otherInputProps
          }}
       {...other}
       >
      {children}
    </TextField>
  );
  TextFieldX.defaultProps = {
    children: null,
    InputProps: {},
    withUnderline: false,
  }
  TextFieldX.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    InputProps: PropTypes.object,
    withUnderline: PropTypes.bool,
  }
}

export default withStyles(styleSheet)(TextFieldX)
