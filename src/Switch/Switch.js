// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Switch } from 'material-ui';

const styleSheet = createStyleSheet('MSonSwitch', {
  checked: {
    color: '#f8f8f8'
  },
});

function SwitchButton(props) {
  return (
      <Switch
        classes={{
          checked: props.classes.checked
        }}
      {...props}
    />
  );
}

SwitchButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SwitchButton);
