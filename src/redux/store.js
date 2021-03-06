import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'; 
import { reducer as formReducer } from 'redux-form';
import reducer from './reducer';
import appReducer from '../appReducer';
import authReducer from '../redux/authReducer';
import dialogsReducer from '../components/Dialogs/dialogsReducer';

const reducers = combineReducers({ 
  global: reducer, 
  form: formReducer,
  app: appReducer,
  auth: authReducer,
  dialogs: dialogsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(thunkMiddleware))
); // + logger

window.store = store;