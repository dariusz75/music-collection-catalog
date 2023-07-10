import axios from 'axios';

const DB_BASE_URL = process.env.REACT_APP_MUSIC_COLLECTION_DB_BASE_URL;
const DB_TOKEN = process.env.REACT_APP_MUSIC_COLLECTION_DB_TOKEN;

export const deleteAlbum = (albumId: string) => {
	axios
		.delete(`${DB_BASE_URL}/albums/${albumId}`, {
			headers: {
				Authorization: `Bearer ${DB_TOKEN}`,
			},
		})
		.then((response) => {
			console.log(`Deleted post with ID ${albumId}`);
			console.log('delete response is:', response);
		})
		.catch((error) => {
			console.error(error);
		});
};

export const addAlbum = (albumDetails: any) => {
	axios
		.post(`${DB_BASE_URL}/albums`, albumDetails, {
			headers: {
				Authorization: `Bearer ${DB_TOKEN}`,
				'Content-Type': 'application/json',
			},
		})
		.then((response) => {
			console.log('Album added');
			console.log('response on delete is', response);
		})
		.catch((error) => {
			console.error(error);
		});
};

export const updateAlbum = (albumId: any, albumDetails: any) => {
	axios
		.patch(`${DB_BASE_URL}/albums/${albumId}`, albumDetails, {
			headers: {
				Authorization: `Bearer ${DB_TOKEN}`,
				'Content-Type': 'application/json',
			},
		})
		.then((response) => {
			console.log('Album updated');
			console.log('response on update is', response);
		})
		.catch((error) => {
			console.error(error);
		});
};
