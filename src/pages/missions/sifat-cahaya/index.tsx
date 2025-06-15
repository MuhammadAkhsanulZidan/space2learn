import WaveRefraction from "@/components/WaveRefraction";
import WaveInterference from "@/components/WaveInterference";
import WaveReflection from "@/components/WaveReflection";
import WaveDiffraction from "@/components/WaveDiffraction";
import WaveDispersion from "@/components/WaveDispersion";
// import WavePolarization from "@/components/WavePolarization";
import WaveAbsorption from "@/components/WaveAbsorption";
import WaveResonance from "@/components/WaveResonance";
import Material from "@/components/material/material";

export default function Home() {
  return (
    <Material title="Sifat Gelombang dan Cahaya" quizRoute="/missions/sifat-cahaya/quiz">
      <div className="space-y-4 text-sm">
        <p className="text-sm">Beberapa sifat umum dari gelombang dan apakah cahaya memilikinya:</p>

        <div className="overflow-auto">
          <table className="table-auto w-full border border-white text-white text-left text-sm">
            <thead>
              <tr className="bg-gray-700">
                <th className="border px-4 py-2">Sifat Gelombang</th>
                <th className="border px-4 py-2">Penjelasan</th>
                <th className="border px-4 py-2">Dimiliki Cahaya?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Refleksi (Pemantulan)</td>
                <td className="border px-4 py-2">Gelombang dipantulkan saat mengenai permukaan</td>
                <td className="border px-4 py-2">✅ Ya</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Refraksi (Pembiasan)</td>
                <td className="border px-4 py-2">Perubahan arah saat melalui medium berbeda</td>
                <td className="border px-4 py-2">✅ Ya</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Interferensi</td>
                <td className="border px-4 py-2">Gabungan dua gelombang yang saling menguatkan atau melemahkan</td>
                <td className="border px-4 py-2">✅ Ya</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Difraksi</td>
                <td className="border px-4 py-2">Pembelokan arah saat melewati celah sempit</td>
                <td className="border px-4 py-2">✅ Ya</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Dispersi</td>
                <td className="border px-4 py-2">Pemisahan berdasarkan panjang gelombang</td>
                <td className="border px-4 py-2">✅ Ya</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Absorpsi</td>
                <td className="border px-4 py-2">Energi gelombang diserap oleh medium</td>
                <td className="border px-4 py-2">✅ Ya</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Resonansi</td>
                <td className="border px-4 py-2">Penguatan getaran saat frekuensi cocok</td>
                <td className="border px-4 py-2">❌ Tidak secara umum</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Visualisasi masing-masing sifat */}
      <WaveReflection />
      <WaveRefraction />
      <WaveInterference />
      <WaveDiffraction />
      <WaveDispersion />
      {/* <WavePolarization /> */}
      <WaveAbsorption />
      <WaveResonance />
    </Material>
  );
}
