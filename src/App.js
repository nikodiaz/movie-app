import { Route, Routes } from 'react-router-dom';
//Styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'typeface-poppins';
import './scss/App.scss';

//Components
import Header from './containers/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './Views/Home';
import Login from './components/Login/Login';

function App() {
	return (
		<>
			<Header />
			<NavBar />
			<Routes>
				<Route path='/' element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
