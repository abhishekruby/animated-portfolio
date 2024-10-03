import { createSlice } from '@reduxjs/toolkit';

interface AllProjectDataState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AllProjectDataState = {
  data: null,
  loading: false,
  error: null,
};

const allProjectDataSlice = createSlice({
  name: 'AllProjectData',
  initialState,
  reducers: {
    setAllProjectData: (state, action) => {
      state.data = action.payload;
    },
    clearAllProjectData: (state) => {
      state.data = null;
    },
  },
});

export const { setAllProjectData, clearAllProjectData } = allProjectDataSlice.actions;
export default allProjectDataSlice;