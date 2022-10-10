import './Categories.scss';

const Categories = ({ data }) => {
	return (
		<div className='categories'>
			<h2>By Category</h2>
			<div className='categories--tags'>
				{data.map((genre) => {
					return (
						<div key={genre.id} className='tag' data-id={genre.id}>
							{genre.name}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Categories;
