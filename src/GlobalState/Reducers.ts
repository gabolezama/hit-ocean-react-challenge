import { ProductsState } from "../models";

const PRODUCTS_INITIAL_STATE: ProductsState = {
    productsList: [],
    bought: [],
    getProductsListError: '',
    executePurchaseError: '',
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
        getProductsListError: action.payload
      };
    case 'PURCHASE_SUCCESSFUL':
      return {
        ...state,
        bought: state.bought.concat(action.payload)
      };
    case 'PURCHASE_FAILED':
      return {
        ...state,
        executePurchaseError: action.payload
      };
    default:
      return state
  }
}