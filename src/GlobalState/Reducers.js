
const PRODUCTS_INITIAL_STATE ={
    productsList: [],
    bought: [],
    onErrorFetch: '',
    setLoader: false
}

export const productsReducer = (state = PRODUCTS_INITIAL_STATE, action) => {

    switch (action.type) {

      case 'SET_LOADER':
        return{
            ...state,
            set: action.payload
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