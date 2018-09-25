import React from 'react'
import Enzyme from 'enzyme'
import Adaptar from 'enzyme-adapter-react-16.3'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Loader from '../../Components/Loader/Loader'

Enzyme.configure({adapter: new Adaptar()});

describe('Loader', () => {
    it('should render correctly on showLoader', () => {
        const showLoader = true
        const output = shallow(
          <Loader loading={showLoader} />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('should render correctly on hideLoader', () => {
        const showLoader = false
        const output = shallow(
          <Loader loading={showLoader} />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});