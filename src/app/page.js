"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUsers } from '../hooks/useQueries';
import UserCard from "../components/UserCard";
import Loading from "../components/Loader";
import Link from "next/link";

// Create a client
const queryClient = new QueryClient();

// Wrapper component for React Query
function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  
  const { data: users, isLoading, error } = useUsers();

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  // Filter and sort users
  const filteredUsers = users ? users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery)
  ) : [];

  if (sortBy === "name") {
    filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "company") {
    filteredUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
  }

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Discover Our Community
          </h1>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl">
            Connect with amazing people and explore new opportunities
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-4 pl-12 pr-4 rounded-xl bg-white/10 backdrop-blur-md 
                border border-white/20 text-white placeholder-blue-100
                focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Sorting Section */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-700">Sort by:</h2>
          <div className="flex gap-4">
            <button
              onClick={() => handleSort("name")}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 
                ${sortBy === "name"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200/50 scale-105 border-2 border-blue-100/20"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:scale-105 hover:shadow-md border border-gray-100"
                }
                transform active:scale-95 flex items-center gap-2`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Name
            </button>
            <button
              onClick={() => handleSort("company")}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 
                ${sortBy === "company"
                  ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-200/50 scale-105 border-2 border-purple-100/20"
                  : "bg-white text-gray-700 hover:bg-purple-50 hover:scale-105 hover:shadow-md border border-gray-100"
                }
                transform active:scale-95 flex items-center gap-2`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Company
            </button>
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <Link
                key={user.id}
                href={`/users/${user.id}`}
                className="transform hover:scale-[1.02] transition-all duration-300"
              >
                <UserCard user={user} />
              </Link>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-lg">
              <svg
                className="w-16 h-16 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM12 4a8 8 0 018 8 8.5 8.5 0 01-.5 2.5M4 12a8 8 0 018-8c1.5 0 3 .4 4.5 1.5"
                />
              </svg>
              <p className="text-xl font-medium text-gray-600">No users found</p>
              <p className="text-gray-400 mt-2">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersPage />
    </QueryClientProvider>
  );
}
