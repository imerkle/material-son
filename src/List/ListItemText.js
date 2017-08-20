// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {ListItemText} from 'material-ui';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

const styleSheetExport = {
  text: {
    fontSize: "14px",
  }
};


class WListItemText extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {...others} = this.props;
    return(
      <ListItemText {...others}/>
    );
  }
}
export default withStyles(styleSheetExport)(WListItemText);
