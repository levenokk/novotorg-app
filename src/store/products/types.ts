// eslint-disable-next-line import/prefer-default-export
export const LOAD_ITEMS = 'LOAD_ITEMS';

export type ProductsStateType = {
  count: number;
  items: ItemInterface[];
};

export interface ItemInterface {
  title: string;
  weight: number;
  price: number;
  _id: number;
  img: string;
}

export interface DataInterface {
  products: ItemInterface[];
  count: number;
}

type UpdateItemsActionType = {
  type: typeof LOAD_ITEMS;
  items: ItemInterface[];
  count: number;
};

export type ProductsActionsType = UpdateItemsActionType;
