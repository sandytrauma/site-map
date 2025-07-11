// layoutData.ts
export interface Zone {
  id: string;
  label: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  color?:string;
}

export const zones: Zone[] = [
  { id: 'admin1', label: 'Admin Block', x: 130, y: 190 },
  { id: 'admin2', label: 'Admin Block', x: 165, y: 190 },

  { id: 'workshop1', label: 'Workshop', x: 390, y: 115 },
  { id: 'workshop2', label: 'Workshop', x: 430, y: 90 },
  { id: 'workshop3', label: 'Workshop', x: 150, y: 430 },

  { id: 'dtc', label: 'DTC Bus Depot', x: 220, y: 450 },

  { id: 'cng1', label: 'CNG Pump', x: 70, y: 20 },
  { id: 'cng2', label: 'CNG Pump', x: 480, y: 490 },

  { id: 'guard', label: 'Guard Room', x: 100, y: 270 },

  { id: 'parking1', label: 'Parking', x: 170, y: 310 },
  { id: 'parking2', label: 'Parking', x: 200, y: 310 },

  { id: 'washing1', label: 'Washing Plant', x: 300, y: 190 },
  { id: 'washing2', label: 'Washing Plant', x: 520, y: 140 },
  { id: 'washing3', label: 'Washing Plant', x: 420, y: 250 },

  { id: 'road', label: 'Gumanhera Road', x: 15, y: 50 },
];
