import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../ItemSlice/ItemSlice'; 

const store = configureStore({
    reducer: {
        items: itemReducer,
    },
});

export default store;