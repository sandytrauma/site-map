'use client';

import React from 'react';
import { zones } from '@/app/utils/layoutData';

const SiteLayout: React.FC = () => {
  return (
    <div className="relative w-[900px] h-[600px] border shadow rounded overflow-hidden mx-auto">
      {/* Background image layout */}
      <img
        src="/Doc1.jpg"
        alt="Depot Layout"
        className="absolute top-0 left-0 w-full h-full object-contain"
      />

      {/* Overlay color blocks (no text/labels) */}
      {zones.map((zone) => (
        <div
          key={zone.id}
          className="absolute rounded"
          style={{
            top: zone.y,
            left: zone.x,
            transform: 'translate(-50%, -50%)',
            backgroundColor: zone.color || 'transparent',
            width: 40,
            height: 20,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
};

export default SiteLayout;
