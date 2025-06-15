import { useState } from "react";

export default function WaveRefraction() {
  const [angle, setAngle] = useState(30);

  const length = 150;

  // Refractive indices (e.g. air to glass)
  const n1 = 1.0; // air
  const n2 = 1.5; // glass

  const rad = (angle * Math.PI) / 180;
  const dx1 = Math.cos(rad) * length;
  const dy1 = Math.sin(rad) * length;

  // Snell's Law: n1 * sin(theta1) = n2 * sin(theta2)
  const sinTheta2 = (n1 / n2) * Math.sin(rad);
  const angle2 = sinTheta2 <= 1 ? (Math.asin(sinTheta2) * 180) / Math.PI : null;
  const rad2 = angle2 !== null ? (angle2 * Math.PI) / 180 : null;
  const dx2 = rad2 ? Math.cos(rad2) * length : 0;
  const dy2 = rad2 ? Math.sin(rad2) * length : 0;

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-900 text-white rounded-lg p-6 mt-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">
        Hukum Pembiasan Cahaya
      </h2>

      {/* Angle Slider */}
      <div className="flex flex-col items-center mb-4">
        <label htmlFor="angle" className="mb-2 text-sm text-gray-300">
          Sudut Datang (derajat)
        </label>
        <input
          id="angle"
          type="range"
          min={0}
          max={180}
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          className="w-2/3 accent-blue-500"
        />
        <span className="mt-1 text-sm">{angle}°</span>
      </div>

      {/* Simulation Box */}
      <div className="relative w-full h-[300px] bg-slate-800 border border-white rounded overflow-hidden flex flex-col">
        {/* Interface between two mediums */}
        <div className="absolute top-1/2 w-full h-1 bg-white z-10" />

        {/* Normal Line */}
        <div className="absolute w-1 h-full left-1/2 top-0 bg-orange-500" />
        <div className="absolute right-1/2 mr-2 bottom-1/4 text-xs">Garis Normal</div>

        {/* Incident Ray Dashed */}
        <div
          className="absolute left-1/2 top-1/2 border-t border-dashed border-pink-400"
          style={{
            width: length,
            transformOrigin: "left center",
            transform: `rotate(${-angle}deg)`,
          }}
        />
        {/* Incident Ball */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(${dx1}px, ${-dy1}px)`,
          }}
        >
          <div className="w-2 h-2 bg-pink-400 rounded-full" />
        </div>

        {/* Refracted Ray Dashed */}
        {angle2 !== null && (
          <div
            className="absolute left-1/2 top-1/2 border-t border-dashed border-cyan-400"
            style={{
              width: length,
              transformOrigin: "left center",
              transform: `rotate(${angle2}deg)`,
            }}
          />
        )}

        {/* Refracted Ball */}
        {angle2 !== null && (
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(${dx2}px, ${dy2}px)`,
            }}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          </div>
        )}

        {/* Medium Labels */}
        <div className="absolute top-2 left-2 text-xs">Medium 1 (n = {n1})</div>
        <div className="absolute bottom-2 left-2 text-xs">Medium 2 (n = {n2})</div>

        {/* Explanation */}
        <div className="absolute bottom-2 right-2 w-1/3 text-sm">
          Sinar datang dibiaskan saat memasuki medium berbeda.
        </div>
      </div>
    </div>
  );
}
