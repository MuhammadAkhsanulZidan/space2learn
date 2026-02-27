"use client";

import Material from "@/components/material/material";

export default function Home() {
  return (
    <Material title="Kuat Lensa" quizRoute="/missions/kuat-lensa/quiz">
      <div className="flex flex-col items-end justify-between h-full text-sm">
        <div className="flex flex-col items-start w-full">
          <p>Untuk menghitung kuat lensa, kita dapat menggunakan rumus:</p>
          <strong>P = 100 cm/f</strong>
          <p>Dimana:</p>
          <br />
          <p>P : Kuat Lensa (Dioptri)</p>
          <p>f : Titik Fokus (cm)</p>

          {/* Contoh Soal */}
          <div className="mt-6 w-full">
            <h2 className="text-lg font-semibold mb-2">Contoh Soal:</h2>
            <p>
              Sebuah lensa memiliki titik fokus sebesar 25 cm. Berapakah kuat lensa tersebut dalam satuan dioptri?
            </p>
            <details className="mt-3 bg-gray-800 p-3 rounded">
              <summary className="cursor-pointer text-orange-300">Lihat Pembahasan</summary>
              <div className="mt-2">
                <p>Gunakan rumus: <strong>P = 100 / f</strong></p>
                <p>Dengan f = 25 cm:</p>
                <p>P = 100 / 25 = <strong>4 Dioptri</strong></p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </Material>
  );
}