import './error.css';
import { FC } from 'react';
import {
	isRouteErrorResponse,
	useRouteError,
	useNavigate,
} from 'react-router-dom';

import img from '../../assets/not-found.svg';

const Error: FC = () => {
	const navigate = useNavigate();
	const error = useRouteError() as Error;
	console.log(error);

	if (!isRouteErrorResponse(error)) {
		return null;
	}

	if (error.status === 404) {
		return (
			<div className='wrapper'>
				<img src={img} alt='not found' />
				<h3>Ups!</h3>
				<p>We can't seem to find page you are looking for</p>
				<span className='link' onClick={() => navigate(-1)}>
					BACK
				</span>
			</div>
		);
	} else {
		return (
			<div>
				<h3>something went wrong </h3>
			</div>
		);
	}
};

export default Error;
