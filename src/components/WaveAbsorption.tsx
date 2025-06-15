import { useRef, useEffect, useState } from "react";

export default function WaveAbsorption() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [absorptionLevel, setAbsorptionLevel] = useState(0.02); // 0 = no absorption, 1 = full

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;

    ctx.clearRect(0, 0, width, height);

    // Draw wave with fading amplitude
    ctx.beginPath();
    ctx.moveTo(0, midY);
    for (let x = 0; x < width; x++) {
      const attenuation = Math.exp(-absorptionLevel * x); // exponential decay
      const y = Math.sin((x / 20) * Math.PI) * 40 * attenuation;
      ctx.lineTo(x, midY - y);
    }

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw absorbing medium (shaded area)
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(200, 0, 200, height);
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(400, 0, 100, height);
  }, [absorptionLevel]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Simulasi Absorpsi Gelombang</h2>
      <canvas ref={canvasRef} width={600} height={200} className="bg-white rounded mb-4" />
      <div className="flex justify-center items-center gap-4">
        <label htmlFor="absorption">Tingkat Absorpsi: </label>
        <input
          type="range"
          id="absorption"
          min={0}
          max={0.1}
          step={0.005}
          value={absorptionLevel}
          onChange={(e) => setAbsorptionLevel(Number(e.target.value))}
          className="w-64"
        />
        <span>{absorptionLevel.toFixed(3)}</span>
      </div>
      <p className="text-sm text-gray-300 mt-4 text-center">
        Gelombang merambat dari kiri ke kanan, dan amplitudo berkurang seiring jarak akibat medium yang menyerap energi.
        Area abu-abu menandai zona dengan tingkat absorpsi yang lebih tinggi.
      </p>
    </div>
  );
}
