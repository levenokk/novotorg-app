import { LOAD_ITEMS, ProductsActionsType, ProductsStateType } from './types';

const initialState: ProductsStateType = {
  items: [],
  count: 0,
};

const ProductsReducer = (state = initialState, action: ProductsActionsType) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state,
        items: action.items,
        count: action.count,
      };
    default: {
      return state;
    }
  }
};

export default ProductsReducer;
