'use client';

import React from 'react';

interface Zone {
  id: string;
  label: string;
  points: string; // SVG polygon points
  labelPos: { x: number; y: number };
  fill?: string;
}

const zones: Zone[] = [
  {
    id: 'admin-block',
    label: 'Admin Block',
    points: '180,150 280,150 280,190 180,190',
    labelPos: { x: 185, y: 175 },
    fill: '#e0f7fa',
  },
  {
    id: 'workshop-1',
    label: 'Workshop',
    points: '430,110 520,110 520,140 430,140',
    labelPos: { x: 435, y: 130 },
    fill: '#ffe8cc',
  },
  {
    id: 'workshop-2',
    label: 'Workshop',
    points: '480,70 570,70 570,100 480,100',
    labelPos: { x: 485, y: 90 },
    fill: '#ffe8cc',
  },
  {
    id: 'dtc-depot',
    label: 'DTC Depot',
    points: '240,420 400,420 400,470 240,470',
    labelPos: { x: 250, y: 450 },
    fill: '#fff3bf',
  },
  {
    id: 'exit-gate',
    label: 'Exit Gate',
    points: '100,330 170,330 170,360 100,360',
    labelPos: { x: 105, y: 350 },
    fill: '#f1f3f5',
  },
];

const DepotPolygonMap: React.FC = () => {
  const handleLabelClick = (zoneId: string) => {
    alert(`Clicked on: ${zoneId}`);
  };

  return (
    <div className="relative w-[600px] h-[600px] border shadow rounded overflow-hidden">
      {/* Blurred Background */}
      <img
        src="/blurred_ghd_depot.jpg"
        alt="Depot Layout"
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-sm"
      />

      {/* Overlay SVG with polygons and labels */}
      <svg
        viewBox="0 0 600 600"
        className="absolute top-0 left-0 w-full h-full"
      >
        {zones.map((zone) => (
          <g key={zone.id}>
            <polygon
              points={zone.points}
              fill={zone.fill || 'rgba(255,255,255,0.3)'}
              stroke="#1971c2"
              strokeWidth={2}
              opacity={0.6}
            />
            <text
              x={zone.labelPos.x}
              y={zone.labelPos.y}
              fontSize="12"
              fontWeight="bold"
              fill="#000"
              style={{ cursor: 'pointer', userSelect: 'none' }}
              onClick={() => handleLabelClick(zone.id)}
            >
              {zone.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default DepotPolygonMap;
