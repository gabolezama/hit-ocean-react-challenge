import { productsReducer } from './Reducers';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {productsReducer},
    middleware: [thunk]
  })
