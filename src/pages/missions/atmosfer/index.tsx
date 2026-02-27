"use client";

import Image from "next/image";
import { useState } from "react";

const diagrams = [
  {
    image: "/images/atmosphere1.png",
    parts: [
      {
        name: "Troposfer",
        function: "Lapisan terendah tempat cuaca terjadi dan kehidupan berlangsung.",
        style: { top: "200px", left: "320px" },
        color: "bg-blue-500",
      },
      {
        name: "Stratosfer",
        function: "Mengandung lapisan ozon yang melindungi dari sinar UV.",
        style: { top: "170px", left: "330px" },
        color: "bg-green-500",
      },
      {
        name: "Mesosfer",
        function: "Membakar meteor yang masuk ke atmosfer.",
        style: { top: "140px", left: "340px" },
        color: "bg-red-500",
      },
      {
        name: "Termosfer",
        function: "Memantulkan gelombang radio dan tempat aurora terjadi.",
        style: { top: "90px", left: "350px" },
        color: "bg-yellow-500",
      },
      {
        name: "Eksosfer",
        function: "Lapisan terluar atmosfer yang berbatasan dengan luar angkasa.",
        style: { top: "30px", left: "360px" },
        color: "bg-pink-500",
      },
    ],
  },
  {
    image: "/images/atmosphere2.png",
    parts: [
      {
        name: "Troposfer",
        function: "Lapisan terendah tempat cuaca terjadi dan kehidupan berlangsung.",
        style: { top: "120px", left: "320px" },
        color: "bg-blue-500",
      },
      {
        name: "Stratosfer",
        function: "Mengandung lapisan ozon yang melindungi dari sinar UV.",
        style: { top: "95px", left: "330px" },
        color: "bg-green-500",
      },
      {
        name: "Mesosfer",
        function: "Membakar meteor yang masuk ke atmosfer.",
        style: { top: "80px", left: "340px" },
        color: "bg-red-500",
      },
      {
        name: "Termosfer",
        function: "Memantulkan gelombang radio dan tempat aurora terjadi.",
        style: { top: "60px", left: "350px" },
        color: "bg-yellow-500",
      },
      {
        name: "Eksosfer",
        function: "Lapisan terluar atmosfer yang berbatasan dengan luar angkasa.",
        style: { top: "30px", left: "360px" },
        color: "bg-pink-500",
      },
    ],
  },
];

export default function AtmosphereDiagram() {
  const [hoveredPart, setHoveredPart] = useState<null | number>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentDiagram = diagrams[currentIndex];
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % diagrams.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + diagrams.length) % diagrams.length);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-slate-900">
      <h2 className="text-white text-2xl font-bold mb-6">Diagram Atmosfer</h2>

      <div className="relative w-[600px] h-[400px] bg-white rounded shadow-lg">
        <Image
          src={currentDiagram.image}
          alt={`Atmosphere Diagram ${currentIndex + 1}`}
          width={400}
          height={300}
          className="w-full h-full object-contain rounded"
        />

        {currentDiagram.parts.map((part, index) => (
          <div
            key={index}
            className={`absolute w-4 h-4 ${part.color} rounded-full cursor-pointer opacity-80 hover:opacity-100`}
            style={part.style}
            onMouseEnter={() => setHoveredPart(index)}
            onMouseLeave={() => setHoveredPart(null)}
          >
            {hoveredPart === index && (
              <div className="absolute top-[-80px] left-[-50px] w-44 p-2 bg-white text-black text-sm rounded shadow-lg z-50">
                <strong>{part.name}</strong>
                <p>{part.function}</p>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={goPrev}
          className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full hover:bg-gray-600"
        >
          ◀
        </button>
        <button
          onClick={goNext}
          className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full hover:bg-gray-600"
        >
          ▶
        </button>
      </div>

      <div className="mt-8 w-full max-w-xl">
        <h3 className="text-lg font-semibold mb-2 text-white text-center">
          Daftar Lapisan & Fungsinya
        </h3>
        <ul className="space-y-2 text-white text-sm">
          {currentDiagram.parts.map((part, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className={`w-4 h-4 mt-1 rounded-full ${part.color}`} />
              <div>
                <strong>{part.name}:</strong> {part.function}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
