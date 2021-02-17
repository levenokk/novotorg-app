import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { loadItems } from './actions';
import { RootState } from '../index';

// eslint-disable-next-line import/prefer-default-export
export const thunkSendMessage = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  dispatch(
    loadItems({
      count: 1,
      products: [],
    })
  );
};
