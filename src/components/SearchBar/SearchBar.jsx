import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ onSubmit, search }) => {
	return (
		<form onSubmit={onSubmit} className='search-form'>
			<input
				type='text'
				name='search'
				placeholder='Search...'
				autoComplete='off'
				value={search}
			/>
			<button type='submit' className='btn-search'>
				<i className='bi bi-search'></i>
			</button>
		</form>
	);
};

export default SearchBar;
