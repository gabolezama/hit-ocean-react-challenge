export const getProductsList = function() {
    return async (dispatch) => {

      try {
        const response = await fetch('http://localhost:3000/productos');
        console.log('RESP--> ', response);
        dispatch({ type: 'LIST_LOADED_SUCCESSFULLY', payload: response });

      } catch (error) {

        dispatch({ type: 'LIST_LOADED_FAILED', payload: error.message });
      }
    };
  };
  