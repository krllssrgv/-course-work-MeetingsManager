import { createSelector } from '@reduxjs/toolkit';

export const selectOrganizationLoading = createSelector(
    [(state: RootState) => state.organization],
    (organization) => organization.loading
);

export const selectOrganizationData = createSelector(
    [(state: RootState) => state.organization],
    (organization) => ({
        id: organization.id,
        name: organization.name,
        owner: organization.owner,
    })
);

export const selectOrganizationMeetings = createSelector(
    [(state: RootState) => state.organization],
    (organization) => organization.meetings
);

export const selectOrganizationMembers = createSelector(
    [(state: RootState) => state.organization],
    (organization) => organization.members
);
