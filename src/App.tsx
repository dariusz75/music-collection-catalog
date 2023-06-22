import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { About, Collection, Error, Home, Statistics, AddItem } from './pages';
import { AdminContextProvider } from './context/AdminContext';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
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
			{
				path: 'add',
				element: <AddItem />,
			},
		],
	},
]);

function App() {
	return (
		<main>
			<AdminContextProvider>
				<RouterProvider router={router}></RouterProvider>
			</AdminContextProvider>
		</main>
	);
}

export default App;
