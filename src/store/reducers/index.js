import {combineReducers} from 'redux';
import {dataReducer} from './data';
import {formReducer} from './form';
import {loadReducer} from './load'

export const rootReducer = combineReducers({
  data: dataReducer,
  form: formReducer,
  load: loadReducer,
})