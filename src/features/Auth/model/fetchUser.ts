import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrackJS } from 'trackjs';
import { API_URL } from '@shared';

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    try {
      const response = await fetch(`${API_URL}auth/get_user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${state.auth.token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return rejectWithValue('auth');
      }
    } catch (error) {
      const e = error as Error;
      TrackJS.track(e);
      return rejectWithValue('network');
    }
  }
);
