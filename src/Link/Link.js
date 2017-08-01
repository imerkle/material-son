//@flow weak

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import cx from 'classnames';

export const styleSheet = createStyleSheet('MsonLink',theme => ({
  root: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    paddingBottom: '5px',
    borderBottom: `2px solid transparent`,
    '&:hover': {
      borderColor: theme.palette.text.primary,
    },
  },
  faded: {
    transition: '.15s linear color',
    color: theme.palette.text.hint,
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      borderColor: `transparent`,
    },
  },
}));

const LinkX = (props) => {
  const {
    faded,
    classes,
    className,
    children,
    ...other,
  } = props;
  return(
    <Link
       className = {cx(
         classes.root,
         { [classes.faded] : faded },
         className
       )}
       {...other}
       >
      {children}
    </Link>
  );
  LinkX.defaultProps = {
    children: null,
  }
  LinkX.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
  }
}

export default withStyles(styleSheet)(LinkX)
