import { Route, Routes } from 'react-router-dom';
//Styles
import 'typeface-roboto';
import './scss/App.scss';

//Components
import Home from './routes/Home/Home';
import Results from './routes/Results/Results';
import Detail from './routes/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
//import configureStore from './app/store';

function App() {
	return (
		<>
			<SearchBar />
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:id' element={<Detail />} />
				<Route path='/search=:search' element={<Results />} />
				<Route path='/:category_name/:category' element={<Results />} />
			</Routes>
		</>
	);
}
// const reducer = () => {};

// const store = configureStore(
// 	reducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ &&
// 		window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// store.suscribe(()=>{
//store.getState();
//});
export default App;
