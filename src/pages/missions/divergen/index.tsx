import DivergingLens from "@/components/ConcaveLenses";
import Material from "@/components/material/material";

export default function Home() {
  return (
    <Material title="Lensa Cekung (Divergen)" quizRoute="/missions/divergen/quiz">
      <div className="space-y-6">
        <p>
          <strong>Lensa cekung</strong> adalah lensa yang permukaannya melengkung ke dalam (bagian tengah lebih tipis daripada tepinya).
          Lensa ini bersifat <strong>menyebarkan cahaya</strong> (divergen) dan banyak digunakan pada kacamata rabun jauh, kamera, serta alat optik lainnya.
        </p>

        <div className="bg-slate-800 p-4 rounded">
          <h2 className="font-semibold text-lg mb-2 text-orange-300 underline">Sifat Bayangan Lensa Cekung:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Bayangan selalu terbentuk di depan lensa</li>
            <li>Bayangan bersifat <strong>maya</strong> (tidak bisa ditangkap layar)</li>
            <li>Bayangan selalu <strong>tegak</strong> (searah dengan benda)</li>
            <li>Bayangan selalu <strong>diperkecil</strong> (lebih kecil dari benda)</li>
          </ul>
        </div>

        <div className="bg-slate-800 p-4 rounded">
          <h2 className="font-semibold text-lg mb-2 text-orange-300 underline">Rumus Lensa Cekung:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Rumus utama:</strong><br />
              <code>1/f = 1/so - 1/si</code> atau lebih umum ditulis: <code>1/f = 1/so + 1/si</code><br />
              dengan tanda fokus negatif untuk lensa cekung.
              <ul className="ml-4 list-[circle]">
                <li><strong>f</strong> = jarak fokus (negatif)</li>
                <li><strong>so</strong> = jarak benda (selalu positif)</li>
                <li><strong>si</strong> = jarak bayangan (negatif karena di sisi benda)</li>
              </ul>
            </li>
            <li>
              <strong>Perbesaran bayangan (M):</strong><br />
              <code>M = si / so = hi / ho</code><br />
              Nilai M positif dan kurang dari 1 → artinya bayangan tegak dan diperkecil.
            </li>
          </ul>
        </div>

        <DivergingLens />
      </div>
    </Material>
  );
}
