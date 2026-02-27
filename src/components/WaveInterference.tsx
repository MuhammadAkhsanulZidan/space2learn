import { useState } from "react";

export default function WaveInterference() {
  const [amplitude, setAmplitude] = useState(30);
  const [frequency, setFrequency] = useState(1);
  const [phaseDiff, setPhaseDiff] = useState(0);

  const width = 600;
  const height = 200;
  const numPoints = 600;

  const wave1 = [];
  const wave2 = [];
  const result = [];

  for (let x = 0; x < numPoints; x++) {
    const angle = (x / numPoints) * 2 * Math.PI * frequency;
    const y1 = amplitude * Math.sin(angle);
    const y2 = amplitude * Math.sin(angle + (phaseDiff * Math.PI) / 180);
    wave1.push(y1);
    wave2.push(y2);
    result.push(y1 + y2);
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 text-white rounded-lg p-6 mt-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Simulasi Interferensi Gelombang</h2>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm mb-1">Amplitudo</label>
          <input
            type="range"
            min={10}
            max={60}
            value={amplitude}
            onChange={(e) => setAmplitude(parseInt(e.target.value))}
            className="w-full accent-green-500"
          />
          <div className="text-sm text-center">{amplitude}</div>
        </div>
        <div>
          <label className="block text-sm mb-1">Frekuensi</label>
          <input
            type="range"
            min={1}
            max={10}
            value={frequency}
            onChange={(e) => setFrequency(parseInt(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="text-sm text-center">{frequency}</div>
        </div>
        <div>
          <label className="block text-sm mb-1">Selisih Fase (°)</label>
          <input
            type="range"
            min={0}
            max={180}
            value={phaseDiff}
            onChange={(e) => setPhaseDiff(parseInt(e.target.value))}
            className="w-full accent-red-500"
          />
          <div className="text-sm text-center">{phaseDiff}°</div>
        </div>
      </div>

      {/* Canvas Drawing */}
      <svg width={width} height={height} className="bg-slate-800 rounded">
        {/* Baseline */}
        <line x1={0} y1={height / 2} x2={width} y2={height / 2} stroke="white" strokeWidth={1} />

        {/* Wave 1 */}
        <polyline
          fill="none"
          stroke="lime"
          strokeWidth="1"
          points={wave1.map((y, i) => `${i},${height / 2 - y}`).join(" ")}
        />
        {/* Wave 2 */}
        <polyline
          fill="none"
          stroke="cyan"
          strokeWidth="1"
          points={wave2.map((y, i) => `${i},${height / 2 - y}`).join(" ")}
        />
        {/* Resultant Wave */}
        <polyline
          fill="none"
          stroke="magenta"
          strokeWidth="2"
          points={result.map((y, i) => `${i},${height / 2 - y}`).join(" ")}
        />
      </svg>

      {/* Legend */}
      <div className="flex justify-center text-sm mt-2 gap-4">
        <div className="flex items-center gap-1"><span className="w-3 h-1 bg-lime-400 inline-block" /> Gelombang 1</div>
        <div className="flex items-center gap-1"><span className="w-3 h-1 bg-cyan-400 inline-block" /> Gelombang 2</div>
        <div className="flex items-center gap-1"><span className="w-3 h-1 bg-pink-400 inline-block" /> Hasil Interferensi</div>
      </div>
    </div>
  );
}
