import React from 'react';
import { shallow } from 'enzyme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import ListItemText from './ListItemText';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('ListItemText', () => {
  it("Renders ListItemText",() => {
    const str = "Hello World";
    const element = shallow(<MuiThemeProvider><ListItemText primary={str} /></MuiThemeProvider>);
    expect(element.prop('primary')).toEqual(str);
  });
});
