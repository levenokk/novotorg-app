import { AppStateType } from './types';

const initialState: AppStateType = {};

const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AppReducer;
