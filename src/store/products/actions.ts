import { ProductsActionsType, LOAD_ITEMS, DataInterface } from './types';

// eslint-disable-next-line import/prefer-default-export
export const loadItems = ({
  count,
  products,
}: DataInterface): ProductsActionsType => {
  return {
    type: LOAD_ITEMS,
    count,
    items: products,
  };
};
