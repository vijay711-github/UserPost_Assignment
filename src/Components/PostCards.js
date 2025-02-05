import '../styles/PostCard.css';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      {/* User info header */}
      <div className="post-header">
        <div className="avatar-container">
          {post.userImage ? (
            <img src={post.userImage} alt="user" className="avatar-image" />
          ) : (
            <div className="avatar-placeholder">
              <span className="avatar-text">{post.title[0]}</span>
            </div>
          )}
        </div>
        <div className="user-info">
          <p className="username">{post.username || 'User'}</p>
          <p className="location">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {post.location || 'Location'}
          </p>
        </div>
      </div>

      {/* Post content */}
      <div className="post-content">
        {post.image ? (
          <img 
            src={post.image} 
            alt={post.title} 
            className="post-image" 
          />
        ) : (
          <div className="placeholder-content">
            <span className="text-gray-400 flex flex-col items-center">
              <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              No image available
            </span>
          </div>
        )}
      </div>

      {/* Post details */}
      <div className="post-details">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.body}</p>
        
        {/* Engagement buttons */}
        <div className="engagement-section">
          <div className="action-buttons">
            <button className="action-button like-button">
              <svg className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="button-text">Like</span>
            </button>
            <button className="action-button comment-button">
              <svg className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="button-text">Comment</span>
            </button>
          </div>
          <button className="action-button share-button">
            <svg className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="button-text">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
