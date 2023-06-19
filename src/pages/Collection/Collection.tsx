import {  useEffect, useState } from 'react';
import axios from 'axios';

import AlbumList from './AlbumList';

const DB_TOKEN = process.env.REACT_APP_MUSIC_COLLECTION_DB_TOKEN;
const dbBaseUrl = 'https://api.airtable.com/v0/appFkhCkXUohGPZZ4'

const Collection = () => {
  
  const [isLoading, setIsLoading] = useState(true);
	const [albums, setAlbums] = useState([]);
  const [error, setError] = useState({message:''});

  
  const getCollection = async () => {
    try {
      const res = await axios
      .get(`${dbBaseUrl}/albums`, {
        headers: {
          Authorization: `Bearer ${DB_TOKEN}`,
        },
      });
      const albumsFetched = res?.data.records;
      setAlbums(albumsFetched);
      console.log('response is', res);
      console.log('albums fetched from api are', albumsFetched);
      setIsLoading(false);
    } catch(err) {
        setError({message: error.message});
    } finally {
      setIsLoading(false);
    }
  }

	useEffect(() => {
		getCollection()
    
	}, []);
  

	return <div>
    {isLoading && <p>Loading...</p>}
    {!isLoading && error.message && <p>{error.message}</p>}
    {!isLoading && !error.message && albums && <AlbumList albums={albums} />}
    </div>;
};

export default Collection;

