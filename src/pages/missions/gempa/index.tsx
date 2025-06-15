import { useEffect, useRef } from "react";

export default function EarthquakeSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const hiposentrum = { x: 280, y: 280 };
    const episentrum = { x: 280, y: 100 };

    const verticalDistance = Math.abs(hiposentrum.y - episentrum.y); // 180px
    const img = new Image();
    img.src = "/images/earth1.png"; // Your custom image

    let animationId: number;
    let radius = 0;
    const maxRadius = 150;
    const waveGap = 20;

    img.onload = () => {
      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        // Labels and points
        ctx.fillStyle = "black";
        ctx.font = "16px Arial";

        // Hiposentrum
        ctx.beginPath();
        ctx.arc(hiposentrum.x, hiposentrum.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.fillText("Hiposentrum", hiposentrum.x + 10, hiposentrum.y + 5);

        // Episentrum
        ctx.beginPath();
        ctx.arc(episentrum.x, episentrum.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "pink";
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.fillText("Episentrum", episentrum.x + 10, episentrum.y + 5);

        // Draw Hiposentrum wave
        for (let r = radius; r > 0; r -= waveGap) {
          const alpha = 1 - r / maxRadius;
          ctx.strokeStyle = `rgba(255,0,0,${alpha})`;
          ctx.beginPath();
          ctx.arc(hiposentrum.x, hiposentrum.y, r, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Start Episentrum wave *after* hiposentrum wave reaches it
        if (radius >= verticalDistance) {
          const delayRadius = radius - verticalDistance;

          for (let r = delayRadius; r > 0; r -= waveGap) {
            const alpha = 1 - r / maxRadius;
            ctx.strokeStyle = `rgba(255,165,0,${alpha})`;
            ctx.beginPath();
            ctx.ellipse(
              episentrum.x,
              episentrum.y,
              r * 1.3,
              r * 0.6,
              0,
              0,
              Math.PI * 2
            );
            ctx.stroke();
          }
        }

        radius += 1;
        if (radius > maxRadius + verticalDistance) radius = 0;

        animationId = requestAnimationFrame(draw);
      };

      draw();
    };

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-sky-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Simulasi Gempa: Hiposentrum & Episentrum</h2>

      <div className="w-[600px] h-[400px] mb-6">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          className="bg-white rounded shadow-lg"
        />
      </div>

      <p className="mt-4 max-w-xl text-center text-gray-200 text-sm">
        Gelombang dari hiposentrum merambat terlebih dahulu melalui dalam bumi. Setelah mencapai permukaan, gelombang dari episentrum mulai menyebar secara mendatar.
      </p>
    </div>
  );
}
