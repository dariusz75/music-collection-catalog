import { useEffect } from 'react';

import AlbumList from './AlbumList';
import { useAxios } from '../../hooks/useAxios';

export interface IJsonResponse {
	records: [
		{
			id: string;
			createdTime: string;
			fields: {
				artist: string;
				title: string;
				category: string[];
				format: string;
				purchaseDate: string;
			};
		}
	];
}

const Collection = () => {
	const [loading, data, error, request] = useAxios<IJsonResponse>({
		url: 'albums',
	});

	useEffect(() => {
		console.log('data from hook is', data);
	}, []);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{!loading && error && <p>{error}</p>}
			{!loading && !error && data && <AlbumList albums={data.records} />}
		</div>
	);
};

export default Collection;
