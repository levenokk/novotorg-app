import { AppActionsType, AppStateType, TOGGLE_LOADING } from './types';

const initialState: AppStateType = {
  loading: true,
};

const AppReducer = (state = initialState, action: AppActionsType) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default AppReducer;
