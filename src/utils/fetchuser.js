import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Renamed to follow React Query conventions
export const getUsers = async () => {
  const response = await apiClient.get("/users");
  return response.data;
};

export const getUserPosts = async (userId) => {
  const response = await apiClient.get(`/posts?userId=${userId}`);
  return response.data;
};

export const getUser = async (userId) => {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};