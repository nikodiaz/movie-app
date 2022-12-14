const List = ({ title, children }) => {
	return (
		<>
			<h2 className='list--title'>{title}</h2>
			<section className='list--container'>{children}</section>
		</>
	);
};

export default List;
