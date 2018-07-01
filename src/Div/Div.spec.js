// @flow

import React from 'react';
import { shallow } from 'enzyme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Div from './Div';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Div', () => {
  it("Renders Div",() => {
    const str = "Hello World";
    const element = shallow(<MuiThemeProvider><Div className="cl">{str}</Div></MuiThemeProvider>);
    expect(element.prop('children')).toEqual(str);
  });
});
