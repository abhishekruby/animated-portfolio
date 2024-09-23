import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserData {
  email: string;
  profile_pic: string;
}

export interface UserState {
  data: UserData[];
}

export const initialState: UserState = {
  data: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<UserData>) => {
      state.data.push(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { add } = userSlice.actions

export default userSlice.reducer;