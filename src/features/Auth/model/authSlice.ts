import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './fetchUser';

type Invitation = {
  id: number;
  organization: string;
};

type Organization = {
  id: number;
  name: string;
  owned: boolean;
};

export type AuthState = {
  tryToFetch: boolean;
  wasLoaded: boolean;
  token: string;
  user: {
    id: number | null;
    name: string;
    lastname: string;
    fathername: string;
    invitations: Record<number, Invitation>;
    organizations: Record<number, Organization>;
  };
};

const initialState: AuthState = {
  tryToFetch: false,
  wasLoaded: false,
  token: '',
  user: {
    id: null,
    name: '',
    lastname: '',
    fathername: '',
    invitations: {},
    organizations: {},
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state: AuthState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logoutUser: (state: AuthState) => {
      Object.assign(state, initialState);
    },
    foundOrganization: (
      state: AuthState,
      action: PayloadAction<Organization>
    ) => {
      state.user.organizations[action.payload.id] = {
        id: action.payload.id,
        name: action.payload.name,
        owned: action.payload.owned,
      };
    },
    acceptInv: (
      state: AuthState,
      action: PayloadAction<{
        id: number;
        org: Organization;
      }>
    ) => {
      delete state.user.invitations[action.payload.id];
      state.user.organizations[action.payload.org.id] = action.payload.org;
    },
    removeInv: (state: AuthState, action: PayloadAction<number>) => {
      delete state.user.invitations[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state: AuthState) => {
        state.tryToFetch = true;
      })
      .addCase(fetchUser.fulfilled, (state: AuthState, action) => {
        state.wasLoaded = true;
        state.tryToFetch = false;
        state.user.id = action.payload.id;
        state.user.name = action.payload.name;
        state.user.lastname = action.payload.lastname;
        state.user.fathername = action.payload.fathername;

        state.user.invitations = {};
        action.payload.invitations.forEach((element: Invitation) => {
          state.user.invitations[element.id] = element;
        });

        state.user.organizations = {};
        action.payload.organizations.forEach((element: Organization) => {
          state.user.organizations[element.id] = element;
        });
      })
      .addCase(fetchUser.rejected, (state: AuthState, action) => {
        if (action.payload === 'auth') {
          state.tryToFetch = false;
        }
      })
      .addDefaultCase(() => {});
  },
});

export const { logoutUser, acceptInv, removeInv, foundOrganization, setToken } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
