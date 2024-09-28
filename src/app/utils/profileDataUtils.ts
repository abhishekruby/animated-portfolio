import { useDispatch, useSelector } from 'react-redux';

import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { fetchProfileDetail } from '@api/profile-data/profileDataApi';

interface ProfileData {
  // Define the properties of your profile data here
}

export function useFetchAndDisplayProfileData() {
  const dispatch = useAppDispatch();

  // // Assuming fetchProfileData returns a Promise resolving to ProfileData
  const profileData: ProfileData | undefined = useAppSelector(
    (state) => state.profileData.data
  );
  const loading = useAppSelector((state) => state.profileData.loading);
  const error = useAppSelector((state) => state.profileData.error);

  // ... (rest of the code)
}
