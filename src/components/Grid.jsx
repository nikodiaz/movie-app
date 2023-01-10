import Card from './Card';

const Grid = ({ list }) => {
	return (
		<section className='grid-container'>
			<h3>Popular Movies</h3>
			<div className='grid'>
				{list && list.map((item) => <Card key={item.id} data={item} />)}
			</div>
		</section>
	);
};

export default Grid;
