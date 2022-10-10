import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getData = async (url) => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setLoading(false);
				setData(data);
				setError(false);
			} catch (error) {
				setLoading(true);
				setError(true);
			}
		};
		getData(url);
	}, [url]);
	return { data, loading, error };
};

export default useFetch;
