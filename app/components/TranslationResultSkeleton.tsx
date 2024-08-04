import React from 'react';

export default function TranslationResultSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="animate-pulse h-5 w-1/2 bg-gray-200 rounded-md"></div>
        <div className="animate-pulse h-5 w-1/4 bg-gray-200 rounded-md"></div>
        <div className="animate-pulse h-5 w-1/4 bg-gray-200 rounded-md"></div>
        <div className="animate-pulse h-5 w-1/4 bg-gray-200 rounded-md"></div>
      </div>

      <div className="flex gap-3">
        <div className="animate-pulse h-5 w-1/2 bg-gray-200 rounded-md"></div>
        <div className="animate-pulse h-5 w-full bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
}
