import React from 'react';
import LayoutBlock from '@/app/components/LayoutBlock';

const GhumanheraDepot2Part: React.FC = () => {
  return (
    <div className="relative border border-gray-500 bg-purple-100 p-2 w-full h-64 flex flex-col items-center justify-between overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-bold bg-purple-100 px-2 -mt-3">Ghumanhera 2 Depot</div>

      {/* Entry Gates from Road Side */}
      <div className="absolute left-0 top-1/4 h-8 w-4 border-t-2 border-r-2 border-b-2 border-gray-400 bg-gray-50"></div>
      <div className="absolute left-0 top-3/4 h-8 w-4 border-t-2 border-r-2 border-b-2 border-gray-400 bg-gray-50"></div>

      {/* Guard Rooms at Entry Gates */}
      <LayoutBlock title="Guard Room" className="absolute left-4 top-[calc(25%-10px)] w-16 h-8 bg-yellow-200" />
      <LayoutBlock title="Guard Room" className="absolute left-4 top-[calc(75%-10px)] w-16 h-8 bg-yellow-200" />

      {/* 1 Admin Block Top Left */}
      <LayoutBlock title="Admin Block" className="absolute top-4 left-24 w-28 h-16 bg-green-200" />

      {/* 1 Workshop Top Right */}
      <LayoutBlock title="Work Shop" className="absolute top-4 right-4 w-36 h-20 bg-orange-200" />

      {/* 2 Washing Plant Below Work Shop Area Top Right */}
      <LayoutBlock title="Washing Plant" className="absolute top-24 right-28 w-24 h-12 bg-lime-200" />
      <LayoutBlock title="Washing Plant" className="absolute top-24 right-4 w-24 h-12 bg-lime-200" />

      {/* 1 CNG Pump Bottom Right with Some Margin */}
      <LayoutBlock title="CNG Pump" className="absolute bottom-4 right-28 w-20 h-12 bg-red-200" />

      {/* 1 Crew Rest Area Bottom Right */}
      <LayoutBlock title="Crew Rest Area" className="absolute bottom-4 right-4 w-28 h-16 bg-blue-200" />
    </div>
  );
};

export default GhumanheraDepot2Part;