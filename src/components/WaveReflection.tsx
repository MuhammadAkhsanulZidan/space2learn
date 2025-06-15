import { useState } from "react";

export default function WaveReflection() {
  const [angle, setAngle] = useState(45);
  const [show, setShow] = useState(false);

  const length = 150;
  const rad = (angle * Math.PI) / 180;
  const dx = Math.cos(rad) * length;
  const dy = Math.sin(rad) * length;

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-900 text-white rounded-lg p-6 mt-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">
        Hukum Pemantulan Cahaya
      </h2>

      {/* Angle Slider */}
      <div className="flex flex-col items-center mb-4">
        <label htmlFor="angle" className="mb-2 text-sm text-gray-300">
          Sudut datang = Sudut Pantul (derajat)
        </label>
        <input
          id="angle"
          type="range"
          min={0}
          max={90}
          value={angle}
          onChange={(e) => {
            setAngle(parseInt(e.target.value));
            setShow(false);
          }}
          className="w-2/3 accent-blue-500"
        />
        <span className="mt-1 text-sm">{angle}°</span>
      </div>

      {/* Mirror Box */}
      <div className="relative w-full h-[300px] bg-slate-800 border border-white rounded overflow-hidden flex">
        {/* Mirror Line */}
        <div className="absolute items-center left-0 justify-center top-1/2 h-2 w-full bg-white z-10" />

        {/* Dashed line - Incident */}
        <div
          className="absolute left-1/2 top-1/2 border-t border-dashed border-pink-400"
          style={{
            width: length,
            transformOrigin: "left center",
            transform: `rotate(${-angle}deg)`,
          }}
        ></div>
        <div className="absolute left-1/2 ml-2 bottom-1/3" style={{
          transform: `translateY(${-dy}px)`,
        }}>{angle}°</div>
        <div className="absolute right-1/2 mr-2 bottom-1/3" style={{
          transform: `translateY(${-dy}px)`,
        }}>{angle}°</div>
        {/* Incident Ray (Ball) */}
        {(
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(${dx}px, ${-dy}px)`,
            }}
          >
            <div className="w-2 h-2 bg-pink-400 rounded-full" />
          </div>
        )}

        <div className="absolute w-1 h-full left-1/2 top-0 bg-orange-500"/>
        <div className="absolute right-1/2 mr-2 bottom-1/4 text-xs">Garis Normal</div>
        <div className="absolute bottom-2 right-2 w-1/3 text-sm">Sinar datang, Sinar pantul, dan garis normal terletak pada satu bidang datar.</div>

        {/* Dashed line - Reflected */}
        {(
          <div
            className="rotate-180 absolute left-1/2 top-1/2 border-t border-dashed border-cyan-400"
            style={{
              width: length,
              transformOrigin: "left center",
              transform: `rotate(${angle}deg)`,
            }}
          />
        )}
        
        {/* Reflected Ray (Ball) */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(${-dx}px, ${-dy}px)`,
          }}
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
        </div>

        
      </div>
    </div>
  );
}
