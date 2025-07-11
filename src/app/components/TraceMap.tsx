'use client';

import { useEffect, useRef } from 'react';

export default function EdgeTraceMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Simple edge detection kernel (Laplacian)
  const kernel = [
    0, -1,  0,
   -1,  4, -1,
    0, -1,  0,
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const image = imgRef.current;
    if (!canvas || !ctx || !image) return;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data, width, height } = imgData;

      // Grayscale conversion
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = avg;
      }

      // Edge detection
      const output = new Uint8ClampedArray(data.length);

      const getGray = (x: number, y: number) => {
        const idx = (y * width + x) * 4;
        return data[idx];
      };

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          let sum = 0;
          for (let ky = -1; ky <= 1; ky++) {
            for (let kx = -1; kx <= 1; kx++) {
              const weight = kernel[(ky + 1) * 3 + (kx + 1)];
              sum += getGray(x + kx, y + ky) * weight;
            }
          }

          const val = Math.min(255, Math.abs(sum));
          const idx = (y * width + x) * 4;
          output[idx] = output[idx + 1] = output[idx + 2] = val;
          output[idx + 3] = 255;
        }
      }

      const edgeImage = new ImageData(output, width, height);
      ctx.putImageData(edgeImage, 0, 0);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} style={{ maxWidth: '100%', border: '1px solid #ccc' }} />
      <img
        ref={imgRef}
        src="/dtc_depot.jpg"  // Put your image in /public
        alt="Depot Map"
        style={{ display: 'none' }}
      />
    </div>
  );
}
