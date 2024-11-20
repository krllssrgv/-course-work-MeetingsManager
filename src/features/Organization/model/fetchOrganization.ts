import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrackJS } from 'trackjs';
import { API_URL } from '@shared';

export const fetchOrganization = createAsyncThunk(
  'organization/fetchOrganization',
  async (id: number, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    try {
      const response = await fetch(`${API_URL}act/get_org/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return rejectWithValue('org');
      }
    } catch (error) {
      const e = error as Error;
      TrackJS.track(e);
      return rejectWithValue('network');
    }
  }
);
