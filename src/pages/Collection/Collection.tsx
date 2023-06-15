import { FC, useEffect, useState } from 'react';
import axios from 'axios';

const Collection: FC = () => {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		axios
			.get('/albums', {
				headers: {
					Authorization: `Bearer patP9oVhHRJIDDO8W.3f8a5a428afdfde96abe26b05578db2aaf1eba80977e047b9c5e3c7cc3aa80b7`,
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
