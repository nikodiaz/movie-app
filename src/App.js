//Styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'typeface-poppins';
import './scss/App.scss';

//Components
import Header from './containers/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './Views/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
