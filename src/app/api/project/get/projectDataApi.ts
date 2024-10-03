import { useQuery } from "react-query";
import axiosInstance from "@api/axios-config/axiosInstance";
import { useAppDispatch } from "@store/hooks";
import { setProjectData } from "@/src/app/store/features/project/projectDataSlice";

const fetchProjectData = async (id: string) => {
  let query = `{
  allProjects(${id}) {
    edges {
      node {
        id
        priority
        title
        slug
        shortText
        video
        image
        progress
        duration
        techStacks {
          id
          name
          priority
          category{
            name
          }
        }
        category {
          id
          name
        }
        websiteUrl
        githubUrl
        keyPoints {
          id
          text
          priority
        }
        gallery {
          id
          image
          caption
          priority
        }
        quotes {
          id
          text
          author
          priority
        }
        team {
          id
          name
          role
          image
          priority
        }
      }
    }
  }
}
  `;
  const formattedQuery = query.trim().replace(/\n/g, "").replace(/\s+/g, " ");
  const encodedQuery = encodeURIComponent(formattedQuery);
  return await axiosInstance.get(`project/?query=${encodedQuery}`);
};

export const useProjectData = (id: string) => {
  const dispatch = useAppDispatch();
  return useQuery("ProjectData", () => fetchProjectData(id), {
    onSuccess: (data) => {
      dispatch(setProjectData(data.data.data.allProjects.edges));
    },
  });
};
