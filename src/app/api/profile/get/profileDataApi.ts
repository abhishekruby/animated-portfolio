import { useQuery } from 'react-query';
import axiosInstance  from '@api/axios-config/axiosInstance';
import { useAppDispatch } from '@store/hooks';
import { setProfileData } from '@/src/app/store/features/profile/profileDataSlice';


const fetchProfileData = async () => {
  let query = `
{
  allProfiles{
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
        socialMedia{
          id
          priority
          platform
          url
        }
        skills{
          name
          progress
          category{
          id
          name
          priority
          }
          priority
          icon
        }
        experiences{
          id
          companyLogo
          companyName
          designation
          keyPoints{
            id
            priority
            text
          }
          url
          startDate
          endDate
        }
      }
    }
  }
}
  `;
  const formattedQuery = query.trim().replace(/\n/g, '').replace(/\s+/g, ' ');
  const encodedQuery = encodeURIComponent(formattedQuery);
  const requestBody = {
    query: encodedQuery,
  };
  return await axiosInstance.post(`profile/graphql/`,requestBody);
};

export const useProfileData = () => {
  const dispatch = useAppDispatch();
  return useQuery('profileData', fetchProfileData, {
    onSuccess: (data) => {
      dispatch(setProfileData(data.data.data?.allProfiles?.edges[0]?.node));
    },
  });
};
