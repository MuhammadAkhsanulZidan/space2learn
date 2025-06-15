import { useEffect, useRef, useState } from "react";

export default function DivergingLens() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [objectDistance, setObjectDistance] = useState(100); // from lens center

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    const lensX = width / 2;
    const focalLength = 80;
    const radius = 2 * focalLength;

    const F = lensX - focalLength;
    const C = lensX - radius;

    const objectX = lensX - objectDistance;
    const objectHeight = 60;
    const objectTopY = centerY - objectHeight;

    // === Clear canvas ===
    ctx.clearRect(0, 0, width, height);

    // === Draw principal axis ===
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // === Draw diverging lens ===
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(lensX, centerY - 100);
    ctx.bezierCurveTo(lensX - 20, centerY - 100, lensX - 20, centerY + 100, lensX, centerY + 100);
    ctx.moveTo(lensX, centerY - 100);
    ctx.bezierCurveTo(lensX + 20, centerY - 100, lensX + 20, centerY + 100, lensX, centerY + 100);
    ctx.stroke();

    // === Mark F and C ===
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(F, centerY, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText("F", F - 10, centerY + 20);

    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(C, centerY, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText("C", C - 10, centerY + 20);

    // === Object Arrow ===
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(objectX, centerY);
    ctx.lineTo(objectX, objectTopY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(objectX - 5, objectTopY + 10);
    ctx.lineTo(objectX, objectTopY);
    ctx.lineTo(objectX + 5, objectTopY + 10);
    ctx.stroke();
    ctx.fillText("Objek", objectX - 20, objectTopY - 10);

    // === Image Calculations ===
    const s = objectDistance;
    const f = -focalLength; // diverging lens => focal length is negative
    let sPrime = (f * s) / (s - f); // lens formula: 1/f = 1/s + 1/s'
    sPrime = Math.abs(sPrime);

    const m = sPrime / s;
    const imageHeight = objectHeight * m;
    const imageX = lensX - sPrime;

    // === Draw Virtual Image (upright, smaller, same side) ===
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(imageX, centerY);
    ctx.lineTo(imageX, centerY - imageHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(imageX - 5, centerY - imageHeight + 10);
    ctx.lineTo(imageX, centerY - imageHeight);
    ctx.lineTo(imageX + 5, centerY - imageHeight + 10);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fillText("Bayangan", imageX - 30, centerY - imageHeight - 10);
  }, [objectDistance]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Simulasi Lensa Cekung (Diverging Lens)
      </h2>

      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="bg-white rounded"
      />

      <div className="flex flex-col items-center mt-4">
        <label className="mb-1 text-sm">
          Jarak Objek dari Lensa: {objectDistance}px
        </label>
        <input
          type="range"
          min={50}
          max={300}
          value={objectDistance}
          onChange={(e) => setObjectDistance(Number(e.target.value))}
          className="w-2/3"
        />
      </div>

      <p className="text-sm text-gray-300 mt-4 text-center">
        Lensa cekung selalu menghasilkan bayangan <b>maya</b>, <b>tegak</b>, dan{" "}
        <b>diperkecil</b>.
      </p>
    </div>
  );
}
