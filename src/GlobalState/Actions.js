import axios from 'axios';

export const getProductsList = function() {
    return async (dispatch) => {

      try {
        const response = await axios('http://localhost:3001/productos')

        dispatch({ type: 'LIST_LOADED_SUCCESSFULLY', payload: response.data });

      } catch (error) {

        dispatch({ type: 'LIST_LOADED_FAILED', payload: error.message });
      }
    };
  };
  