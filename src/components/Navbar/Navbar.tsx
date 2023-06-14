import './navbar.css';
import { FC, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaMusic } from 'react-icons/fa';
import { links, socialLinks } from './links';

const Navbar: FC = () => {
	const [showLinks, setShowLinks] = useState(false);

	const linksContainerRef = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLUListElement>(null);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	interface LinkStyles {
		[Key: string]: string;
	}

	const linkStyles: LinkStyles = {
		height: showLinks
			? `${linksRef.current?.getBoundingClientRect().height}px`
			: '0px',
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

				<div
					className='links-container'
					ref={linksContainerRef}
					style={linkStyles}
				>
					<ul className='links' ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<NavLink to={url}>{text}</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
				{/* social media links */}
				<ul className='social-icons'>
					{socialLinks.map((socialIcon) => {
						const { id, url, icon } = socialIcon;
						return (
							<li key={id}>
								<a href={url} target='_new'>
									{icon}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
