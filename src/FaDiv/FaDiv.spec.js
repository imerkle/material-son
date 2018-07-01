import React from 'react';
import { shallow } from 'enzyme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import FaDiv from './FaDiv';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('FaDiv', () => {
  it("Renders FaDiv",() => {
    const str = "Hello World";
    const element = shallow(<MuiThemeProvider><FaDiv >{str}</FaDiv></MuiThemeProvider>);
    expect(element.prop('children')).toEqual(str);
  });
  it("Renders With Props",() => {
    const str = "Hello World";
    const element = shallow(<MuiThemeProvider><FaDiv  r c fa fs>{str}</FaDiv></MuiThemeProvider>);
    expect(element.prop('children')).toEqual(str);
  });
});
