import './App.css';
import { Navbar, AlbumDetailForm } from './components';
import { Collection, Home, Statistics } from './pages';

function App() {
	return (
		<main>
			<Navbar></Navbar>
			<Home></Home>
			<Collection></Collection>
			<AlbumDetailForm></AlbumDetailForm>
			<Statistics></Statistics>
		</main>
	);
}

export default App;
