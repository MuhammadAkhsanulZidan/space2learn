import FlatMirror180 from "@/components/FlatMirror180";
import Material from "@/components/material/material";

export default function Home() {
  return (
    <Material title="2 Cermin Datar membentuk sudut 180°" quizRoute="/missions/sudut-180/quiz">
      <div className="space-y-2 text-sm">
        <p>
          Ketika dua cermin datar disusun berhadapan (sudut 180°), maka sifat bayangan yang terbentuk adalah:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Bayangan yang terbentuk jumlahnya sangat banyak dan tampak saling menjauh tanpa batas (tidak hingga).</li>
          <li>Sifat bayangan: maya, tegak, dan memiliki ukuran yang sama seperti benda asli.</li>
          <li>Jarak bayangan ke cermin tergantung posisi benda terhadap masing-masing cermin.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Contoh Kasus Visual:</h2>
        <FlatMirror180 />
      </div>

      <div className="mt-6 w-full">
        <h2 className="text-lg font-semibold mb-2">Contoh Soal:</h2>
        <p>
          Dua cermin datar disusun saling berhadapan (sudut 180°). Sebuah benda diletakkan di antara kedua cermin.
          Berapa banyak bayangan yang terbentuk?
        </p>
        <details className="mt-3 bg-gray-900 p-3 rounded">
          <summary className="cursor-pointer text-orange-300">Lihat Pembahasan</summary>
          <div className="mt-2">
            <p>
              Karena sudut antara kedua cermin adalah 180°, maka cahaya akan dipantulkan bolak-balik tanpa batas.
              Ini menyebabkan bayangan yang terbentuk sangat banyak (secara teoritis tak hingga), tersusun berurutan
              ke arah dalam cermin.
            </p>
          </div>
        </details>
      </div>
    </Material>
  );
}
