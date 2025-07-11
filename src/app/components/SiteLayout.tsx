'use client';

import { useEffect, useRef } from 'react';

export default function SiteLayout() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <object
        data="/dtc-layout.svg"
        type="image/svg+xml"
        width="100%"
        height="100%"
        style={{ border: '1px solid #ccc', maxHeight: '90vh' }}
      >
        Your browser does not support SVGs.
      </object>
    </div>
  );
}
