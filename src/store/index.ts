import { createStore, combineReducers } from 'redux';
import AppReducer from './app/reducers';

const rootReducer = combineReducers({ App: AppReducer });

export type RootState = ReturnType<typeof rootReducer>;

const store: RootState = createStore(rootReducer);

export default store;
