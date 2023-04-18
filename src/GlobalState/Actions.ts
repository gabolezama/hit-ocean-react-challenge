import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { IAction, ProductsApiResponse } from '../models';

export const getProductsList = function() {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADER', payload: true });

      setTimeout(async() =>{
        const response: AxiosResponse<ProductsApiResponse> = await axios('http://localhost:3001/productos');
        dispatch({ type: 'LIST_LOADED_SUCCESSFULLY', payload: response.data });
        dispatch({ type: 'SET_LOADER', payload: false });
      }, 3000)

    } catch (error: any) {
      dispatch({ type: 'LIST_LOADED_FAILED', payload: `Se produjo un error al intentar obtener los productos. Error: ${error.stack}` });
    }
  };
};

export const executePurchase = function( arrayToSend: number[]) {

  return async (dispatch: Dispatch): Promise<void> => {
    try {

      dispatch({ type: 'SET_LOADER', payload: true });

      setTimeout(async() =>{
        const response: AxiosResponse<ProductsApiResponse>= await axios.post('http://localhost:3001/compras',{
          itemsId: arrayToSend
        })
        dispatch({ type: 'PURCHASE_SUCCESSFUL', payload: response.data });;
        dispatch({ type: 'SET_LOADER', payload: false });
      }, 3000)

      
    } catch (error: any) {
      console.log('Error: ' + error);
      
      dispatch({ type: 'PURCHASE_FAILED', payload: `Se produjo un error al intentar realizar la compra. Error: ${error.stack}` });
    }
  };
};
  