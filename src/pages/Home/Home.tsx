import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

// This is not a standard page
// This is a placeholder for Navbar and for nesting navigation routs
const Home: FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Home;
