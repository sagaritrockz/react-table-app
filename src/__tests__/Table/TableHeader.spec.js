import React from 'react'
import Enzyme from 'enzyme'
import Adaptar from 'enzyme-adapter-react-16.3'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TableHeader from '../../Components/Table/TableHeader'
import { HEADERS } from '../../Constants/Constants'

Enzyme.configure({adapter: new Adaptar()});

describe('TableHeader', () => {
    it('should render correctly', () => {      
        const output = shallow(
            <TableHeader headers={HEADERS} />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});