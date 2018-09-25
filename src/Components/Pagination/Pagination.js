import React from "react";
import { number, string, func } from "prop-types";
import Select from "../Elements/Select";
import Button from "../Elements/Button";
import "./Pagination.css";

const Pagination = ({
	total,
	perPage,
	page,
	pages,
	pageKey,
	paginate,
	updateState,
	dropdownKey,
	dropdownVal
}) => {
	let to = perPage * page;
	let from = to - perPage + 1;
	const onNext = e => {
		e.preventDefault();
		if (page + 1 <= pages) {
			paginate(pageKey, page + 1);
		}
	};
	const onPrev = e => {
		e.preventDefault();
		if (page - 1 >= 1) {
			paginate(pageKey, page - 1);
		}
	};
	const onSelect = (name, value) => {
		paginate(pageKey, parseInt(value, 10));
		updateState(name, value);
	};

	return (
		<div className="pagination-container">
			<div class="pagination-text">
				Showing {from} to {to < total ? to : total} of {total} records
			</div>
			<div className="pagination">
				<Button label="Prev" name={pageKey} click={onPrev} />
				<Select
					list={Array.from(
						new Array(pages),
						(val, index) => index + 1
					)}
					value={dropdownVal}
					change={onSelect}
					name={dropdownKey}
				/>
				<Button label="Next" name={pageKey} click={onNext} />
			</div>
		</div>
	);
};

Pagination.defaultProps = {
	total: 10,
	perPage: 10,
	page: 1,
	pages: 1,
	pageKey: "",
	paginate: f => f,
	updateState: f => f,
	dropdownKey: "",
	dropdownVal: ""
};

Pagination.propTypes = {
	total: number.isRequired,
	perPage: number.isRequired,
	page: number.isRequired,
	pages: number.isRequired,
	pageKey: string.isRequired,
	paginate: func.isRequired,
	updateState: func.isRequired,
	dropdownKey: string.isRequired,
	dropdownVal: string.isRequired
};

export default Pagination;
