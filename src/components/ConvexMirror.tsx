import { useEffect, useRef, useState } from "react";

export default function ConvexMirror() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [objectDistance, setObjectDistance] = useState(200); // scaled unit

  const VIRTUAL_WIDTH = 1000;
  const VIRTUAL_HEIGHT = 500;

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = (VIRTUAL_HEIGHT / VIRTUAL_WIDTH) * parent.clientWidth;
    }

    const width = canvas.width;
    const height = canvas.height;

    const scaleX = width / VIRTUAL_WIDTH;
    const scaleY = height / VIRTUAL_HEIGHT;

    ctx.clearRect(0, 0, width, height);
    ctx.scale(scaleX, scaleY);

    const centerY = VIRTUAL_HEIGHT / 2;
    const mirrorX = VIRTUAL_WIDTH / 2;
    const focalLength = 100;
    const radius = 2 * focalLength;

    const F = mirrorX + focalLength;
    const C = mirrorX + radius;

    const objectX = mirrorX - objectDistance;
    const objectHeight = 80;
    const objectTopY = centerY - objectHeight;

    // Axis line
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(VIRTUAL_WIDTH, centerY);
    ctx.stroke();

    // Convex mirror
    ctx.save();
    ctx.translate(mirrorX + 110, centerY);
    ctx.scale(1, 1.5);
    ctx.beginPath();
    ctx.arc(0, 0, 100, Math.PI * 235 / 180, Math.PI * 135 / 180, true);
    ctx.stroke();
    ctx.restore();

    // F and C points
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(F, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = "bold 20px Arial";
    ctx.fillText("F", F + 5, centerY + 30);

    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(C, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText("C", C + 5, centerY + 30);

    // Object
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(objectX, centerY);
    ctx.lineTo(objectX, objectTopY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(objectX - 10, objectTopY + 20);
    ctx.lineTo(objectX, objectTopY);
    ctx.lineTo(objectX + 10, objectTopY + 20);
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fillText("Objek", objectX - 30, objectTopY - 20);

    // Image (virtual, upright, smaller)
    const s = objectDistance;
    const f = -focalLength; // convex: focal length negative
    const sPrime = 1 / ((1 / f) - (1 / s));
    const m = sPrime / s;

    const imageHeight = objectHeight * Math.abs(m);
    const imageX = mirrorX - sPrime + 10;

    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(imageX, centerY);
    ctx.lineTo(imageX, centerY - imageHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(imageX - 10, centerY - imageHeight + 20);
    ctx.lineTo(imageX, centerY - imageHeight);
    ctx.lineTo(imageX + 10, centerY - imageHeight + 20);
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.fillText("Bayangan", imageX - 40, centerY - imageHeight - 20);

    // Reset transform after draw
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  };

  useEffect(() => {
    draw();
  }, [objectDistance]);

  useEffect(() => {
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white rounded shadow-lg w-full mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Simulasi Cermin Cembung (Convex Mirror)
      </h2>
      <div className="w-full">
        <canvas ref={canvasRef} className="bg-white rounded w-full" />
      </div>

      <div className="flex flex-col items-center mt-4">
        <label className="mb-1 text-sm">
          Jarak Objek dari Cermin: {objectDistance}
        </label>
        <input
          type="range"
          min={50}
          max={400}
          value={objectDistance}
          onChange={(e) => setObjectDistance(Number(e.target.value))}
          className="w-2/3"
        />
      </div>

      <p className="text-sm text-gray-300 mt-4 text-center">
        Cermin cembung selalu menghasilkan bayangan <b>maya</b>, <b>tegak</b>, dan{" "}
        <b>diperkecil</b>.
      </p>
    </div>
  );
}
