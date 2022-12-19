import SearchBar from 'components/SearchBar/SearchBar';

const ResultsView = ({ children, title }) => {
	return (
		<div className='results'>
			<SearchBar />
			<h1 className='results-title'>{title}</h1>
			<div className='results-container'>{children}</div>
		</div>
	);
};

export default ResultsView;
