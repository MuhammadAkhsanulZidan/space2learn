import { useState, useRef, useEffect } from "react";

export default function EyeProblem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [condition, setCondition] = useState<"normal" | "miopi" | "hipermetropi">("normal");
  const [showLens, setShowLens] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    const img = new Image();
    img.src = "/images/eye4.png"; // Make sure this path is correct

    img.onload = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw image smaller and a bit right
      ctx.drawImage(img, 150, 50, 300, 300);

      const retinaX = width - 230;
      const retinaY = centerY-10;

      ctx.fillStyle = "pink";
      ctx.fillRect(retinaX, retinaY - 30, 3, 60);
      ctx.fillStyle = "black";
      ctx.font = "14px Arial";
      ctx.fillText("Retina", retinaX - 40, retinaY + 5);

      const drawFocusPoint = (x: number, y: number, label: string) => {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.fillText(label, x - 25, y - 10);
      };

      const raysY = [-20, 0, 20];
      ctx.lineWidth = 2;

      raysY.forEach((offset) => {
        const y = retinaY + offset;

        if (condition === "normal") {
          ctx.strokeStyle = "blue";
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(retinaX - 40, y);
          ctx.lineTo(retinaX, retinaY);
          ctx.stroke();
          drawFocusPoint(retinaX, retinaY, "Fokus");
        }

        if (condition === "miopi") {
          if (!showLens) {
            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(retinaX - 80, y); // affected by objectDistance
            ctx.lineTo(retinaX - 40, retinaY);
            ctx.stroke();
            drawFocusPoint(retinaX - 40, retinaY, "Sebelum Retina");
          } else {
            ctx.strokeStyle = "green";
            ctx.beginPath();
            ctx.moveTo(40, y);
            ctx.lineTo(retinaX - 40, y);
            ctx.lineTo(retinaX, retinaY);
            ctx.stroke();
            drawFocusPoint(retinaX, retinaY, "Setelah Koreksi");
          }
        }

        if (condition === "hipermetropi") {
          if (!showLens) {
            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(retinaX - 30, y); // affected by objectDistance
            ctx.lineTo(retinaX + 40, retinaY);
            ctx.stroke();
            drawFocusPoint(retinaX + 40, retinaY, "Setelah Retina");
          } else {
            ctx.strokeStyle = "green";
            ctx.beginPath();
            ctx.moveTo(40, y);
            ctx.lineTo(retinaX - 40, y);
            ctx.lineTo(retinaX, retinaY);
            ctx.stroke();
            drawFocusPoint(retinaX, retinaY, "Setelah Koreksi");
          }
        }
      });

      // Lens drawing
      if (showLens && condition !== "normal") {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        if (condition === "miopi") {
          ctx.moveTo(40, centerY - 40);
          ctx.bezierCurveTo(20, centerY, 20, centerY, 40, centerY + 40);
          ctx.stroke();
          ctx.fillText("Lensa Cekung", 0, centerY + 60);
        } else {
          ctx.moveTo(40, centerY - 40);
          ctx.bezierCurveTo(60, centerY, 60, centerY, 40, centerY + 40);
          ctx.stroke();
          ctx.fillText("Lensa Cembung", 0, centerY + 60);
        }
      }
    };
  }, [condition, showLens]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Simulasi Kelainan Mata</h2>

      <div className="w-[600px] h-[400px]">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          className="bg-white rounded shadow-lg"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center">
        <fieldset className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="condition"
              value="normal"
              checked={condition === "normal"}
              onChange={() => setCondition("normal")}
            />
            Normal
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="condition"
              value="miopi"
              checked={condition === "miopi"}
              onChange={() => setCondition("miopi")}
            />
            Miopi (Rabun Jauh)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="condition"
              value="hipermetropi"
              checked={condition === "hipermetropi"}
              onChange={() => setCondition("hipermetropi")}
            />
            Hipermetropi (Rabun Dekat)
          </label>
        </fieldset>

        <button
          className={`px-4 py-2 rounded ${showLens ? "bg-yellow-600" : "bg-yellow-400"}`}
          onClick={() => setShowLens(!showLens)}
        >
          {showLens ? "Hilangkan Lensa" : "Tambahkan Lensa"}
        </button>
      </div>

      <p className="text-sm text-gray-300 mt-4 max-w-xl text-center">
        Pilih salah satu kelainan mata untuk melihat bagaimana cahaya difokuskan. Gunakan slider untuk mengatur jarak benda. Aktifkan atau nonaktifkan lensa korektif untuk melihat perbedaannya.
      </p>
    </div>
  );
}
