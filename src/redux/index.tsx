import { configureStore } from '@reduxjs/toolkit';
import { configSliceReducer } from './slices/config';
import { userSliceReducer } from './slices/user';

export const store = configureStore({
    reducer: {
        user:userSliceReducer,
        config: configSliceReducer
    },
});