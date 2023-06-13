import './navbar.css';
import { FC, useState } from 'react';
import { FaBars, FaMusic } from 'react-icons/fa';

import { links, socialLinks } from './links';

const Navbar: FC = () => {
	const [showLinks, setShowLinks] = useState(true);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

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
				{showLinks && (
					<div className='links-container'>
						<ul className='links'>
							{links.map((link) => {
								const { id, url, text } = link;
								return (
									<li key={id}>
										<a href={url}>{text}</a>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
