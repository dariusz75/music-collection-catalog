import './addItem.css';

const AddItem = () => {
	return (
		<div className='main-wrapper'>
			<div className='form-wrapper'>
				<form className='w-full max-w-lg'>
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
							/>
							{/* <p className='text-red-500 text-xs italic'>
						Please fill out this field.
					</p> */}
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
								>
									<option>New Mexico</option>
									<option>Missouri</option>
									<option>Texas</option>
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
									id='genre'
								>
									<option>Rock</option>
									<option>Metal</option>
									<option>Hip-Hop</option>
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
							className='shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
							type='button'
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
