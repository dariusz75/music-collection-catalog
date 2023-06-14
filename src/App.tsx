import {
	createBrowserRouter,
	RouterProvider,
	BrowserRouter,
} from 'react-router-dom';
import './App.css';
import { Navbar, AlbumDetailForm } from './components';
import { About, Collection, Home, Statistics } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				index: true,
				element: <About />,
			},
			{
				path: 'collection',
				element: <Collection />,
			},
			{
				path: 'statistics',
				element: <Statistics />,
			},
		],
	},
]);

function App() {
	return (
		<main>
			<RouterProvider router={router}></RouterProvider>
		</main>
	);
}

export default App;
