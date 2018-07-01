// @flow

import React from 'react';
import { shallow } from 'enzyme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Fa from './Fa';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Fa', () => {
  it("Renders Fa",() => {
    const str = "Hello World";
    const element = shallow(<MuiThemeProvider><Fa >{str}</Fa></MuiThemeProvider>);
    expect(element.prop('children')).toEqual(str);
  });
  it("Renders With Props",() => {
    const str = "Hello World";
    const element = shallow(<MuiThemeProvider><Fa fs>{str}</Fa></MuiThemeProvider>);
    expect(element.prop('children')).toEqual(str);
  });
});
