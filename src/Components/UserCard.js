export default function UserCard({ user }) {
  return (
    <div className="max-w-md p-6 border rounded-xl shadow-lg bg-white hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
      {/* Header with avatar and basic info */}
      <div className="flex items-center space-x-4">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
          {user.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            {user.name}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
             
            </span>
          </h2>
          <button 
            onClick={() => window.location.href = `mailto:${user.email}`}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
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
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Address</p>
            <p className="text-gray-600 text-sm">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="text-gray-600 text-sm">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>

      {/* Company section */}
      <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-blue-100">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Company</p>
            <p className="text-blue-700 font-medium">{user.company.name}</p>
            <p className="text-gray-600 text-sm italic mt-1">
              "{user.company.catchPhrase}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
