import Layout from './Layout/Layout';

const Categories = ({ children }) => {
	return (
		<Layout>
			<div className='categories'>
				<h2>Categories</h2>
				<div className='categories-tags'>{children}</div>
			</div>
		</Layout>
	);
};

export default Categories;
