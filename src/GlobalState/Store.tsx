import { productsReducer } from './Reducers';
import { configureStore } from '@reduxjs/toolkit'
import thunk, { ThunkMiddleware } from 'redux-thunk';

export const store = configureStore({
    reducer: {productsReducer},
    middleware: [thunk as ThunkMiddleware]
  })
