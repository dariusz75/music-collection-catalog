import { useEffect, useState } from 'react';
import axios from 'axios';

import AlbumList from './AlbumList';
import { useAxios } from '../../hooks/useAxios';

const DB_TOKEN = process.env.REACT_APP_MUSIC_COLLECTION_DB_TOKEN;
const dbBaseUrl = 'https://api.airtable.com/v0/appFkhCkXUohGPZZ4';

export interface IJsonResponse {
	records: [
		{
			id: string;
			createdTime: string;
			fields: {
				artist: string;
				title: string;
				genre: string[];
				format: string;
				purchaseDate: string;
			};
		}
	];
}

const Collection: React.FunctionComponent = () => {
	const [loading, data, error, request] = useAxios<IJsonResponse>({
		method: 'get',
		url: `${dbBaseUrl}/albums`,
		headers: {
			Authorization: `Bearer ${DB_TOKEN}`,
		},
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
