import { useEffect, useRef, useState } from "react";

export default function ConvexMirror() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [objectDistance, setObjectDistance] = useState(20); // Object distance from mirror

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    const mirrorX = width/2;
    const focalLength = 80
    const radius = 2 * focalLength;

    const F = mirrorX + focalLength;
    const C = mirrorX + radius;

    const objectX = (mirrorX - objectDistance);
    const objectHeight = 50;
    const objectTopY = centerY - objectHeight;

    ctx.clearRect(0, 0, width, height);

    // === Axis Line ===
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // === Convex Mirror ===
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.save(); // Save the current state
    ctx.translate(mirrorX+110, centerY); // Move to the mirror center
    ctx.scale(1, 1.5); // Stretch vertically (Y axis)

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.arc(0, 0, 100, Math.PI *235/ 180, Math.PI * 135/ 180, true); // Centered at (0,0) because of translate
    ctx.stroke();

    ctx.restore(); // Restore to original scale

    // === F and C points ===
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(F, centerY, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText("F", F + 5, centerY + 20);

    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(C, centerY, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText("C", C + 5, centerY + 20);

    // === Object ===
    ctx.strokeStyle = "blue";
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

    // === Image (always virtual, upright, smaller) ===
    const s = objectDistance;
    const f = -focalLength; // convex mirror focal length is negative
    const sPrime = 1/((1/f)-(1/s))
    const m = sPrime/s; // magnification < 1

    const imageHeight = objectHeight * Math.abs(m);
    const imageX = mirrorX - sPrime + 10; // draw on the right side, since it's virtual

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
        Simulasi Cermin Cembung (Convex Mirror)
      </h2>

      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="bg-white rounded"
      />

      <div className="flex flex-col items-center mt-4">
        <label className="mb-1 text-sm">
          Jarak Objek dari Cermin: {objectDistance}px
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
