import { useQuery } from 'react-query';
import axiosInstance  from '@api/axios-config/axiosInstance';
import { useAppDispatch } from '@store/hooks';
import { setProfileData } from '@/src/app/store/features/profile/profileDataSlice';

const fetchProfileData = async () => {
  let query = `
{
  allProfiles {
    edges {
      node {
        id
        technicalExpertise
        shortIntro
        resume
        photo
        email
        address
        phoneNumber
        keyPoints {
          id
          text
          priority
        }
      }
    }
  }
}
  `;
  const formattedQuery = query.trim().replace(/\n/g, '').replace(/\s+/g, ' ');
  const encodedQuery = encodeURIComponent(formattedQuery);
  return await axiosInstance.get(`profile/?query=${encodedQuery}`);
};

export const useProfileData = () => {
  const dispatch = useAppDispatch();
  return useQuery('profileData', fetchProfileData, {
    onSuccess: (data) => {
      dispatch(setProfileData(data.data.data?.allProfiles?.edges[0]?.node));
    },
  });
};
