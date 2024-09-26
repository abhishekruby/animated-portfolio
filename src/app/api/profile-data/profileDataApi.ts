import axiosInstance from '@api/axios-config/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProfileDetail = createAsyncThunk( 'todos/1', async () => {
  try {
    const response = await axiosInstance.get('todos/1/');
    const data = response.data;
    console.log(data,'data')
    return data;
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return error;
  }
})
