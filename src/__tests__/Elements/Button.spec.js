import React from 'react'
import Enzyme from 'enzyme'
import Adaptar from 'enzyme-adapter-react-16.3'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Button from '../../Components/Elements/Button'

Enzyme.configure({adapter: new Adaptar()});

describe('Button', () => {
    it('should render correctly', () => {
        const output = shallow(
          <Button click={function() {}} label="MockLabel" name="MockName" />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});