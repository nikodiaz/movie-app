const Pagination = ({ page, total_pages, prev, next }) => {
	return (
		<div className='pagination'>
			<button title='Previous 20 movies' onClick={prev}>
				Prev
			</button>
			<div>
				{page}
				<span> / </span>
				{total_pages}
			</div>
			<button title='Next 20 movies' onClick={next}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
