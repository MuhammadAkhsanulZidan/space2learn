import ConcaveMirror from "@/components/ConcaveMirror";
import Material from "@/components/material/material";

export default function Home() {
  return (
    <Material title="Cermin Cekung" quizRoute="/missions/cekung/quiz">
      <div className="space-y-6">
        <p>
          <strong>Cermin cekung</strong> adalah cermin yang permukaan reflektifnya melengkung ke dalam seperti bagian dalam mangkuk.
          Cermin ini bersifat mengumpulkan cahaya (konvergen), dan banyak digunakan pada reflektor lampu, teleskop, dan alat bantu penglihatan.
        </p>

        <div className="bg-slate-800 p-4 rounded">
          <h2 className="font-semibold text-lg mb-2 text-orange-300 underline">Sifat Bayangan Cermin Cekung:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Bayangan di depan cermin : Nyata</li>
            <li>Bayangan di belakang cermin : Maya</li>
            <li>Bayangan searah dengan benda : Tegak</li>
            <li>Bayangan berlawanan arah dengan benda : Terbalik</li>
            <li>Bayangan lebih besar dari benda : Diperbesar</li>
            <li>Bayangan lebih kecil dari benda : Diperkecil</li>
          </ul>
        </div>

        <div className="bg-slate-800 p-4 rounded">
          <h2 className="font-semibold text-lg mb-2 text-orange-300 underline">Rumus Cermin Cekung:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Rumus utama:</strong> <br />
              <code>1/f = 1/so + 1/si</code> <br />
              di mana:
              <ul className="ml-4 list-[circle]">
                <li><strong>f</strong> = jarak fokus (positif untuk cermin cekung)</li>
                <li><strong>so</strong> = jarak benda</li>
                <li><strong>si</strong> = jarak bayangan</li>
              </ul>
            </li>
            <li>
              <strong>Perbesaran bayangan (M):</strong> <br />
              <code>M = si / so = hi / ho</code>
              <br />
              Jika M negatif, bayangan terbalik. Jika M positif, bayangan tegak.
            </li>
          </ul>
        </div>

        <ConcaveMirror />
      </div>
    </Material>
  );
}
