import { useEffect, useRef, useState } from "react";

export default function FlatMirror180() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bounceCount = 10;
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t + 1) % (bounceCount + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const leftX = 100;
    const rightX = width - 100;
    const y = height / 2;
    const centerX = width / 2;

    ctx.clearRect(0, 0, width, height);

    // === Draw mirrors ===
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(leftX, 50);
    ctx.lineTo(leftX, height - 50);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(rightX, 50);
    ctx.lineTo(rightX, height - 50);
    ctx.stroke();

    // === Draw centered object ===
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(centerX, y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText("Objek", centerX + 10, y - 10);

    // === Draw only one arrow per frame ===
    const isRight = time % 2 === 0;
    const fromX = isRight ? leftX : rightX;
    const toX = isRight ? rightX : leftX;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(fromX, y);
    ctx.lineTo(toX, y);
    ctx.stroke();

    drawArrowhead(ctx, fromX, y, toX, y);

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(fromX, y/3);
    ctx.lineTo(toX, y/3);
    ctx.stroke();

    drawArrowhead(ctx, fromX, y/3, toX, y/3);

    ctx.beginPath();
    ctx.moveTo(fromX, y+y/2);
    ctx.lineTo(toX, y+y/2);
    ctx.stroke();

    drawArrowhead(ctx, fromX, y+y/2, toX, y+y/2);
    
  }, [time]);


  function drawArrowhead(
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number
  ) {
    const headlen = 10;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);

    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(
      toX - headlen * Math.cos(angle - Math.PI / 6),
      toY - headlen * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      toX - headlen * Math.cos(angle + Math.PI / 6),
      toY - headlen * Math.sin(angle + Math.PI / 6)
    );
    ctx.lineTo(toX, toY);
    ctx.fillStyle = "red";
    ctx.fill();
  }

  return (
    <div className="p-6 bg-gray-900 text-white rounded shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Simulasi Pantulan Cahaya: Cermin A → B ← A → B ← ...
      </h2>

      <canvas
        ref={canvasRef}
        width={700}
        height={400}
        className="bg-white rounded"
      />

      <p className="text-sm text-gray-300 mt-4 text-center">
        Cahaya memantul bolak-balik antara dua cermin sejajar. Panah merah
        menunjukkan arah pantulan.
      </p>
    </div>
  );
}
