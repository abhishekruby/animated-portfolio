import { useQuery } from "react-query";
import axiosInstance from "@api/axios-config/axiosInstance";
import { useAppDispatch } from "@store/hooks";
import { setAllProjectData } from "@/src/app/store/features/project/allProjectDataSlice";


const fetchAllProjectData = async () => {
  let query = `
{
  allProjects {
    edges {
      node {
        id
        priority
        title
        slug
        shortText
        image
        techStacks {
          id
          priority
          name
        }
        category {
          id
          name
          priority
        }
        websiteUrl
        githubUrl
      }
    }
  }
}
  `;
  const formattedQuery = query.trim().replace(/\n/g, "").replace(/\s+/g, " ");
  const encodedQuery = encodeURIComponent(formattedQuery);
  return await axiosInstance.get(`project/?query=${encodedQuery}`);
};


export const useAllProjectData = () => {
  const dispatch = useAppDispatch();
  return useQuery("allProjectData", fetchAllProjectData, {
    onSuccess: (data) => {
      dispatch(setAllProjectData(data.data.data.allProjects.edges));
    },
  });
};