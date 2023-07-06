import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AlbumType, AddAlbumType, IJsonResponse } from '../../types/types';
import DatePicker from 'react-datepicker';
import React from 'react';

interface ModalProps {
	openModal: boolean;
	editAlbum: AlbumType;
}

const Modal = (props: any) => {
	const { openModal, albumToEdit } = props;
	const [open, setOpen] = useState(openModal);
	const [purchaseDate, setPurchaseDate] = useState(new Date());
	const [formState, setFormState] = useState<AddAlbumType>({
		fields: {
			artist: albumToEdit.fields.artist,
			title: albumToEdit.title,
			genre: [''],
			format: albumToEdit.format,
			purchaseDate: albumToEdit.purchaseDate,
		},
	});

	const cancelButtonRef = useRef(null);

	const handleDateChange = (date: any) => {};

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
					fields: { ...formState.fields, genre: [e.target.value] },
				});
				break;
			default:
				return;
		}
	};

	const handleUpdateAlbum = (e: any) => {
		e.preventDefault();
		console.log('submit update album');
	};

	useEffect(() => {
		console.log('albumToEdit in Modal is', albumToEdit);
		console.log('open in Modal is', open);
		console.log('openModal is', openModal);
		setOpen(openModal);
	}, [openModal]);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
								<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
									<div className='sm:flex sm:items-start'>
										<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
											<Dialog.Title
												as='h3'
												className='text-base font-semibold leading-6 text-gray-900'
											>
												Album details
											</Dialog.Title>
											<div className='mt-2'>
												<div className='form-wrapper'>
													<form
														className='w-full max-w-lg'
														onSubmit={handleUpdateAlbum}
													>
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
																		value={formState.fields.genre[0]}
																	>
																		<option value='rec6jHXMmGsIkXKb8'>
																			Alternative
																		</option>
																		<option value='reczPn3xYhy5U0Rup'>
																			Pop
																		</option>
																		<option label='Rock' value='Rock'>
																			Rock
																		</option>
																		<option value='Metal'>Metal</option>
																		<option value='recU45ztU9XMQGShJ'>
																			Hip-Hop
																		</option>
																		<option value='recDfJeV3tCLQDmx8'>
																			Synth
																		</option>
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
																<DatePicker
																	id='datePicker'
																	selected={purchaseDate}
																	onChange={(date) => handleDateChange(date)}
																/>
															</div>
														</div>
														<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
															<button
																type='submit'
																className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
																onClick={() => props.setOpen(false)}
															>
																Update
															</button>
															<button
																type='button'
																className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
																onClick={() => props.setOpen(false)}
																ref={cancelButtonRef}
															>
																Cancel
															</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Modal;
