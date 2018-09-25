import React from 'react'
import Enzyme from 'enzyme'
import Adaptar from 'enzyme-adapter-react-16.3'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Pagination from '../../Components/Pagination/Pagination'
import Select from "../../Components/Elements/Select"
import Button from "../../Components/Elements/Button"

Enzyme.configure({adapter: new Adaptar()});

describe('Pagination', () => {
    it('should render correctly', () => {
        const 
            total = 304,
            perPage = 10,
            page = 1,
            pages = 31,
            paginate = function() {},
            pageKey = "_page",
            dropdownKey = "_paginationDropdown",
            dropdownVal = "_page",
            updateState = function(){};

        const output = shallow(
            <Pagination
                total={total}
                perPage={parseInt(perPage, 10)}
                page={page}
                pages={pages}
                paginate={paginate}
                pageKey={pageKey}
                dropdownKey={dropdownKey}
                dropdownVal={dropdownVal}
                updateState={updateState}
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});