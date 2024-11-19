import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@shared';

export const fetchOrganization = createAsyncThunk(
    'organization/fetchOrganization',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}act/get_org/${id}`, {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return rejectWithValue('org');
            }
        } catch {
            return rejectWithValue('network');
        }
    }
);
