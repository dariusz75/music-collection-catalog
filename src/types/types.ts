export type AlbumType = {
	id: string;
	createdTime: string;
	fields: {
		artist: string;
		title: string;
		category: string[];
		format: string;
		purchaseDate: string;
	};
};

export type AddAlbumType = {
	fields: {
		artist: string;
		title: string;
		genre: string[];
		format: string;
		purchaseDate: string;
	};
};

export interface IJsonResponse {
	records: AlbumType[];
}
