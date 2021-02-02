import { createStore } from 'redux';
import {rootReducer} from './reducers/index'

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, undefined, ReactReduxDevTools)

export default store