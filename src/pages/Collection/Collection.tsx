import { FC, useEffect, useState } from 'react';
import axios from 'axios';

const DB_TOKEN = process.env.REACT_APP_MUSIC_COLLECTION_DB_TOKEN;

const Collection: FC = () => {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
    console.log('rendered', DB_TOKEN)
		axios
			.get('/albums', {
				headers: {
					Authorization: `Bearer ${DB_TOKEN}`,
				},
			})
			.then(function (response) {
				console.log(response);
				setAlbums(response.data.records);
				console.log('albums are', albums);
			});
	}, []);

	return <div>Collection Page Component</div>;
};

export default Collection;
