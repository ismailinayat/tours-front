import { configureStore } from '@reduxjs/toolkit';
import { toursApi } from '../services/toursApi';
import {createWrapper} from  "next-redux-wrapper"

const makeStore = configureStore({
    reducer: {
        [toursApi.reducerPath]: toursApi.reducer
    }
});

export const store = createWrapper(makeStore)