import { IAction, ProductsState } from "../models";

const PRODUCTS_INITIAL_STATE: ProductsState = {
    productsList: [],
    bought: [],
    onErrorFetch: '',
    setLoader: false
}

export const productsReducer = (state: ProductsState = PRODUCTS_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_LOADER':
      return {
        ...state,
        setLoader: action.payload
      }
    case 'LIST_LOADED_SUCCESSFULLY':
      return {
        ...state,
        productsList: action.payload,
      };
    case 'LIST_LOADED_FAILED':
      return {
        ...state,
        onErrorFetch: action.payload
      };
    default:
      return state
  }
}