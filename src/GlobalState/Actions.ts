import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ProductsApiResponse } from '../models';

export const getProductsList = function() {
  return async (dispatch: Dispatch) => {
    try {
      const response: AxiosResponse<ProductsApiResponse> = await axios('http://localhost:3001/productos');

      dispatch({ type: 'LIST_LOADED_SUCCESSFULLY', payload: response.data });
    } catch (error: any) {
      dispatch({ type: 'LIST_LOADED_FAILED', payload: `Se produjo un error al intentar obtener los productos. Error: ${error.stack}` });
    }
  };
};

export const executePurchase = function( arrayToSend: number[]) {

  return async (dispatch: Dispatch) => {
    try {
      const response: any = await axios.post('http://localhost:3001/compras',{
        itemsId: arrayToSend
      })
      
      dispatch({ type: 'PURCHASE_SUCCESSFUL', payload: response.data });
    } catch (error: any) {
      console.log('Error: ' + error);
      
      dispatch({ type: 'PURCHASE_FAILED', payload: `Se produjo un error al intentar realizar la compra. Error: ${error.stack}` });
    }
  };
};
  