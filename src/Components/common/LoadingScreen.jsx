import React from 'react';

const LoadingScreen = ({ isLoaded }) => {
  if (isLoaded) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <div className="text-cyan-400 text-2xl font-mono animate-pulse mb-2">INITIALIZING MATRIX...</div>
        <div className="text-gray-400 text-sm font-mono">Loading creative portfolio</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
