import { createSlice } from '@reduxjs/toolkit';


interface ContributionProjectState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: ContributionProjectState = {
  data: null,
  loading: false,
  error: null,
};

const contributionProjectDataSlice = createSlice({
  name: 'contributionProjectData',
  initialState,
  reducers: {
    setContributionProject: (state, action) => {
      state.data = action.payload;
    },
    clearContributionProject: (state) => {
      state.data = null;
    },
  },
});

export const { setContributionProject, clearContributionProject } = contributionProjectDataSlice.actions;
export default contributionProjectDataSlice;