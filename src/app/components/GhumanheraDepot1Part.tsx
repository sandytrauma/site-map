import React from 'react';
import LayoutBlock from '@/app/components/LayoutBlock';

const GhumanheraDepot1Part: React.FC = () => {
  return (
    <div className="relative border border-gray-500 bg-purple-100 p-2 w-full h-64 flex flex-col items-center justify-between overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-bold bg-purple-100 px-2 -mt-3">Ghumanhera 1 Depot</div>

      {/* Entry Gates from Road Side */}
      <div className="absolute left-0 top-1/4 h-8 w-4 border-t-2 border-r-2 border-b-2 border-gray-400 bg-gray-50"></div>
      <div className="absolute left-0 top-3/4 h-8 w-4 border-t-2 border-r-2 border-b-2 border-gray-400 bg-gray-50"></div>

      {/* Guard Rooms at Entry Gates */}
      <LayoutBlock title="Guard Room" className="absolute left-4 top-[calc(25%-10px)] w-16 h-8 bg-yellow-200" />
      <LayoutBlock title="Guard Room" className="absolute left-4 top-[calc(75%-10px)] w-16 h-8 bg-yellow-200" />

      {/* CNG Pump Top Left */}
      <LayoutBlock title="CNG Pump" className="absolute top-4 left-24 w-20 h-12 bg-red-200" />

      {/* 2 Washing Plant Top Right */}
      <LayoutBlock title="Washing Plant" className="absolute top-4 right-28 w-24 h-12 bg-lime-200" />
      <LayoutBlock title="Washing Plant" className="absolute top-4 right-4 w-24 h-12 bg-lime-200" />

      {/* 1 Admin Block Bottom Left */}
      <LayoutBlock title="Admin Block" className="absolute bottom-4 left-4 w-28 h-16 bg-green-200" />

      {/* 1 Work Shop Bottom Right */}
      <LayoutBlock title="Work Shop" className="absolute bottom-4 right-4 w-36 h-20 bg-orange-200" />
    </div>
  );
};

export default GhumanheraDepot1Part;