import axiosInstance from '../axios-config/axiosInstance';

export const fetchProfileDetail = async () => {
  try {
    const response = await axiosInstance.get('/api/products');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
