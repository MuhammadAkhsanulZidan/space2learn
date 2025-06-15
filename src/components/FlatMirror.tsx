import { useEffect, useRef, useState } from "react";

export default function FlatMirror() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [angle, setAngle] = useState(60); // Default: 60°

  function calculateImageCount(angle: number) {
    const division = 360 / angle;
    return Math.floor(division - 1);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    // Draw mirrors
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + 200 * Math.cos(0), cy + 200 * Math.sin(0)); // Mirror 1
    ctx.stroke();

    ctx.beginPath();
    const rad = (angle * Math.PI) / 180;
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + 200 * Math.cos(rad), cy - 200 * Math.sin(rad)); // Mirror 2
    ctx.stroke();

  
  }, [angle]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Simulasi Dua Cermin Datar</h2>

      <div className="flex justify-center mb-4">
        <label htmlFor="angle" className="mr-4">Sudut antara cermin (°):</label>
        <input
          id="angle"
          type="range"
          min={10}
          max={180}
          step={1}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-64"
        />
        <span className="ml-4">{angle}°</span>
      </div>

      <canvas ref={canvasRef} width={600} height={500} className="bg-white rounded" />

      <p className="text-sm text-gray-300 mt-4 text-center">
        Objek akan membentuk {calculateImageCount(angle)} bayangan ketika berada di antara dua cermin yang membentuk sudut {angle}°.
      </p>
    </div>
  );
}
