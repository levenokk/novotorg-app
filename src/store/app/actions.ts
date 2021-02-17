import { AppActionsType, TOGGLE_LOADING } from './types';

// eslint-disable-next-line import/prefer-default-export
export const toggleLoading = (loading: boolean): AppActionsType => {
  return {
    type: TOGGLE_LOADING,
    loading,
  };
};
