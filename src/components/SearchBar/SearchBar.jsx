import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
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
			toast.error('Ingresa una búsqueda!', {
				style: {
					background: '#1d1d1d',
					color: '#fff',
				},
			});
		} else {
			navigate(`/search/${keyword}`);
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
