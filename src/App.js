import { Route, Routes } from 'react-router-dom';
//Styles
import 'typeface-roboto';
import './scss/App.scss';

//Components
import Home from './routes/Home/Home';
import Results from './routes/Results/Results';
import Detail from './routes/Detail/Detail';
//import configureStore from './app/store';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Detail />} />
				<Route path='/search=:search' element={<Results />} />
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
