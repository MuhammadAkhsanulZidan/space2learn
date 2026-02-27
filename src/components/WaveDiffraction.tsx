import { useEffect, useRef, useState } from "react";

export default function WaveDiffraction() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState(0);
  const [slitHeight, setSlitHeight] = useState(60); // Adjustable slit

  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  if (!ctx || !canvas) return;

  const width = canvas.width;
  const height = canvas.height;
  const centerX = 150;
  const centerY = height / 2;

  ctx.clearRect(0, 0, width, height);

  // 1. Draw plane waves on the left
  for (let i = 0; i < centerX; i++) {
    const wave = Math.sin((i + time) * 0.2) * 10;
    ctx.fillStyle = `rgba(0,0,0,${(wave + 10) / 20})`;
    ctx.fillRect(i, 0, 1, height);
  }

  // 2. Draw the slit in the barrier
  ctx.fillStyle = "yellow";
  ctx.fillRect(centerX, 0, 2, height);

  ctx.fillStyle = "black";
  ctx.fillRect(centerX, 0, 2, centerY - slitHeight / 2);
  ctx.fillRect(centerX, centerY + slitHeight / 2, 2, height - (centerY + slitHeight / 2));

  // 3. Simulate circular waves after the slit (right side)
  const numSources = Math.floor(slitHeight / 10);
  const spacing = slitHeight / (numSources + 1);
  const waveOriginX = centerX + 5; // Position origin just after slit

  for (let i = 1; i <= numSources; i++) {
    const y = centerY - slitHeight / 2 + i * spacing;

    for (let r = 0; r < 12; r++) {
      const radius = (r * 12 + time) % 300;
      ctx.beginPath();
      // Semi-circular wavefront to the right
      ctx.arc(waveOriginX, y, radius, -Math.PI / 2, Math.PI / 2);
      ctx.strokeStyle = `rgba(0, 0, 0, 0.3)`; // Higher alpha for visibility
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }
}, [time, slitHeight]);


  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t + 2) % 200);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white rounded shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Pembelokan (Difraksi) Gelombang</h2>
      <div className="flex justify-center mb-4">
        <label htmlFor="slit" className="mr-4">Tinggi Celah: </label>
        <input
          type="range"
          id="slit"
          min={20}
          max={120}
          value={slitHeight}
          onChange={(e) => setSlitHeight(Number(e.target.value))}
          className="w-64"
        />
        <span className="ml-4">{slitHeight}px</span>
      </div>
      <canvas ref={canvasRef} width={600} height={300} className="bg-white rounded" />
      <p className="text-sm text-gray-300 mt-4">
        Gelombang merambat dari kiri menuju celah, dan mengalami pembelokan ketika melewati celah sempit.
        Pola lingkaran di sebelah kanan memperlihatkan hasil difraksi, menyerupai prinsip Huygens.
      </p>
    </div>
  );
}
