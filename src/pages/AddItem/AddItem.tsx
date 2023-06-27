import { useState } from 'react';
import './addItem.css';
import { AlbumType } from '../../types/types';

const AddItem = () => {
	const [formState, setFormState] = useState<AlbumType>({
		id: '',
		createdTime: '',
		fields: {
			artist: '',
			title: '',
			category: [''],
			format: 'CD',
			purchaseDate: 'replace with date picker',
		},
	});

	const handleInputChange = (e: any) => {
		switch (e.target.id) {
			case 'artistName':
				setFormState({
					...formState,
					fields: { ...formState.fields, artist: e.target.value },
				});
				break;
			case 'albumTitle':
				setFormState({
					...formState,
					fields: { ...formState.fields, title: e.target.value },
				});
				break;
			case 'format':
				setFormState({
					...formState,
					fields: { ...formState.fields, format: e.target.value },
				});
				break;
			case 'category':
				setFormState({
					...formState,
					fields: { ...formState.fields, category: [e.target.value] },
				});
				break;
			case 'purchaseDate':
				setFormState({
					...formState,
					fields: { ...formState.fields, purchaseDate: e.target.value },
				});
				break;
			default:
				return;
		}
	};

	const handleSubmitAdd = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log('formState in handleSubmitAdd is', formState);
	};

	return (
		<div className='main-wrapper'>
			<div className='form-wrapper'>
				<form className='w-full max-w-lg' onSubmit={handleSubmitAdd}>
					<div className='flex flex-wrap -mx-3 mb-6'>
						<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='artistName'
							>
								Artist Name
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='artistName'
								type='text'
								onChange={(e) => handleInputChange(e)}
								value={formState.fields.artist}
							/>
						</div>
						<div className='w-full md:w-1/2 px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='albumTitle'
							>
								Album Title
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='albumTitle'
								type='text'
								onChange={(e) => handleInputChange(e)}
								value={formState.fields.title}
							/>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-2'>
						<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='format'
							>
								Format
							</label>
							<div className='relative'>
								<select
									className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='format'
									onChange={(e) => handleInputChange(e)}
									value={formState.fields.format}
								>
									<option value='CD'>CD</option>
									<option value='LP'>LP</option>
								</select>
								<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
									<svg
										className='fill-current h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
									>
										<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
									</svg>
								</div>
							</div>
						</div>
						<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='genre'
							>
								Genre
							</label>
							<div className='relative'>
								<select
									className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='category'
									onChange={(e) => handleInputChange(e)}
									value={formState.fields.category[0]}
								>
									<option value='Rock'>Rock</option>
									<option value='Metal'>Metal</option>
									<option value='Hip-Hop'>Hip-Hop</option>
								</select>
								<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
									<svg
										className='fill-current h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
									>
										<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
									</svg>
								</div>
							</div>
						</div>
						<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='purchaseDate'
							>
								Purchase Date
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='purchaseDate'
								type='text'
							/>
						</div>
					</div>
					<div className='flex justify-center mt-6'>
						<button
							className='shadow bg-blue-800 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded'
							type='submit'
						>
							ADD
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddItem;
