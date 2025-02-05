import '../styles/custom.css';

export default function UserCard({ user }) {
  return (
    <div className="card-container">
      {/* Header with avatar and basic info */}
      <div className="card-header">
        <div className="avatar">
          {user.name.charAt(0)}
        </div>
        <div className="user-info">
          <h2 className="user-name">
            {user.name}
          </h2>
          <button 
            onClick={() => window.location.href = `mailto:${user.email}`}
            className="user-email"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {user.email}
          </button>
        </div>
      </div>

      {/* Address section */}
      <div className="info-section address-section">
        <div className="flex items-start space-x-2">
          <svg className="section-icon text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="section-content">
            <p className="section-title">Address</p>
            <p className="section-text">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="section-text">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>

      {/* Company section */}
      <div className="info-section company-section">
        <div className="flex items-start space-x-2">
          <svg className="section-icon text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <div className="section-content">
            <p className="section-title">Company</p>
            <p className="company-name">{user.company.name}</p>
            <p className="company-phrase">
              "{user.company.catchPhrase}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
