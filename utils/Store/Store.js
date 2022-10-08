import {configureStore} from '@reduxjs/toolkit'
import productReducer from './reducers/productsReducer'
import profileReducer from './reducers/profileReducer';

export const store = configureStore({
    reducer: {
        product:productReducer,
        profile:profileReducer
} })

console.log(store.getState());

