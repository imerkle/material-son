// @flow

import React from 'react';
import { shallow } from 'enzyme';
import {MuiThemeProvider} from 'material-ui/styles';
import Div from './Div';

describe('Div', () => {
  it("Renders Div",() => {
    const str = "Hello World";
    const element = shallow(<MuiThemeProvider><Div >{str}</Div></MuiThemeProvider>);
    expect(element.prop('children')).toEqual(str);
  });
});
