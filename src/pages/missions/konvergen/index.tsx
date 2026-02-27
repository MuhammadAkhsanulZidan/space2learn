import Material from "@/components/material/material";

export default function Home() {
  return (
    <Material title="Lensa Cembung (Konvergen)" quizRoute="/missions/konvergen/quiz">
      <div className="space-y-6">
        <p>
          <strong>Lensa cembung</strong> atau <strong>lensa konvergen</strong> adalah lensa yang bagian tengahnya lebih tebal daripada bagian pinggirnya. Lensa ini berfungsi untuk mengumpulkan cahaya (konvergen) dan digunakan dalam alat-alat optik seperti kaca pembesar, mikroskop, dan kamera.
        </p>

        <div className="bg-slate-800 p-4 rounded">
          <h2 className="font-semibold text-lg mb-2 text-orange-300 underline">Sifat Bayangan Lensa Cembung:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Bayangan bisa nyata atau maya tergantung posisi benda</li>
            <li>Bayangan nyata berada di sisi seberang benda, bisa diperbesar atau diperkecil</li>
            <li>Bayangan maya terjadi jika benda berada di antara lensa dan fokus, bersifat tegak dan diperbesar</li>
            <li>Bayangan nyata selalu terbalik, sedangkan bayangan maya tegak</li>
          </ul>
        </div>

        <div className="bg-slate-800 p-4 rounded">
          <h2 className="font-semibold text-lg mb-2 text-orange-300 underline">Rumus Lensa Cembung:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Rumus utama:</strong><br />
              <code>1/f = 1/so + 1/si</code><br />
              di mana:
              <ul className="ml-4 list-[circle]">
                <li><strong>f</strong> = jarak fokus (positif untuk lensa cembung)</li>
                <li><strong>so</strong> = jarak benda dari lensa (selalu positif)</li>
                <li><strong>si</strong> = jarak bayangan (positif jika nyata, negatif jika maya)</li>
              </ul>
            </li>
            <li>
              <strong>Perbesaran bayangan (M):</strong><br />
              <code>M = si / so = hi / ho</code><br />
              Jika <code>M</code> negatif, bayangan terbalik; jika positif, bayangan tegak.
            </li>
          </ul>
        </div>

      </div>
    </Material>
  );
}
