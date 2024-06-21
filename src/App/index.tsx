import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './pages/list';
import PokemonPage from './pages/pokemon';
import './styles/index.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ListPage />} />
				<Route path='/pokemon/:index' element={<PokemonPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
