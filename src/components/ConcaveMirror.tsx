import { useRef, useState, useEffect } from "react";

export default function ConcaveMirror() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [objectDistance, setObjectDistance] = useState(50); // Default

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    const mirrorX = width / 2;
    const focalLength = 80;
    const radius = 2 * focalLength;

    const F = mirrorX - focalLength;
    const C = mirrorX - radius;

    const objectX = mirrorX - objectDistance;
    const objectHeight = 50;
    const objectTopY = centerY - objectHeight;

    ctx.clearRect(0, 0, width, height);

    // === Principal Axis ===
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // === Mirror (Concave)
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.save(); // Save the current state

    ctx.translate(mirrorX-100, centerY); // Move to the mirror center
    ctx.scale(1, 1.5); // Stretch vertically (Y axis)

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.arc(0, 0, 100, Math.PI *65/180, Math.PI * 295 / 180, true); // Centered at (0,0) because of translate
    ctx.stroke();

    ctx.restore(); // Restore to original scale


    // === Mark F and C ===
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(F, centerY, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText("F", F - 5, centerY + 20);

    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(C, centerY, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText("C", C - 5, centerY + 20);

    // === Draw Object ===
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
    ctx.fillStyle = "blue";
    ctx.fillText("Objek", objectX - 20, objectTopY - 10);

    // === Determine Bayangan ===
    const f = focalLength;
    const s = objectDistance;
    let sifat = "";
    let imageX = 0;
    let imageHeight = 0;
    let visible = true;

    if (s === f) {
      sifat = "Bayangan tidak terbentuk (di tak hingga)";
      visible = false;
    } else {
      const sPrime = (f * s) / (s - f); // rumus cermin
      imageX = mirrorX - sPrime;
      const magnification = -sPrime / s;
      imageHeight = objectHeight * Math.abs(magnification);

      const isReal = s > f;
      const isInverted = isReal;
      const isMagnified = Math.abs(magnification) > 1;

      if (!isReal) {
        sifat = "Bayangan: Maya, Tegak, " + (isMagnified ? "Diperbesar" : "Diperkecil");
      } else {
        sifat = `Bayangan: Nyata, ${isInverted ? "Terbalik" : "Tegak"}, ` + (isMagnified ? "Diperbesar" : "Diperkecil");
      }
    }

    // === Draw Image Arrow (if visible)

    if (visible) {
      if (s > f) {
        const topY = centerY + imageHeight; // inverted is *below* the axis

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(imageX, centerY);
        ctx.lineTo(imageX, topY);
        ctx.stroke();

        // Inverted arrowhead
        ctx.beginPath();
        ctx.moveTo(imageX - 5, topY - 10);
        ctx.lineTo(imageX, topY);
        ctx.lineTo(imageX + 5, topY - 10);
        ctx.stroke();

        ctx.fillStyle = "red";
        ctx.fillText("Bayangan", imageX - 30, topY + 20);
      }

      else {
        const topY = centerY - imageHeight;

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(imageX, centerY);
        ctx.lineTo(imageX, topY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(imageX - 5, topY + 10);
        ctx.lineTo(imageX, topY);
        ctx.lineTo(imageX + 5, topY + 10);
        ctx.stroke();

        ctx.fillStyle = "red";
        ctx.fillText("Bayangan", imageX - 30, topY - 10);

      }
    }

    // === Deskripsi Bayangan ===
    ctx.fillStyle = "green";
    ctx.font = "bold 16px Arial";
    ctx.fillText(sifat, 50, height - 30);
  }, [objectDistance]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Simulasi Interaktif Cermin Cekung
      </h2>

      <canvas ref={canvasRef} width={800} height={400} className="bg-white rounded" />

      <div className="flex flex-col items-center mt-4">
        <label className="mb-1 text-sm">Jarak Objek dari Cermin: {objectDistance}px</label>
        <input
          type="range"
          min={50}
          max={400}
          value={objectDistance}
          onChange={(e) => setObjectDistance(Number(e.target.value))}
          className="w-2/3"
        />
      </div>
    </div>
  );
}
