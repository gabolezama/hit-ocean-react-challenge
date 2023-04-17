import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ErrorResponse, ProductsApiResponse } from '../models';

export const getProductsList = function() {
  return async (dispatch: Dispatch) => {
    try {
      const response: AxiosResponse<ProductsApiResponse> = await axios('http://localhost:3001/productos');

      dispatch({ type: 'LIST_LOADED_SUCCESSFULLY', payload: response.data });
    } catch (error: any) {
      dispatch({ type: 'LIST_LOADED_FAILED', payload: error.message });
    }
  };
};
  