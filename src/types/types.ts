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
