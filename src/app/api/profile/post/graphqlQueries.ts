import axiosInstance from "@api/axios-config/axiosInstance";

const fetchProfileInfo = async () => {
    const query = `
      query {
        profileInfo {
          id
          technicalExpertise
          shortIntro
          resume
          photo
          email
          address
          phoneNumber
        }
      }
    `;
    const requestBody = {
      query,
    };
    return await axiosInstance.post(`profile/graphql/`, requestBody);
  };
  
  const fetchSkills = async () => {
    const query = `
      query {
        skills {
          name
          description
          progress
          category {
            id
            name
            priority
          }
          priority
          icon
        }
      }
    `;
    const requestBody = {
      query,
    };
    return await axiosInstance.post(`profile/graphql/`, requestBody);
  };
  
  const fetchExperiences = async () => {
    const query = `
      query {
        experiences {
          id
          companyLogo
          companyName
          designation
          keyPoints {
            id
            priority
            text
          }
          url
          startDate
          endDate
        }
      }
    `;
    const requestBody = {
      query,
    };
    return await axiosInstance.post(`profile/graphql/`, requestBody);
  };
  
  const fetchProjects = async () => {
    const query = `
      query {
        projects {
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
            icon
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
    `;
    const requestBody = {
      query,
    };
    return await axiosInstance.post(`profile/graphql/`, requestBody);
  };
  
  const fetchSocialMedia = async () => {
    const query = `
      query {
        socialMedia {
          id
          priority
          platform
          url
        }
      }
    `;
    const requestBody = {
      query,
    };
    return await axiosInstance.post(`profile/graphql/`, requestBody);
  };