import { useRef, useState, useEffect } from "react";

export default function ConcaveMirror() {
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

    // Scale everything
    ctx.scale(scaleX, scaleY);

    const centerY = VIRTUAL_HEIGHT / 2;
    const mirrorX = VIRTUAL_WIDTH / 2;
    const focalLength = 100;
    const radius = 2 * focalLength;

    const F = mirrorX - focalLength;
    const C = mirrorX - radius;

    const objectX = mirrorX - objectDistance;
    const objectHeight = 80;
    const objectTopY = centerY - objectHeight;

    // Principal Axis
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(VIRTUAL_WIDTH, centerY);
    ctx.stroke();

    // Mirror (Concave)
    ctx.save();
    ctx.translate(mirrorX - 100, centerY);
    ctx.scale(1, 1.5);
    ctx.beginPath();
    ctx.arc(0, 0, 100, Math.PI * 65 / 180, Math.PI * 295 / 180, true);
    ctx.stroke();
    ctx.restore();

    // F and C marks
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(F, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = "bold 20px Arial";
    ctx.fillText("F", F - 10, centerY + 30);

    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(C, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText("C", C - 10, centerY + 30);

    // Object
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
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

    // Image calculation
    const s = objectDistance;
    const f = focalLength;
    let sifat = "";
    let imageX = 0;
    let imageHeight = 0;
    let visible = true;

    if (s === f) {
      sifat = "Bayangan tidak terbentuk (di tak hingga)";
      visible = false;
    } else {
      const sPrime = (f * s) / (s - f);
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

    // Draw Image
    if (visible) {
      if (s > f) {
        const topY = centerY + imageHeight;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(imageX, centerY);
        ctx.lineTo(imageX, topY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(imageX - 10, topY - 20);
        ctx.lineTo(imageX, topY);
        ctx.lineTo(imageX + 10, topY - 20);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fillText("Bayangan", imageX - 40, topY + 30);
      } else {
        const topY = centerY - imageHeight;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(imageX, centerY);
        ctx.lineTo(imageX, topY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(imageX - 10, topY + 20);
        ctx.lineTo(imageX, topY);
        ctx.lineTo(imageX + 10, topY + 20);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fillText("Bayangan", imageX - 40, topY - 20);
      }
    }

    // Description
    ctx.fillStyle = "green";
    ctx.font = "bold 22px Arial";
    ctx.fillText(sifat, 40, VIRTUAL_HEIGHT - 40);

    // Reset transform for next draw
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
        Simulasi Interaktif Cermin Cekung
      </h2>
      <div className="w-full">
        <canvas ref={canvasRef} className="bg-white rounded w-full" />
      </div>

      <div className="flex flex-col items-center mt-4">
        <label className="mb-1 text-sm">Jarak Objek dari Cermin: {objectDistance}</label>
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
