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
		if (keyword === '') {
			setVisible(false);
		} else {
			navigate(`/search=${keyword}`);
			e.currentTarget.keyword.value = '';
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
					onBlur={() => setVisible(false)}
				/>
				<button
					type={`${visible ? 'button' : 'submit'}`}
					className='search-bar--btn'
					onClick={() => {
						setVisible(!visible);
					}}
				>
					<AiOutlineSearch></AiOutlineSearch>
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
