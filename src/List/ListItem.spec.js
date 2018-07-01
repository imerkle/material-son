import React from 'react';
import { shallow } from 'enzyme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import ListItem from './ListItem';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('ListItem', () => {
  it("Renders ListItem",() => {
    const str = "Hello World";
    const element = shallow(<MuiThemeProvider><ListItem >{str}</ListItem></MuiThemeProvider>);
    expect(element.prop('children')).toEqual(str);
  });
});
