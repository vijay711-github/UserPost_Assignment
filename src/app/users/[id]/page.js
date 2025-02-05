"use client";
import { use } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useUser, useUserPosts } from '../../../hooks/useQueries';
import PostCard from "../../../Components/PostCards";
import Loading from "../../../Components/Loader";
import Link from "next/link";

const queryClient = new QueryClient();

function UserPostsPage({ params }) {
  const unwrappedParams = use(params);
  const { data: user, isLoading: userLoading, error: userError } = useUser(unwrappedParams.id);
  const { data: posts, isLoading: postsLoading, error: postsError } = useUserPosts(unwrappedParams.id);

  if (userLoading || postsLoading) return <Loading />;
  if (userError) return <div>Error loading user: {userError.message}</div>;
  if (postsError) return <div>Error loading posts: {postsError.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <Link 
          href="/" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          ← Back to Users
        </Link>
        <h1 className="text-2xl font-bold">User Posts</h1>
      </div>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </div>
  );
}

export default function UserPostsWrapper({ params }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserPostsPage params={params} />
    </QueryClientProvider>
  );
} 