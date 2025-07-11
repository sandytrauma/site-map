'use client';

import React from 'react';

interface SiteLabel {
  id: string;
  label: string;
  top: number;
  left: number;
  bgColor?: string;
}

const labels: SiteLabel[] = [
  { id: 'admin-1', label: 'Admin block', top: 150, left: 200 },
  { id: 'workshop-1', label: 'Workshop', top: 120, left: 430 },
  { id: 'workshop-2', label: 'Workshop', top: 80, left: 460 },
  { id: 'cng', label: 'CNG pump', top: 10, left: 150 },
  { id: 'exit', label: 'Exit gate', top: 330, left: 90 },
  { id: 'depot', label: 'DTC depot', top: 410, left: 250, bgColor: '#ffd43b' },
  { id: 'car-bike', label: 'Car bike parking', top: 360, left: 180 },
  { id: 'plant-1', label: 'Washing plant', top: 180, left: 300 },
  { id: 'plant-2', label: 'Washing plant', top: 100, left: 510 },
];

const SiteMap: React.FC = () => {
  return (
    <div className="relative w-[600px] h-[600px] border shadow">
      {/* Background Image */}
      <img
        src="/dtc_depot.jpg"
        alt="Depot Layout"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Labels */}
      {labels.map(({ id, label, top, left, bgColor }) => (
        <div
          key={id}
          className="absolute text-xs px-2 py-1 rounded shadow"
          style={{
            top,
            left,
            backgroundColor: bgColor || 'white',
            border: '1px solid #333',
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default SiteMap;
