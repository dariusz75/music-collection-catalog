import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import './App.css';
import { About, Collection, Error, Home, Statistics, AddItem } from './pages';

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
			<RouterProvider router={router}></RouterProvider>
		</main>
	);
}

export default App;
