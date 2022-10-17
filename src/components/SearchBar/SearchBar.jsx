import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss';

const SearchBar = () => {
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const keyword = e.currentTarget.keyword.value;
		navigate(`/search=${keyword}`);
		if (keyword === '') {
			navigate('/');
		}
		setVisible(false);
	};

	return (
		<div className='search-bar'>
			<form
				onSubmit={handleSubmit}
				className={`search-bar--container ${visible ? 'active' : ''}`}
			>
				<input
					type='text'
					className='search-bar--input'
					placeholder='Search...'
					name='keyword'
				/>
				<button
					type='button'
					className='search-bar--btn'
					onClick={() => {
						setVisible(!visible);
					}}
				></button>
				<button type='submit' className='search-bar--btn submit'>
					<AiOutlineSearch></AiOutlineSearch>
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
