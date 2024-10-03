import { useQuery } from "react-query";
import axiosInstance from "@api/axios-config/axiosInstance";
import { useAppDispatch } from "@store/hooks";
import { setContributionProject } from "@/src/app/store/features/project/contributionProjectDataSlice";


const fetchAllContributionProjectData = async () => {
  let query = `
{
  allContributions {
    edges {
      node {
        id
        priority
        title
        description
        url
      }
    }
  }
}
  `;
  const formattedQuery = query.trim().replace(/\n/g, "").replace(/\s+/g, " ");
  const encodedQuery = encodeURIComponent(formattedQuery);
  return await axiosInstance.get(`project/?query=${encodedQuery}`);
};


export const useAllContributionProjectData = () => {
  const dispatch = useAppDispatch();
  return useQuery("contributionProjectData", fetchAllContributionProjectData, {
    onSuccess: (data) => {
      dispatch(setContributionProject(data.data.data.allContributions.edges));
    },
  });
};