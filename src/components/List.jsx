import Layout from './Layout/Layout';

const List = ({ title, children }) => {
	return (
		<Layout>
			<h3 className='list--title'>{title}</h3>
			<section className='list--container'>{children}</section>
		</Layout>
	);
};

export default List;
