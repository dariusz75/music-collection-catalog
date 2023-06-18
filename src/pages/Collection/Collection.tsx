import {  useEffect, useState } from 'react';
import axios from 'axios';

const DB_TOKEN = process.env.REACT_APP_MUSIC_COLLECTION_DB_TOKEN;

type albumsDataType = RecordType[];


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

// const testData: albumsDataType = [
//   {
//     id: "rec6jHXMmGsIkXKb8",
//     createdTime: "2023-06-12T20:42:28.000Z",
//     fields: {
//       Artist: "Nick Cave",
//       Title: "Murder Ballads",
//       Genre: [
//         "rec1WLEWT7bFVKyAk"
//       ],
//       Format: "CD",
//       PurchaseDate: "2003-11-11"
//     }
//   },
//   {
//     id: "rec6ycqLLe8LVIvJS",
//     createdTime: "2023-06-12T21:12:10.000Z",
//     fields: {
//       Artist: "Cypress Hill",
//       Title: "Till Death Do Us Part",
//       Genre: [
//         "recU45ztU9XMQGShJ"
//       ],
//       Format: "CD",
//       PurchaseDate: "2010-08-01"
//     }
//   },
//   {
//     id: "recDfJeV3tCLQDmx8",
//     createdTime: "2023-06-12T21:13:29.000Z",
//     fields: {
//       Artist: "Depeche Mode",
//       Title: "Violator",
//       Genre: [
//         "recKIbSdjSLbP3gk9"
//       ],
//       Format: "CD",
//       PurchaseDate: "2002-07-01"
//     }
//   },
//   {
//     id: "recLL4R1Gb48zwZv5",
//     createdTime: "2023-06-12T20:42:28.000Z",
//     fields: {
//       Artist: "Anette Askvik",
//       Title: "Liberty",
//       Genre: [
//         "reczPn3xYhy5U0Rup"
//       ],
//       Format: "CD",
//       PurchaseDate: "2022-11-01"
//     }
//   },
//   {
//     id: "recmtg3uEUmTybrqr",
//     createdTime: "2023-06-12T20:42:28.000Z",
//     fields: {
//       Artist: "Nick Cave",
//       Title: "Murder Ballads",
//       Genre: [
//         "rec1WLEWT7bFVKyAk"
//       ],
//       Format: "LP",
//       PurchaseDate: "2022-07-01"
//     }
//   }
// ];

interface AlbumListProps {
 albums: albumsDataType;
};



const AlbumList = (props: AlbumListProps) => {
  const { albums  } = props;
return (
  <>
  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">Artist</th>
              <th scope="col" className="px-6 py-4">Title</th>
              <th scope="col" className="px-6 py-4">Format</th>
              <th scope="col" className="px-6 py-4">Genre</th>
              <th scope="col" className="px-6 py-4">Purchase Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {albums.map((album) => {
            const {Artist, Title, Format, Genre} = album.fields
    return <tr key={album.id} className="border-b dark:border-neutral-500">
    <td className="whitespace-nowrap px-6 py-4">{Artist}</td>
    <td className="whitespace-nowrap px-6 py-4">{Title}</td>
    <td className="whitespace-nowrap px-6 py-4">{Format}</td>
    <td className="whitespace-nowrap px-6 py-4">{Genre} - fix key name in DB</td>
    <td className="whitespace-nowrap px-6 py-4">Fix it in DB</td>
    <td className="whitespace-nowrap px-2 py-2">
      <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
    </td>
    <td className="whitespace-nowrap px-2 py-2">
      <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
    </td>
  </tr>
  })}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
  
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

