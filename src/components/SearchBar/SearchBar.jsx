import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBarView from './SearchBarView';

const SearchBar = () => {
	const [visible, setVisible] = useState(false);
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const handleBlur = () => {
		setVisible(false);
		setSearch('');
	};

	const handleClick = (e) => {
		setVisible(true);
		const btn = e.currentTarget;
		const form = btn.parentElement;
		const input = form.querySelector('input');
		input.focus();
	};

	const handleChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const keyword = e.currentTarget.keyword.value;
		if (keyword === '') {
			setVisible(false);
		} else {
			navigate(`/search=${keyword}`);
			setSearch('');
		}
		setVisible(false);
	};

	return (
		<SearchBarView
			onSubmit={handleSubmit}
			onClick={handleClick}
			visible={visible}
			search={search}
			onChange={handleChange}
			onBlur={handleBlur}
		/>
	);
};

export default SearchBar;
