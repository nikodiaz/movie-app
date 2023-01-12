import Card from './Card';

const Grid = ({ list, media = '' }) => {
	return (
		<section className='grid-container'>
			<h3>Popular {media?.charAt(0).toUpperCase() + media?.slice(1)}</h3>
			<div className='grid'>
				{list && list.map((item) => <Card key={item.id} data={item} />)}
			</div>
		</section>
	);
};

export default Grid;
