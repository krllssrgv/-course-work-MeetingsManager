import { createSelector } from '@reduxjs/toolkit';

export const selectUser = createSelector(
    [(state: RootState) => state.auth],
    (user) => user
);
