import { useEffect, useRef, useState } from "react";

export default function WaveResonance() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sourceFreq, setSourceFreq] = useState(440);
  const [targetFreq, setTargetFreq] = useState(440);
  const [time, setTime] = useState(0);
  const [isVibrating, setIsVibrating] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const t = time / 60;
    const sourceX = 150;
    const targetX = 450;
    const forkY = height / 2;

    function drawFork(x: number, amp: number, label: string) {
      if(!ctx) return;
      ctx.strokeStyle = "black";
      ctx.lineWidth = 5;

      // Base
      ctx.beginPath();
      ctx.moveTo(x - 10, forkY + 30);
      ctx.lineTo(x + 10, forkY + 30);
      ctx.stroke();

      // Stem
      ctx.beginPath();
      ctx.moveTo(x, forkY + 30);
      ctx.lineTo(x, forkY);
      ctx.stroke();

      // Prongs
      const spread = 30 + amp;
      ctx.beginPath();
      ctx.moveTo(x, forkY);
      ctx.lineTo(x - spread, forkY - 60);
      ctx.moveTo(x, forkY);
      ctx.lineTo(x + spread, forkY - 60);
      ctx.stroke();

      // Label
      ctx.fillStyle = "black";
      ctx.font = "12px Arial";
      ctx.fillText(label, x - 30, forkY + 50);
    }

    const sourceAmp = isVibrating ? Math.sin(t * sourceFreq * 0.1) * 5 : 0;
    const isResonating = Math.abs(sourceFreq - targetFreq) < 2;
    const resonanceAmp = isVibrating && isResonating ? Math.sin(t * sourceFreq * 0.1) * 20 : 0;

    drawFork(sourceX, sourceAmp, `Fork A: ${sourceFreq} Hz`);
    drawFork(targetX, resonanceAmp, `Fork B: ${targetFreq} Hz`);

    // Airwaves
    if (isVibrating) {
      ctx.strokeStyle = "rgba(0,0,255,0.2)";
      for (let i = 0; i < 5; i++) {
        const r = t * 10 + i * 30;
        ctx.beginPath();
        ctx.arc(sourceX, forkY - 20, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }, [time, sourceFreq, targetFreq, isVibrating]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVibrating) {
        setTime((t) => t + 1);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isVibrating]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded shadow-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Simulasi Resonansi (Tuning Fork)</h2>

      <canvas ref={canvasRef} width={600} height={250} className="bg-white rounded mb-4" />

      <div className="flex justify-center items-center gap-8 mb-4">
        <div>
          <label className="block text-sm">Frekuensi Sumber (Hz)</label>
          <input
            type="range"
            min={400}
            max={480}
            value={sourceFreq}
            onChange={(e) => setSourceFreq(Number(e.target.value))}
            className="w-48"
          />
          <div className="text-center">{sourceFreq} Hz</div>
        </div>
        <div>
          <label className="block text-sm">Frekuensi Target (Hz)</label>
          <input
            type="range"
            min={400}
            max={480}
            value={targetFreq}
            onChange={(e) => setTargetFreq(Number(e.target.value))}
            className="w-48"
          />
          <div className="text-center">{targetFreq} Hz</div>
        </div>
      </div>

      <div className="text-center mb-4">
        <button
          onClick={() => setIsVibrating(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
        >
          Pukul Fork A
        </button>
        <button
          onClick={() => {
            setIsVibrating(false);
            setTime(0);
          }}
          className="ml-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded"
        >
          Hentikan
        </button>
      </div>

      <p className="text-sm text-gray-300 text-center">
        Fork A bergetar saat dipukul. Fork B hanya ikut bergetar besar (resonansi) jika frekuensinya cocok.
      </p>
    </div>
  );
}
