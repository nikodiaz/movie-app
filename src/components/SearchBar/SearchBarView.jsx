import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBar.scss';

const SearchBarView = ({
	onSubmit,
	visible,
	onClick,
	search,
	onChange,
	onBlur,
}) => {
	return (
		<div className='search-bar'>
			<form
				onSubmit={onSubmit}
				className={`search-bar--container ${visible ? 'active' : ''}`}
			>
				<input
					type='text'
					className='search-bar--input'
					placeholder='Search...'
					name='keyword'
					onChange={onChange}
					value={search}
					onBlur={onBlur}
				/>
				<button
					type={`${visible ? 'button' : 'submit'}`}
					className='search-bar--btn'
					onClick={onClick}
				>
					<AiOutlineSearch></AiOutlineSearch>
				</button>
			</form>
		</div>
	);
};

export default SearchBarView;
