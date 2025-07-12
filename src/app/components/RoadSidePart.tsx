import React from 'react';

const RoadSidePart: React.FC = () => {
  return (
    <div className="relative p-4 bg-gray-200 flex flex-col items-center justify-center h-full min-w-[150px] border-r-2 border-dashed border-gray-400">
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -rotate-90 origin-top-left whitespace-nowrap text-lg font-bold text-gray-600">
        Ghumanhera Road
      </div>
    
    </div>
  );
};

export default RoadSidePart;