import { useRef, useEffect, useState } from "react";

export default function WavePolarization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [angle, setAngle] = useState(0); // Angle of 2nd polarizer

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const drawWaves = (xStart: number, region: "unpolarized" | "polarized" | "analyzed") => {
      const waveCount = 10;
      const spacing = height / (waveCount + 1);

      for (let i = 1; i <= waveCount; i++) {
        const y = i * spacing;
        let angleDeg = 0;

        if (region === "unpolarized") {
          angleDeg = Math.random() * 180; // Random angles
        } else if (region === "polarized") {
          angleDeg = 90; // Vertical only
        } else if (region === "analyzed") {
          angleDeg = angle;
        }

        const length = 20;
        const radians = (angleDeg * Math.PI) / 180;

        const x1 = xStart;
        const y1 = y;
        const x2 = x1 + Math.cos(radians) * length;
        const y2 = y1 - Math.sin(radians) * length;

        ctx.strokeStyle = region === "unpolarized" ? "gray" : region === "polarized" ? "blue" : "red";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    // Draw regions
    drawWaves(50, "unpolarized");

    // Draw polarizer 1
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(130, 0, 10, height);

    drawWaves(160, "polarized");

    // Draw polarizer 2
    ctx.save();
    ctx.translate(260, height / 2);
    ctx.rotate((-angle * Math.PI) / 180);
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(-5, -height / 2, 10, height);
    ctx.restore();

    drawWaves(300, "analyzed");

  }, [angle]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Simulasi Polarisasi Gelombang</h2>
      <canvas ref={canvasRef} width={500} height={300} className="bg-white rounded mb-4" />
      <div className="flex justify-center items-center gap-4">
        <label htmlFor="angle">Sudut Polarisator Kedua: </label>
        <input
          type="range"
          id="angle"
          min={0}
          max={180}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-64"
        />
        <span>{angle}°</span>
      </div>
      <p className="text-sm text-gray-300 mt-4 text-center">
        Gelombang tak terpolarisasi melewati polarisator pertama (hanya vertikal yang lolos), kemudian melewati
        polarisator kedua yang bisa diputar. Intensitas cahaya tergantung pada sudut antara keduanya.
      </p>
    </div>
  );
}
