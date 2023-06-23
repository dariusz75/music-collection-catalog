import { useContext, useEffect } from 'react';

import { AdminContext } from '../../context/AdminContext';

type RecordType = [
	{
		id: string;
		createdTime: string;
		fields: {
			artist: string;
			title: string;
			category: string[];
			format: string;
			purchaseDate: string;
		};
	}
];

interface AlbumListProps {
	albums: RecordType;
}

const AlbumList = (props: AlbumListProps) => {
	const {admin, setAdmin} = useContext(AdminContext);
	const { albums } = props;

	useEffect(() => {
		console.log('CONTEXTTT admin is', admin);
	}, []);

	return (
		<>
			<div className='flex flex-col'>
				<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
						<div className='overflow-hidden'>
							<table className='min-w-full text-left text-sm font-light'>
								<thead className='border-b font-medium dark:border-neutral-500'>
									<tr>
										<th scope='col' className='px-6 py-4'>
											Artist
										</th>
										<th scope='col' className='px-6 py-4'>
											Title
										</th>
										<th scope='col' className='px-6 py-4'>
											Format
										</th>
										<th scope='col' className='px-6 py-4'>
											Genre
										</th>
										<th scope='col' className='px-6 py-4'>
											Purchase Date
										</th>
										<th></th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{albums.map((album) => {
										const { artist, title, format, category, purchaseDate } =
											album.fields;

										return (
											<tr
												key={album.id}
												className='border-b dark:border-neutral-500'
											>
												<td className='whitespace-nowrap px-6 py-4'>
													{artist}
												</td>
												<td className='whitespace-nowrap px-6 py-4'>{title}</td>
												<td className='whitespace-nowrap px-6 py-4'>
													{format}
												</td>
												<td className='whitespace-nowrap px-6 py-4'>
													{category[0]}
												</td>
												<td className='whitespace-nowrap px-6 py-4'>
													{purchaseDate}
												</td>
												<td className='whitespace-nowrap px-2 py-2'>
                        {admin && <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
														Edit
													</button>}
												</td>
												<td className='whitespace-nowrap px-2 py-2'>
                        {admin && <button className='bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
														Delete
													</button>}
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AlbumList;
