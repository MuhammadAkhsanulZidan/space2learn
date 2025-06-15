import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const [start, setStart] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    setStart(true);
    // wait for animation to finish, then navigate
    setTimeout(() => {
      router.push("/menu");
    }, 1000); // match animation duration
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center overflow-hidden relative">
      
      <div className="w-1/2 gap-6 flex flex-col justify-center items-center">
        {!start && (<div className="text-center gap-2 flex flex-col">
          <p className="text-xl font-bold">Angkasa Dalam bahaya!</p>
          <p className="text-center leading-relaxed">Segera Kumpulkan Ilmu Pengetahuan Alam untuk menyelamatkannya!</p>
        </div>)}
        {/* Spaceship */}
        <img
          src="/Sprites/Ships/spaceShips_001.png"
          alt="Spaceship"
          className={`w-1/3 transition-transform duration-2000 ${start ? "translate-y-[-950%] scale-250" : "translate-y-0"
            }`}
        />

        {/* Start Button */}
        {!start && (
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-red-500 hover:bg-red-700 text-white text-lg rounded-lg shadow-md transition"
          >
            Mulai Petualangan
          </button>
        )}
      </div>
    </div>
  );
}
