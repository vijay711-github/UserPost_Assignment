export default function Loading() {
  return (
    <div className="max-w-xl mx-auto p-4 w-full">
      {/* Multiple skeleton cards */}
      {[1, 2].map((item) => (
        <div 
          key={item}
          className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden animate-pulse"
        >
          {/* Header skeleton */}
          <div className="p-4 border-b flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <div className="ml-4 flex-1">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/5"></div>
            </div>
          </div>

          {/* Image skeleton */}
          <div className="h-64 bg-gray-200 w-full"></div>

          {/* Content skeleton */}
          <div className="p-5">
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-11/12"></div>
              <div className="h-3 bg-gray-200 rounded w-4/5"></div>
            </div>

            {/* Action buttons skeleton */}
            <div className="mt-6 pt-4 border-t flex justify-between">
              <div className="flex space-x-6">
                <div className="w-16 h-6 bg-gray-200 rounded"></div>
                <div className="w-20 h-6 bg-gray-200 rounded"></div>
              </div>
              <div className="w-16 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}