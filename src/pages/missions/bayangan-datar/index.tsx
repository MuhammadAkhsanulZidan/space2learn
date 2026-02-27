import FlatMirror from "@/components/FlatMirror";
import Material from "@/components/material/material";

export default function Home() {
  return (
    <Material title="Bayangan Pada 2 Cermin Datar" quizRoute="/missions/bayangan-datar/quiz">
      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          Ketika dua cermin datar disusun membentuk sudut tertentu, bayangan suatu objek yang diletakkan di antara keduanya akan terpantul berkali-kali dan membentuk beberapa bayangan.
        </p>

        <div className="bg-teal-700 text-white p-3 rounded w-fit">
          <p className="font-semibold underline">Rumus Jumlah Bayangan:</p>
          <p className="mt-1">Jika sudut antara dua cermin adalah <strong>θ</strong>, maka jumlah bayangan <strong>n</strong> dapat dihitung dengan:</p>
          <p className="mt-1 text-center font-mono">n = (360° / θ) - 1</p>
          <p className="mt-1">Jika hasilnya genap → jumlah bayangan tepat <br />Jika hasilnya ganjil → bisa <strong>dua kemungkinan</strong>:</p>
          <ul className="list-disc ml-6">
            <li><strong>Objek tepat di tengah:</strong> jumlah bayangan = n</li>
            <li><strong>Objek tidak di tengah:</strong> jumlah bayangan = n + 1</li>
          </ul>
        </div>

        {/* Contoh Soal */}
        <div className="mt-6 w-full">
          <h2 className="text-lg font-semibold mb-2">Contoh Soal:</h2>
          <p>
            Dua cermin datar disusun membentuk sudut 60°. Berapa jumlah bayangan yang terbentuk jika sebuah benda diletakkan di tengah keduanya?
          </p>
          <details className="mt-3 bg-gray-800 p-3 rounded">
            <summary className="cursor-pointer text-orange-300">Lihat Pembahasan</summary>
            <div className="mt-2">
              <p>Gunakan rumus: <strong>n = (360° / θ) - 1</strong></p>
              <p>Dengan θ = 60°:</p>
              <p>n = 360° / 60° - 1 = 6 - 1 = <strong>5 bayangan</strong></p>
              <p>Karena hasilnya genap dan berada di tengah, maka jumlah bayangan pasti adalah <strong>5</strong>.</p>
            </div>
          </details>
          <p className="mt-2">
            Dua cermin datar disusun membentuk sudut 60°. Berapa jumlah bayangan yang terbentuk jika sebuah benda diletakkan di TIDAK DI TENGAH keduanya?
          </p>
          <details className="mt-3 bg-gray-800 p-3 rounded">
            <summary className="cursor-pointer text-orange-300">Lihat Pembahasan</summary>
            <div className="mt-2">
              <p>Gunakan rumus: <strong>n = (360° / θ) - 1</strong></p>
              <p>Dengan θ = 60°:</p>
              <p>n = 360° / 60° - 1 = 6 - 1 = <strong>5 bayangan</strong></p>
              <p>Karena hasilnya genap dan berada tidak berada di tengah, maka jumlah bayangan adalah <strong>5+1=6 Bayangan</strong>.</p>
            </div>
          </details>
        </div>
        <strong>Biasanya yang muncul di soal itu benda berada di tengah, jadi cukup hafalkan rumus yang ini saja</strong>
        <p className="mt-1 text-center font-mono">n = (360° / θ) - 1</p>

        <div className="mt-6">
          <FlatMirror />
        </div>
      </div>
    </Material>
  );
}
