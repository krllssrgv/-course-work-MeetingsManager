import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchOrganization } from './fetchOrganization';

type Member = {
    id: number;
    fullName: string;
    email: string;
};

type Meeting = {
    id: number;
    organizerName: string;
    title: string;
    place: string;
    description: string;
    time: string;
    date: string;
};

type Organization = {
    id: number | null;
    name: string;
    owner: number | null;
    members: Member[];
    meetings: Meeting[];
};

export type OrganizationState = {
    loading: boolean;
    error: boolean;
    id: number | null;
    name: string;
    owner: number | null;
    members: Record<number, Member>;
    meetings: Record<number, Meeting>;
};

const initialState: OrganizationState = {
    loading: true,
    error: false,
    id: null,
    name: '',
    owner: null,
    members: {},
    meetings: {},
};

const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
        resetState: (state: OrganizationState) => {
            Object.assign(state, initialState);
        },
        createMeeting: (
            state: OrganizationState,
            action: PayloadAction<Meeting>
        ) => {
            state.meetings[action.payload.id] = action.payload;
        },
        removeMember: (
            state: OrganizationState,
            action: PayloadAction<number>
        ) => {
            if (state.members[action.payload]) {
                delete state.members[action.payload];
            }
        },
        removeMeetings: (
            state: OrganizationState,
            action: PayloadAction<number[]>
        ) => {
            action.payload.forEach((meetingID) => {
                if (state.meetings[meetingID]) {
                    delete state.meetings[meetingID];
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrganization.pending, (state: OrganizationState) => {
                Object.assign(state, initialState);
            })
            .addCase(
                fetchOrganization.fulfilled,
                (
                    state: OrganizationState,
                    action: PayloadAction<Organization>
                ) => {
                    state.loading = false;
                    state.id = action.payload.id;
                    state.name = action.payload.name;
                    state.owner = action.payload.owner;
                    action.payload.members.forEach((member) => {
                        state.members[member.id] = member;
                    });
                    action.payload.meetings.forEach((meeting) => {
                        state.meetings[meeting.id] = meeting;
                    });
                }
            )
            .addCase(fetchOrganization.rejected, (state: OrganizationState) => {
                state.loading = false;
                state.error = true;
            })
            .addDefaultCase(() => {});
    },
});

export const { resetState, createMeeting, removeMember, removeMeetings } =
    organizationSlice.actions;
export const organizationReducer = organizationSlice.reducer;
