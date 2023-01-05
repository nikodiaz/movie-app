import Layout from './Layout/Layout';

const List = ({ title, children }) => {
	return (
		<Layout>
			<h2 className='list--title'>{title}</h2>
			<section className='list--container'>{children}</section>
		</Layout>
	);
};

export default List;
