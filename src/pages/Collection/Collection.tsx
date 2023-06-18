import {  useEffect, useState } from 'react';
import axios from 'axios';

const DB_TOKEN = process.env.REACT_APP_MUSIC_COLLECTION_DB_TOKEN;

const testData: albumsDataType = {
  records:[
  {
    id: "rec6jHXMmGsIkXKb8",
    createdTime: "2023-06-12T20:42:28.000Z",
    fields: {
      Artist: "Nick Cave",
      Title: "Murder Ballads",
      Genre: [
        "rec1WLEWT7bFVKyAk"
      ],
      Format: "CD",
      PurchaseDate: "2003-11-11"
    }
  },
  {
    id: "rec6ycqLLe8LVIvJS",
    createdTime: "2023-06-12T21:12:10.000Z",
    fields: {
      Artist: "Cypress Hill",
      Title: "Till Death Do Us Part",
      Genre: [
        "recU45ztU9XMQGShJ"
      ],
      Format: "CD",
      PurchaseDate: "2010-08-01"
    }
  },
  {
    id: "recDfJeV3tCLQDmx8",
    createdTime: "2023-06-12T21:13:29.000Z",
    fields: {
      Artist: "Depeche Mode",
      Title: "Violator",
      Genre: [
        "recKIbSdjSLbP3gk9"
      ],
      Format: "CD",
      PurchaseDate: "2002-07-01"
    }
  },
  {
    id: "recLL4R1Gb48zwZv5",
    createdTime: "2023-06-12T20:42:28.000Z",
    fields: {
      Artist: "Anette Askvik",
      Title: "Liberty",
      Genre: [
        "reczPn3xYhy5U0Rup"
      ],
      Format: "CD",
      PurchaseDate: "2022-11-01"
    }
  },
  {
    id: "recmtg3uEUmTybrqr",
    createdTime: "2023-06-12T20:42:28.000Z",
    fields: {
      Artist: "Nick Cave",
      Title: "Murder Ballads",
      Genre: [
        "rec1WLEWT7bFVKyAk"
      ],
      Format: "LP",
      PurchaseDate: "2022-07-01"
    }
  }
]};
interface AlbumListProps {
  recordData: albumsDataType;
};

type RecordType = {
  id: string;
  createdTime: string;
  fields: {
    Artist: string;
    Title: string;
    Genre: string[];
    Format: string;
    PurchaseDate: string;
  }
};

type albumsDataType = {
  records: RecordType[];
};

const AlbumList = (props: AlbumListProps) => {
  const { records  } = props.recordData;
return (
  <>
  {records.map((record) => {
    return <p key={record.id}>{record.fields.Artist}</p>
  })}
  </> 
  )
}


const Collection = () => {
  const [isLoading, setIsLoading] = useState(true);
	const [albums, setAlbums] = useState([]);
  const [error, setError] = useState({message:''});
  
  const getCollection = async () => {
    try {
      const res = await axios
      .get('/albums', {
        headers: {
          Authorization: `Bearer ${DB_TOKEN}`,
        },
      });
      const records = res?.data;
      console.log('response is', res);
      setAlbums(records);
      console.log('records from api are', records);
      setIsLoading(false);
    } catch(err) {
        setError({message: error.message});
    } finally {
      setIsLoading(false);
    }
  }

	useEffect(() => {
    console.log('rendered', DB_TOKEN)
		getCollection()
    
	}, []);



// return <div>
//   <AlbumList recordData={testData} />
// </div>
  

	return <div>
    {isLoading && <p>Loading...</p>}
    {!isLoading && error.message && <p>{error.message}</p>}
    {!isLoading && !error.message && albums && <AlbumList recordData={testData} />}
    </div>;
};

export default Collection;

