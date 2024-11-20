import { configureStore } from '@reduxjs/toolkit';
import { authReducer, organizationReducer } from '@features';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    organization: organizationReducer,
  },
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
}
