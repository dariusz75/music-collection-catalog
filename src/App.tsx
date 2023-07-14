import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AdminProvider } from './context/AdminContext';
import { router } from './routes';

function App() {
	return (
		<main>
			<AdminProvider>
				<RouterProvider router={router}></RouterProvider>
			</AdminProvider>
		</main>
	);
}

export default App;
