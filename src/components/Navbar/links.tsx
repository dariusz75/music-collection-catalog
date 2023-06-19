import { ReactElement } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface Link {
	id: number;
	url: string;
	text: string;
}

interface SocialLink {
	id: number;
	url: string;
	icon: ReactElement<any, any>;
}

export const links: Link[] = [
	{
		id: 1,
		url: '/',
		text: 'about',
	},
	{
		id: 2,
		url: '/collection',
		text: 'collection',
	},
	{
		id: 3,
		url: '/statistics',
		text: 'statistics',
	},
  {
		id: 5,
		url: '/add',
		text: 'add album',
	},
];

export const socialLinks: SocialLink[] = [
	{
		id: 1,
		url: 'https://www.linkedin.com/in/dariusz-franczak-52251753/',
		icon: <FaLinkedin />,
	},
	{
		id: 2,
		url: 'https://github.com/dariusz75',
		icon: <FaGithub />,
	},
];
