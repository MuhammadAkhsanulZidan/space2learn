import ConvexMirror from "@/components/ConvexMirror";
import Material from "@/components/material/material";

export default function Home() {
  return (
    <Material title="Cermin Cembung" quizRoute="/missions/cembung/quiz">
      <div className="space-y-6">
        <p>
          <strong>Cermin cembung</strong> adalah cermin yang permukaan reflektifnya melengkung ke luar seperti bagian luar bola.
          Cermin ini bersifat menyebarkan cahaya (divergen), dan sering digunakan pada kaca spion kendaraan dan cermin pengawas karena dapat memperluas bidang pandang.
        </p>

        <div className="bg-slate-800 p-4 rounded">
          <h2 className="font-semibold text-lg mb-2 text-orange-300 underline">Sifat Bayangan Cermin Cembung:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Bayangan selalu di belakang cermin</li>
            <li>Bayangan bersifat maya (tidak bisa ditangkap layar)</li>
            <li>Bayangan selalu tegak (searah dengan benda)</li>
            <li>Bayangan selalu lebih kecil dari benda (diperkecil)</li>
          </ul>
        </div>

        <div className="bg-slate-800 p-4 rounded">
          <h2 className="font-semibold text-lg mb-2 text-orange-300 underline">Rumus Cermin Cembung:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Rumus utama:</strong> <br />
              <code>1/f = 1/so + 1/si</code> <br />
              dengan:
              <ul className="ml-4 list-[circle]">
                <li><strong>f</strong> = jarak fokus (negatif untuk cermin cembung)</li>
                <li><strong>so</strong> = jarak benda (selalu positif)</li>
                <li><strong>si</strong> = jarak bayangan (negatif karena di belakang cermin)</li>
              </ul>
            </li>
            <li>
              <strong>Perbesaran bayangan (M):</strong> <br />
              <code>M = si / so = hi / ho</code><br />
              Nilai <code>M</code> selalu positif dan kurang dari 1, menunjukkan bayangan tegak dan diperkecil.
            </li>
          </ul>
        </div>

        <ConvexMirror />
      </div>
    </Material>
  );
}
