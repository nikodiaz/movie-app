const Categories = ({ children }) => {
	return (
		<div className='categories'>
			<h3>Categories</h3>
			<div className='categories-tags'>{children}</div>
		</div>
	);
};

export default Categories;
