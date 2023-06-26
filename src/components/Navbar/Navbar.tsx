import './navbar.css';
import { useState, useRef, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
	FaBars,
	FaMusic,
	FaArrowAltCircleDown,
	FaArrowAltCircleUp,
} from 'react-icons/fa';
import { links, socialLinks } from './links';
import { AdminContext } from '../../context/AdminContext';

const ADMIN_NAME = process.env.REACT_APP_MUSIC_COLLECTION_ADMIN_NAME;
const ADMIN_PASSWORD = process.env.REACT_APP_MUSIC_COLLECTION_ADMIN_PASSWORD;

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const { admin, setAdmin } = useContext(AdminContext);

	const linksContainerRef = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLUListElement>(null);

	interface LinkStyles {
		[Key: string]: string;
	}

	const linkStyles: LinkStyles = {
		height: showLinks
			? `${linksRef.current?.getBoundingClientRect().height}px`
			: '0px',
	};

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	const toggleLoginFormOpen = () => {
		setIsLoginFormOpen(!isLoginFormOpen);
	};

	const handleInputChange = (e: any) => {
		if (e.target.id === 'name') {
			setName(e.target.value);
		} else if (e.target.id === 'password') {
			setPassword(e.target.value);
		}
	};

	const handleSubmitLogin = (e: any) => {
		e.preventDefault();
		if (name === ADMIN_NAME && password === ADMIN_PASSWORD) {
			setAdmin(true);
			setIsLoginFormOpen(false);
		} else {
			console.log('wrong login details');
		}
		console.log('submitted', name, password);
	};

	const handleLogOut = () => {
		setAdmin(false);
	};

	useEffect(() => {
		console.log('admin is', admin);
	}, []);

	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<div className='logo'>
						<FaMusic />
					</div>
					<button className='nav-toggle' onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>

				<div
					className='links-container'
					ref={linksContainerRef}
					style={linkStyles}
				>
					<ul className='links' ref={linksRef}>
						{links.map(({ id, url, text, forAdminOnly }) => (
							<li
								className={
									!admin && forAdminOnly ? 'nav-link hidden' : 'nav-link'
								}
								key={id}
							>
								<NavLink to={url}>{text}</NavLink>
							</li>
						))}
					</ul>
				</div>
				{/* social media links */}
				<ul className='social-icons'>
					{socialLinks.map(({ id, url, icon }) => (
						<li key={id}>
							<a href={url} target='_new'>
								{icon}
							</a>
						</li>
					))}
				</ul>
				<div className='login-container'>
					{!admin && (
						<button
							className='login-btn bg-blue-800 hover:bg-blue-700 text-white py-2 px-2 rounded'
							onClick={toggleLoginFormOpen}
						>
							<span>LOGIN</span>
							<span>
								{!isLoginFormOpen ? (
									<FaArrowAltCircleDown />
								) : (
									<FaArrowAltCircleUp />
								)}
							</span>
						</button>
					)}
					{admin && (
						<button
							className='login-btn bg-blue-800 hover:bg-blue-700 text-white py-2 px-2 rounded'
							onClick={handleLogOut}
						>
							<span>LOG OUT</span>
						</button>
					)}
					{isLoginFormOpen && (
						<div className='login-form-wrapper'>
							<form action='' onSubmit={handleSubmitLogin}>
								<div className='form-row'>
									<label htmlFor='name' className='text-xs'>
										Name:
									</label>
									<input
										type='text'
										id='name'
										className='text-xs p-1'
										value={name}
										onChange={(e) => handleInputChange(e)}
									/>
								</div>
								<div className='form-row'>
									<label htmlFor='password' className='text-xs'>
										Password:
									</label>
									<input
										type='text'
										id='password'
										className='text-xs p-1'
										onChange={(e) => handleInputChange(e)}
									/>
								</div>
								<button
									type='submit'
									className='bg-blue-800 hover:bg-blue-700 text-white text-xs font-normal py-1 px-1 rounded'
								>
									SUBMIT
								</button>
							</form>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
