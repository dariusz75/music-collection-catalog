import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

const DB_BASE_URL = process.env.REACT_APP_MUSIC_COLLECTION_DB_BASE_URL;
const DB_TOKEN = process.env.REACT_APP_MUSIC_COLLECTION_DB_TOKEN;

const defaultConfig: AxiosRequestConfig = {
	method: 'get',
	headers: {
		Authorization: `Bearer ${DB_TOKEN}`,
	},
};

export const useAxios = <T>(
	config: AxiosRequestConfig = defaultConfig,
	loadOnStart: boolean = true
): [boolean, T | undefined, string, () => void] => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<T>();
	const [error, setError] = useState('');

	useEffect(() => {
		if (loadOnStart) {
			sendRequest();
		} else {
			setLoading(false);
		}
	}, []);

	const request = () => {
		sendRequest();
	};

	const sendRequest = () => {
		setLoading(true);

		const mergedConfig = {
			...defaultConfig,
			...config,
			url: `${DB_BASE_URL}/${config.url}`,
		};

		axios(mergedConfig)
			.then((response) => {
				setError('');
				setData(response.data);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	return [loading, data, error, request];
};
