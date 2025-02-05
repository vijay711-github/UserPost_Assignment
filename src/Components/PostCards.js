export default function PostCard({ post }) {
  return (
    <div className="mx-auto max-w-xl border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300">
      {/* User info header */}
      <div className="flex items-center p-4 border-b">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
          {post.userImage ? (
            <img src={post.userImage} alt="user" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">{post.title[0]}</span>
            </div>
          )}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-800">{post.username || 'User'}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {post.location || 'Location'}
          </p>
        </div>
      </div>

      {/* Post content */}
      <div className="relative aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-50 to-gray-100">
        {post.image ? (
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full object-cover hover:scale-105 transition-transform duration-300" 
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center">
            <span className="text-gray-400 flex flex-col items-center">
              <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              No image available
            </span>
          </div>
        )}
      </div>

      {/* Post details */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{post.body}</p>
        
        {/* Engagement buttons */}
        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium">Like</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-medium">Comment</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
