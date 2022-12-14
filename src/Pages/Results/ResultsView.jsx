const ResultsView = ({ children, title }) => {
	return (
		<div className='results'>
			<h1 className='results-title'>{title}</h1>
			<div className='results-container'>{children}</div>
		</div>
	);
};

export default ResultsView;
