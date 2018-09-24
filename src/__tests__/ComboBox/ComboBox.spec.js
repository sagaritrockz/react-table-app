import React from 'react';
import Enzyme from 'enzyme';
import Adaptar from 'enzyme-adapter-react-16.3';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ComboBox from '../../Components/ComboBox/ComboBox';
import Select from "../../Components/Elements/Select";
import Button from "../../Components/Elements/Button";

Enzyme.configure({adapter: new Adaptar()});

describe('ComboBox', () => {
    it('should render correctly', () => {
        const 
            filters = {},
            onApply = function() {},
            clearFilter = function() {},
            searchValue = 0,
            searchOn = 0,
            updateState = function() {},
            searchValueKey = "_paginationDropdown",
            searchOnKey = "_page",
            primaryFilters = [],
            secondaryFilters = [],
            secondaryFiltersKey = "_secondaryFilters"

        const output = shallow(
            <ComboBox
                filters={filters}
                apply={onApply}
                clearFilter={clearFilter}
                secondaryFilterVal={String(searchValue)}
                primaryFilterVal={String(searchOn)}
                updateState={updateState}
                secondaryFilterKey={searchValueKey}
                primaryFilterKey={searchOnKey}
                primaryFilters={primaryFilters}
                secondaryFilters={secondaryFilters}
                secondaryFiltersKey={secondaryFiltersKey}
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});