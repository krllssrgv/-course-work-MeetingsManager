import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../thunks/fetchUser';

export type AuthState = {
    tryToFetch: boolean;
    wasLoaded: boolean;
    user: {
        name: string;
        lastname: string;
        fathername: string;
        owner: boolean;
    };
};

const initialState: AuthState = {
    tryToFetch: true,
    wasLoaded: false,
    user: {
        name: '',
        lastname: '',
        fathername: '',
        owner: false,
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state: AuthState, action) => {
                state.wasLoaded = true;
                state.tryToFetch = false;
                state.user.name = action.payload.name;
                state.user.lastname = action.payload.lastname;
                state.user.fathername = action.payload.fathername;
                state.user.owner = action.payload.owner;
            })
            .addCase(fetchUser.rejected, (state: AuthState, action) => {
                if (action.payload === 'auth') {
                    state.tryToFetch = false;
                }
            })
            .addDefaultCase(() => {});
    },
});

// export const { } = authSlice.actions;
export const authReducer = authSlice.reducer;
