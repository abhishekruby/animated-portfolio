import { useProfileData } from '@api/profile/get/profileDataApi';
import { createSlice } from '@reduxjs/toolkit';

interface ProfileDataState {
  data: object | null;
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
    setProfileData: (state, action) => {
      console.log(action.payload,'slice');
      
      state.data = action.payload;
    },
    clearProfileData: (state) => {
      state.data = null;
    },
  },
});

export const { setProfileData, clearProfileData } = profileDataSlice.actions;
export default profileDataSlice;