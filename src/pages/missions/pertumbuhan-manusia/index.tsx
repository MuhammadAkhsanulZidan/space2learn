import Material from "@/components/material/material";
import { useState } from "react";

export default function Home() {
  const pages = [
    // Page 1: Pengantar Fase Pertumbuhan Manusia
    <div className="space-y-4 text-sm" key="page-1">
      <p className="font-semibold text-base">Fase Pertumbuhan Manusia</p>
      <p>
        Pertumbuhan manusia adalah proses alami bertambahnya ukuran tubuh seperti tinggi, berat, dan volume, yang terjadi secara bertahap seiring waktu. Pertumbuhan bersifat kuantitatif dan dapat diukur.
      </p>
      <p>
        Pertumbuhan dibagi ke dalam beberapa fase berdasarkan usia dan ciri-ciri perkembangan tubuh. Setiap fase menunjukkan perubahan penting dalam kehidupan seseorang.
      </p>
      <p>Fase-fase utama pertumbuhan manusia:</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li><b>Fase Bayi</b> (0-2 tahun)</li>
        <li><b>Fase Anak-anak</b> (2-12 tahun)</li>
        <li><b>Fase Remaja</b> (12-18 tahun)</li>
        <li><b>Fase Dewasa</b> (18-60 tahun)</li>
        <li><b>Fase Lansia</b> (60 tahun ke atas)</li>
      </ul>
    </div>,

    // Page 2: Fase Bayi
    <div className="space-y-4 text-sm" key="page-2">
      <p className="font-semibold text-base">Fase Bayi (0-2 tahun)</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Pertumbuhan fisik sangat cepat: berat badan bisa meningkat 2 kali lipat dalam beberapa bulan.</li>
        <li>Mulai mengembangkan kemampuan motorik: berguling, duduk, merangkak, berdiri, dan berjalan.</li>
        <li>Mulai mengenali suara, wajah orang tua, dan merespons dengan ekspresi atau tangisan.</li>
        <li>Mulai belajar berbicara kata-kata sederhana, seperti “mama” atau “papa”.</li>
        <li>Mengalami perkembangan sistem kekebalan tubuh secara bertahap.</li>
      </ul>
    </div>,

    // Page 3: Fase Anak-anak
    <div className="space-y-4 text-sm" key="page-3">
      <p className="font-semibold text-base">Fase Anak-anak (2-12 tahun)</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Pertumbuhan tinggi dan berat badan tetap berlangsung, meskipun tidak secepat saat bayi.</li>
        <li>Mulai mengembangkan kemampuan motorik halus seperti menulis, menggambar, dan memegang benda kecil.</li>
        <li>Perkembangan kognitif: belajar berbicara dengan lancar, membaca, dan berhitung.</li>
        <li>Memiliki rasa ingin tahu yang tinggi dan belajar banyak dari lingkungan.</li>
        <li>Mulai belajar bersosialisasi, mengenal aturan, dan beradaptasi dengan teman sebaya.</li>
      </ul>
    </div>,

    // Page 4: Fase Remaja
    <div className="space-y-4 text-sm" key="page-4">
      <p className="font-semibold text-base">Fase Remaja (12-18 tahun)</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Mengalami pubertas: perubahan fisik besar seperti pertumbuhan organ reproduksi, suara, dan bentuk tubuh.</li>
        <li>Pertumbuhan tinggi dan berat badan berlangsung sangat cepat (growth spurt).</li>
        <li>Perubahan emosi: mulai mencari jati diri dan mengalami gejolak emosi.</li>
        <li>Meningkatnya kemampuan berpikir abstrak, logis, dan kritis.</li>
        <li>Mulai mengembangkan kemandirian dan bertanggung jawab terhadap diri sendiri.</li>
      </ul>
    </div>,

    // Page 5: Fase Dewasa
    <div className="space-y-4 text-sm" key="page-5">
      <p className="font-semibold text-base">Fase Dewasa (18-60 tahun)</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Pertumbuhan fisik berhenti, tetapi kekuatan dan kesehatan tubuh berada di puncaknya.</li>
        <li>Fokus pada karier, pendidikan lanjutan, atau membentuk keluarga.</li>
        <li>Mulai menjalankan peran sosial sebagai orang tua atau anggota masyarakat aktif.</li>
        <li>Pada usia 40-an ke atas, tubuh mulai menunjukkan tanda-tanda penuaan awal seperti rambut memutih atau penurunan stamina.</li>
        <li>Kematangan emosional dan kemampuan pengambilan keputusan meningkat.</li>
      </ul>
    </div>,

    // Page 6: Fase Lansia
    <div className="space-y-4 text-sm" key="page-6">
      <p className="font-semibold text-base">Fase Lansia (60 tahun ke atas)</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Pertumbuhan fisik sudah berhenti dan tubuh mulai mengalami kemunduran fungsi.</li>
        <li>Kesehatan fisik menurun: tulang rapuh, otot melemah, dan penglihatan serta pendengaran berkurang.</li>
        <li>Daya ingat dan kemampuan berpikir bisa mulai menurun (tergantung individu).</li>
        <li>Sering membutuhkan bantuan atau perawatan dari keluarga atau tenaga medis.</li>
        <li>Perlu menjaga kesehatan mental dan fisik melalui aktivitas ringan dan pola hidup sehat.</li>
      </ul>
    </div>,
  ];

  const [page, setPage] = useState(1);

  return (
    <Material title="Fase Pertumbuhan Manusia" quizRoute="/missions/fase-pertumbuhan-manusia/quiz">
      {pages[page - 1]}

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded text-white text-sm ${
            page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Sebelumnya
        </button>

        <button
          onClick={() => setPage((prev) => Math.min(pages.length, prev + 1))}
          disabled={page === pages.length}
          className={`px-4 py-2 rounded text-white text-sm ${
            page === pages.length ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Berikutnya
        </button>
      </div>
    </Material>
  );
}
