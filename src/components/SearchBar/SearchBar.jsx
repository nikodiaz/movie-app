import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBarView from './SearchBarView';

const SearchBar = () => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const handleChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const keyword = e.currentTarget.keyword.value;
		if (keyword === '') {
			console.log('Ingresa una búsqueda');
		} else {
			navigate(`/search=${keyword}`);
			setSearch('');
		}
	};

	return (
		<SearchBarView
			onSubmit={handleSubmit}
			search={search}
			onChange={handleChange}
		/>
	);
};

export default SearchBar;
