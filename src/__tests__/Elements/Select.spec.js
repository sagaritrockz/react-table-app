import React from 'react'
import Enzyme from 'enzyme'
import Adaptar from 'enzyme-adapter-react-16.3'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Select from '../../Components/Elements/Select'

Enzyme.configure({adapter: new Adaptar()});

describe('Select', () => {
    it('should render correctly with empty', () => {
        const output = shallow(
            <Select
                list={[]}
                value={"0"}
                change={function(){}}
                name="MockName"
                defaultOption="Select"
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
  
    it('should render correctly for if condition', () => {
        const list = ['Region', 'IncomeLevels', 'LendingTypes'];
        const output = shallow(
            <Select
                list={list}
                value={"0"}
                change={function(){}}
                name="MockName"
                defaultOption="Select"
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('should render correctly for else condition', () => {
        const list = ['Region', 'IncomeLevels', 'LendingTypes'];
        const output = shallow(
            <Select
                list={list}
                value={"0"}
                change={function(){}}
                name="MockName"
                defaultOption=""
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});