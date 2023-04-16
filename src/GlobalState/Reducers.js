
const PRODUCTS_INITIAL_STATE ={
    productsList: [],
    bought: [],
    onErrorFetch: ''
}

export const productsReducer = (state = PRODUCTS_INITIAL_STATE, action) => {

    switch (action.type) {

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