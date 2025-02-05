import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchUsers = async () => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchUserPosts = async (userId) => {
  try {
    const response = await apiClient.get("/posts", {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch posts for user ${userId}:`, error);
    throw new Error("Failed to fetch posts");
  }
};