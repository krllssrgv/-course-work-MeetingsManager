import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@entities';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

declare global {
    type RootState = ReturnType<typeof store.getState>;
    type AppDispatch = typeof store.dispatch;
}
