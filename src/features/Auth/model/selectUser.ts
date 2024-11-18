import { createSelector } from '@reduxjs/toolkit';

export const selectUserAuth = createSelector(
    [(state: RootState) => state.auth],
    (auth) => ({
        wasLoaded: auth.wasLoaded,
        tryToFetch: auth.tryToFetch,
        itWasLogout: auth.itWasLogout,
    })
);

export const selectUserData = createSelector(
    [(state: RootState) => state.auth.user],
    (user) => ({
        name: user.name,
        lastname: user.lastname,
        fathername: user.fathername,
    })
);

export const selectUserInvs = createSelector(
    [(state: RootState) => state.auth.user],
    (user) => user.invitations
);

export const selectUserOrgs = createSelector(
    [(state: RootState) => state.auth.user],
    (user) => user.organizations
);
