import { createBrowserRouter } from 'react-router-dom';
import { About, Collection, Error, Home, Statistics, AddItem } from '../pages';
import ProtectedRoute from './protectedRoute';

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
				element: (
					<ProtectedRoute isAdmin={true}>
						<AddItem />
					</ProtectedRoute>
				),
			},
		],
	},
]);

export default router;
