import { applyMiddleware, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = legacy_createStore(rootReducer, composeEnhancer);

export default store;
