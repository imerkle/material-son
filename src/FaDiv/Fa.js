//@flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classNames from 'classnames';

const styleSheetExport = createStyleSheet('FaFlexbox', theme => ({
  fa: {
    flex: "0 1 auto"
  },
  fs: {
    flex: "1 1 auto"
  }
}));

const FaFlexbox = (props) => {
  const {children, classes, className, fs,...other} = props;
  return(
    <div
      className={classNames(
        {[classes.fa]: (!fs) },
        {[classes.fs]: fs === true},
         className)}
       {...other}>
      {children}
    </div>
  );
  FaFlexbox.defaultProps = {
    fs: false
  }
  FaFlexbox.propTypes = {
    children: PropTypes.node.isRequired,
    fs:  PropTypes.bool,
  }
}

export default withStyles(styleSheetExport)(FaFlexbox)
