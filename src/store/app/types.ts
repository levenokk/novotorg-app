export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export type AppStateType = {
  loading: boolean;
};

type ToggleLoadingAction = {
  type: typeof TOGGLE_LOADING;
  loading: boolean;
};

export type AppActionsType = ToggleLoadingAction;
