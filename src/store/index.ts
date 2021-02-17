import { createStore, combineReducers } from 'redux';
import AppReducer from './app/reducers';
import ProductsReducer from './products/reducers';

const rootReducer = combineReducers({
  App: AppReducer,
  Products: ProductsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
