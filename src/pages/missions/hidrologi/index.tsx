import { useEffect, useRef, useState } from "react";

export default function HydrologyCycleSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"evaporation" | "condensation" | "precipitation">("evaporation");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const cloudX = 90;
    let evaporationHeight = 0;
    let cloudDarkness = 0;
    let cloudDrift = 0;
    let rainDrops: { x: number; y: number }[] = [];
    let frameCount = 0;
    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#228B22";
      ctx.fillRect(0, height - 80, width, 80);
      ctx.fillStyle = "#1E90FF";
      ctx.fillRect(0, height - 40, width, 40);

      // Sun
      ctx.beginPath();
      ctx.arc(60, 60, 30, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();

      // Labels per phase
      ctx.fillStyle = "black";
      ctx.font = "14px Arial";
      if (phase === "evaporation") ctx.fillText("Evaporasi", 40, 270);
      if (phase === "condensation") ctx.fillText("Kondensasi", cloudX + cloudDrift + 70, 85);
      if (phase === "precipitation") ctx.fillText("Presipitasi", cloudX + cloudDrift + 70, 130);
      ctx.fillText("Koleksi", 440, height - 50);

      // Evaporation Phase
      if (phase === "evaporation") {
        ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          for (let y = 0; y < evaporationHeight; y++) {
            const x = cloudX + i * 15 + Math.sin((y + frameCount * 5) / 10) * 3;
            const py = 300 - y;
            if (y === 0) ctx.moveTo(x, py);
            else ctx.lineTo(x, py);
          }
          ctx.stroke();
        }
        evaporationHeight += 1;
        if (evaporationHeight >= 200) {
          setPhase("condensation");
        }
      }

      // Condensation Phase
      if (phase === "condensation") {
        const grayValue = Math.max(255 - cloudDarkness * 100, 100);
        ctx.fillStyle = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
        ctx.beginPath();
        ctx.arc(cloudX + cloudDrift, 100, 20, 0, Math.PI * 2);
        ctx.arc(cloudX + 25 + cloudDrift, 100, 25, 0, Math.PI * 2);
        ctx.arc(cloudX + 50 + cloudDrift, 100, 20, 0, Math.PI * 2);
        ctx.fill();

        cloudDarkness += 0.01;
        cloudDrift += 0.2;

        if (cloudDarkness >= 1) {
          setPhase("precipitation");
        }
      }

      // Precipitation Phase
      if (phase === "precipitation") {
        const gray = 100;
        ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
        ctx.beginPath();
        ctx.arc(cloudX + cloudDrift, 100, 20, 0, Math.PI * 2);
        ctx.arc(cloudX + 25 + cloudDrift, 100, 25, 0, Math.PI * 2);
        ctx.arc(cloudX + 50 + cloudDrift, 100, 20, 0, Math.PI * 2);
        ctx.fill();

        if (frameCount % 5 === 0 && rainDrops.length < 100) {
          for (let i = 0; i < 5; i++) {
            rainDrops.push({
              x: cloudX + cloudDrift + Math.random() * 60,
              y: 120 + Math.random() * 10
            });
          }
        }

        ctx.strokeStyle = "blue";
        rainDrops.forEach((drop) => {
          ctx.beginPath();
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x + 1, drop.y + 8);
          ctx.stroke();
          drop.y += 4;
        });

        rainDrops = rainDrops.filter(drop => drop.y < height - 40);

        if (frameCount > 300) {
          setPhase("evaporation");
          evaporationHeight = 0;
          cloudDarkness = 0;
          // Keep cloudDrift to not reset cloud position
          rainDrops = [];
          frameCount = 0;
        }
      }

      frameCount++;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, [phase]);

  return (
    <div className="flex flex-col items-center justify-center bg-sky-800 p-4 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Siklus Hidrologi (Hydrology Cycle)</h2>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="bg-white rounded shadow"
      />
      <p className="text-sm text-gray-200 mt-4 max-w-xl text-center">
        Air menguap, membentuk awan putih (kondensasi), lalu menggelap dan bergerak, dan akhirnya turun sebagai hujan (presipitasi).
      </p>
    </div>
  );
}
