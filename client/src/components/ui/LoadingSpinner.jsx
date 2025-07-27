import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-orange-500 border-t-transparent"></div>
        <div className="mt-20 text-gray-600">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
