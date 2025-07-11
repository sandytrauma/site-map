'use client';

import React, { useEffect, useRef, useState } from 'react';

type Label = {
  text: string;
  x: number;
  y: number;
};

const labels: Label[] = [
  { text: 'CNG pump', x: 1400, y: 400 },
  { text: 'Washing plant', x: 1300, y: 200 },
  { text: 'Washing plant', x: 1600, y: 250 },
  { text: 'Washing plant', x: 1800, y: 200 },
  { text: 'Workshop', x: 1400, y: 300 },
  { text: 'Workshop', x: 1600, y: 320 },
  { text: 'Workshop', x: 1750, y: 350 },
  { text: 'Admin block', x: 800, y: 900 },
  { text: 'Admin block', x: 900, y: 920 },
  { text: 'Main entrance gate', x: 800, y: 1000 },
  { text: 'Exit gate', x: 800, y: 1100 },
  { text: 'Exit gate', x: 900, y: 1150 },
  { text: 'Guard room', x: 780, y: 990 },
  { text: 'Guard room', x: 880, y: 1130 },
  { text: 'Car bike parking', x: 950, y: 1200 },
  { text: 'DTC depot', x: 1500, y: 1600 },
  { text: 'Driver rest room', x: 1900, y: 1250 },
];

export default function DepotSiteMap() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgSize, setImgSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setImgSize({ width: img.naturalWidth, height: img.naturalHeight });
    }
  }, []);

  const handleImgLoad = () => {
    const img = imgRef.current;
    if (img) setImgSize({ width: img.naturalWidth, height: img.naturalHeight });
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Base site image */}
      <img
        ref={imgRef}
        src="/dtc_depot.jpg"
        alt="Ghuman Hera DTC Depot"
        onLoad={handleImgLoad}
        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
      />

      {/* SVG overlay for labels */}
      {imgSize.width > 0 && (
        <svg
          width={imgSize.width}
          height={imgSize.height}
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        >
          {labels.map(({ text, x, y }, i) => (
            <text
              key={i}
              x={x}
              y={y}
              fontSize="24"
              fontFamily="Arial, sans-serif"
              fill="white"
              stroke="black"
              strokeWidth="3"
              paintOrder="stroke"
            >
              {text}
            </text>
          ))}
        </svg>
      )}
    </div>
  );
}
