import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootreducer from './reducers';

export default function configstore(){
  const store = createStore(rootreducer, applyMiddleware(thunk, logger))  
  return store
}
