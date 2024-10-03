import { createSlice } from '@reduxjs/toolkit';

interface ProjectDataState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectDataState = {
  data: null,
  loading: false,
  error: null,
};

const projectDataSlice = createSlice({
  name: 'projectData',
  initialState,
  reducers: {
    setProjectData: (state, action) => {
      state.data = action.payload;
    },
    clearProjectData: (state) => {
      state.data = null;
    },
  },
});

export const { setProjectData, clearProjectData } = projectDataSlice.actions;
export default projectDataSlice;