import { useQuery } from '@tanstack/react-query';
import { getUsers, getUserPosts, getUser } from '../utils/fetchuser';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 5 * 60 * 1000,  
    cacheTime: 30 * 60 * 1000,  
  });
};

export const useUser = (userId) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000,
  });
};

export const useUserPosts = (userId) => {
  return useQuery({
    queryKey: ['posts', userId],
    queryFn: () => getUserPosts(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000,
  });
}; 