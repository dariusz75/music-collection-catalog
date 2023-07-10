import { useEffect } from 'react';

import AlbumList from './AlbumList';
import { useAxios } from '../../hooks/useAxios';

import { IJsonResponse } from '../../types/types';

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
			{!loading && !error && data && (
				<AlbumList albums={data.records} request={request} />
			)}
		</div>
	);
};

export default Collection;
