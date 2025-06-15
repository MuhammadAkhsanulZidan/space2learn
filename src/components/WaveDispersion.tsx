import { useEffect, useRef, useState } from "react";

export default function WaveDispersion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const centerY = height / 2;

    // Define wave frequencies and their dispersive speeds
    const waves = [
      { freq: 0.05, color: "red", speed: 1.2 },
      { freq: 0.08, color: "orange", speed: 1.0 },
      { freq: 0.12, color: "green", speed: 0.8 },
      { freq: 0.16, color: "blue", speed: 0.6 },
    ];

    // Draw each wave
    waves.forEach(({ freq, color, speed }) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;

      for (let x = 0; x < width; x++) {
        const y = centerY + Math.sin(x * freq - time * speed) * 40;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
    });

    // Optional: Show label
    ctx.fillStyle = "black";
    ctx.font = "14px sans-serif";
    ctx.fillText("Dispersi Gelombang: Frekuensi berbeda → Kecepatan berbeda", 10, 20);
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white rounded shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Simulasi Dispersi Gelombang</h2>
      <canvas ref={canvasRef} width={600} height={300} className="bg-white rounded" />
      <p className="text-sm text-gray-300 mt-4">
        Gelombang dengan frekuensi berbeda merambat dengan kecepatan berbeda. Ini menyebabkan
        penyebaran bentuk gelombang seiring waktu — fenomena ini disebut dispersi.
      </p>
    </div>
  );
}
