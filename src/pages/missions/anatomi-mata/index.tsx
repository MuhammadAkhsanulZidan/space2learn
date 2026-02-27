import Image from "next/image";
import { useState } from "react";
import EyeProblem from "@/components/EyeProblem"; // adjust if needed
import Material from "@/components/material/material";

const diagrams = [
  {
    image: "/images/eye1.png",
    parts: [
      {
        name: "Kornea",
        function: "Melindungi mata dan membantu memfokuskan cahaya.",
        style: { top: "100px", left: "90px" },
        color: "bg-blue-500",
      },
      {
        name: "Pupil",
        function: "Mengatur jumlah cahaya yang masuk ke mata.",
        style: { top: "125px", left: "125px" },
        color: "bg-pink-500",
      },
      {
        name: "Iris",
        function: "Memberi warna pada mata dan mengatur ukuran pupil.",
        style: { top: "155px", left: "115px" },
        color: "bg-yellow-500",
      },
      {
        name: "Lensa",
        function: "Memfokuskan cahaya ke retina.",
        style: { top: "115px", left: "145px" },
        color: "bg-red-500",
      },
      {
        name: "Retina",
        function: "Menerima cahaya dan mengubahnya menjadi sinyal listrik.",
        style: { top: "140px", left: "340px" },
        color: "bg-purple-500",
      },
      {
        name: "Saraf Optik",
        function: "Membawa sinyal visual ke otak.",
        style: { top: "90px", left: "290px" },
        color: "bg-green-500",
      },
    ],
  },
  {
    image: "/images/eye2.png",
    parts: [
      {
        name: "Pupil",
        function: "Mengatur jumlah cahaya yang masuk ke mata.",
        style: { top: "150px", right: "200px" },
        color: "bg-pink-500",
      },
      {
        name: "Iris",
        function: "Memberi warna pada mata dan mengatur ukuran pupil.",
        style: { top: "175px", right: "210px" },
        color: "bg-red-500",
      },
    ],
  },
  {
    image: "/images/eye3.png",
    parts: [
      {
        name: "Sel Batang",
        function: "Mendeteksi cahaya redup dan membantu melihat dalam gelap, tetapi tidak membedakan warna.",
        style: { top: "150px", right: "50px" },
        color: "bg-teal-500",
      },
      {
        name: "Sel Kerucut",
        function: "Mendeteksi warna dan detail visual pada cahaya terang.",
        style: { top: "115px", right: "55px" },
        color: "bg-blue-200",
      },
    ],
  },
];

export default function EyeDiagram() {
  const [hoveredPart, setHoveredPart] = useState<null | number>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menu, setMenu] = useState<"eye" | "eye-problem">("eye");

  const currentDiagram = diagrams[currentIndex];
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % diagrams.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + diagrams.length) % diagrams.length);

  return (
    <Material title="Mata" quizRoute="/missions/anatomi-mata/quiz">
      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded text-white font-semibold ${
            menu === "eye" ? "bg-teal-600" : "bg-gray-400 hover:bg-teal-500"
          }`}
          onClick={() => setMenu("eye")}
        >
          Diagram Mata
        </button>
        <button
          className={`px-4 py-2 rounded text-white font-semibold ${
            menu === "eye-problem" ? "bg-teal-600" : "bg-gray-400 hover:bg-teal-500"
          }`}
          onClick={() => setMenu("eye-problem")}
        >
          Penyakit Mata
        </button>
      </div>

      {menu === "eye" && (
        <>
          <div className="relative w-[400px] h-[300px] bg-white rounded shadow-lg">
            <Image
              src={currentDiagram.image}
              alt={`Eye Diagram ${currentIndex + 1}`}
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
              Daftar Bagian Mata & Fungsinya
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
        </>
      )}

      {menu === "eye-problem" && (
        <div className="mt-6 w-full max-w-xl">
          <EyeProblem />
        </div>
      )}
    </Material>
  );
}
