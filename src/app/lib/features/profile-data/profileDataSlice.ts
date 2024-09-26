import { createSlice } from '@reduxjs/toolkit';
import { FETCH_PROFILE_FAILURE, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS } from './types';

interface ProfileDataState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileDataState = {
  data: null,
  loading: false,
  error: null,
};

const profileDataSlice = createSlice({
  name: 'profileData',
  initialState,
  reducers: {
    fetchProfileRequest(state: ProfileDataState) {
      state.loading = true;
      state.error = null;
    },
    fetchProfileSuccess(state: ProfileDataState, action: { type: typeof FETCH_PROFILE_SUCCESS; payload: any }) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProfileFailure(state: ProfileDataState, action: { type: typeof FETCH_PROFILE_FAILURE; payload: string }) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default profileDataSlice.reducer;