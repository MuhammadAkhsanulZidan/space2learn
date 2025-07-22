import Material from "@/components/material/material";
import { useState } from "react";

export default function Home() {
  const pages = [
    // Page 1: Pengertian Pertumbuhan
    <div className="space-y-4 text-sm" key="page-1">
      <p className="font-semibold text-base">Apa itu Pertumbuhan?</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Pertumbuhan adalah bertambahnya ukuran makhluk hidup, seperti panjang, lebar, volume, dan berat (massa).</li>
        <li>Contohnya: tinggi badan bertambah, batang pohon makin tebal.</li>
        <li>Bersifat kuantitatif, artinya bisa diukur dengan angka atau alat ukur.</li>
        <li>Bersifat irreversibel, artinya tidak bisa kembali ke ukuran semula.</li>
        <li>
          Pertumbuhan tanaman bisa diukur dengan alat <span className="italic">auksanometer</span>.{" "}
          <a
            href="https://www.youtube.com/watch?v=6tK2Ia2o9bI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 underline"
          >
            Lihat video auksanometer
          </a>
        </li>
      </ul>
    </div>,

    // Page 2: Contoh Pertumbuhan
    <div className="space-y-4 text-sm" key="page-2">
      <p className="font-semibold text-base">Contoh Pertumbuhan</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Tinggi badan anak bertambah dari bayi hingga remaja.</li>
        <li>Batang tanaman jagung tumbuh semakin panjang.</li>
        <li>Anak mengalami kenaikan berat badan saat bertumbuh.</li>
        <li>Akar tanaman bertambah panjang dan bercabang.</li>
        <li>Batang pohon membesar seiring bertambah usia.</li>
      </ul>
    </div>,

    // Page 3: Pengertian Perkembangan
    <div className="space-y-4 text-sm" key="page-3">
      <p className="font-semibold text-base">Apa itu Perkembangan?</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Perkembangan adalah perubahan menuju kedewasaan atau kematangan fungsi tubuh dan organ.</li>
        <li>Bersifat kualitatif, tidak bisa diukur dengan angka tapi bisa dirasakan.</li>
        <li>Tidak tampak secara langsung, tapi menunjukkan peningkatan kemampuan dan fungsi.</li>
      </ul>
    </div>,

    // Page 4: Contoh Perkembangan
    <div className="space-y-4 text-sm" key="page-4">
      <p className="font-semibold text-base">Contoh Perkembangan</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Anak mulai bisa berjalan dan berbicara.</li>
        <li>Remaja mulai bisa berpikir logis dan mengambil keputusan.</li>
        <li>Anak makin pandai bekerja sama dan bersosialisasi.</li>
        <li>Perubahan sikap dari kekanak-kanakan menjadi lebih dewasa.</li>
      </ul>
    </div>,

    // Page 5: Fertilisasi (Pembuahan)
    <div className="space-y-4 text-sm" key="page-5">
      <p className="font-semibold text-base">Apa itu Fertilisasi?</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Fertilisasi adalah proses pertemuan sel sperma (laki-laki) dengan sel telur atau ovum (perempuan).</li>
        <li>Jika berhasil, akan terbentuk sel baru yang disebut zigot.</li>
        <li>Fertilisasi terjadi di tuba falopi (oviduct) dalam tubuh perempuan.</li>
      </ul>
    </div>,

    // Page 6: Istilah dalam Sistem Reproduksi Perempuan
    <div className="space-y-4 text-sm" key="page-6">
      <p className="font-semibold text-base">Istilah Penting dalam Reproduksi Wanita</p>
      <ul className="list-disc list-inside space-y-1">
        <li><b>Tuba falopi (oviduct):</b> tempat bertemunya sperma dan ovum.</li>
        <li><b>Uterus (rahim):</b> tempat janin berkembang.</li>
        <li><b>Ovum:</b> sel telur yang sudah matang.</li>
        <li><b>Ovarium:</b> tempat produksi ovum.</li>
        <li><b>Ovulasi:</b> proses keluarnya ovum dari ovarium.</li>
        <li><b>Fimbriae:</b> alat penangkap ovum menuju tuba falopi.</li>
        <li><b>Infundibulum:</b> bagian awal dari tuba falopi.</li>
        <li><b>Implantasi:</b> penempelan embrio di dinding rahim.</li>
        <li><b>Oosit:</b> sel telur yang belum matang.</li>
        <li><b>Blastosit:</b> tahap awal embrio sebelum menempel di rahim.</li>
      </ul>
    </div>,

    // Page 7: Tahapan Awal Kehidupan
    <div className="space-y-4 text-sm" key="page-7">
      <p className="font-semibold text-base">Tahapan Awal Kehidupan</p>
      <p>Proses setelah pembuahan:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Ovum bertemu sperma → Zigot terbentuk.</li>
        <li>Zigot → Morula → Blastosit → Embrio.</li>
      </ul>
    </div>,

    // Page 8: Siklus Hidup Manusia
    <div className="space-y-4 text-sm" key="page-8">
      <p className="font-semibold text-base">Siklus Hidup Manusia</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Fase embrionik (dalam kandungan).</li>
        <li>Fase pascaembrionik (setelah lahir).</li>
        <li>Masa kanak-kanak (balita).</li>
        <li>Masa remaja.</li>
        <li>Masa dewasa.</li>
        <li>Masa tua (manula).</li>
      </ul>
    </div>,

    // Page 9: Hormon yang Berperan
    <div className="space-y-4 text-sm" key="page-9">
      <p className="font-semibold text-base">Hormon dalam Sistem Reproduksi</p>
      <ul className="list-disc list-inside space-y-1">
        <li><b>Testosteron:</b> hormon pria, mengatur pembentukan sperma dan ciri khas laki-laki.</li>
        <li><b>Estrogen:</b> hormon wanita, mengatur menstruasi dan perubahan fisik.</li>
        <li><b>Progesteron:</b> membantu menjaga kehamilan.</li>
      </ul>
    </div>,

    // Page 10: Perkembangan Embrio
    <div className="space-y-4 text-sm" key="page-10">
      <p className="font-semibold text-base">Perkembangan Embrio</p>
      <ul className="list-disc list-inside space-y-1">
        <li><b>Pembuahan:</b> terbentuknya zigot.</li>
        <li><b>Pembelahan:</b> zigot membelah menjadi morula, lalu blastula, dan gastrula.</li>
        <li><b>Gastrulasi:</b> terbentuk tiga lapisan:
          <ul className="list-disc list-inside ml-4">
            <li><b>Ektoderm:</b> kulit, rambut, sistem saraf.</li>
            <li><b>Mesoderm:</b> otot, tulang, darah.</li>
            <li><b>Endoderm:</b> sistem pencernaan dan organ dalam.</li>
          </ul>
        </li>
        <li><b>Organogenesis:</b> pembentukan organ-organ tubuh.</li>
      </ul>
    </div>,

    // Page 11: Pubertas
    <div className="space-y-4 text-sm" key="page-11">
      <p className="font-semibold text-base">Apa itu Pubertas?</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Pubertas adalah masa perubahan fisik yang menunjukkan seseorang mulai bisa berkembang biak.</li>
        <li>Dipengaruhi oleh hormon testosteron (pria) dan estrogen (wanita).</li>
        <li>Terjadi perubahan tubuh, suara, dan emosi.</li>
      </ul>
    </div>,

    // Page 12: Ciri-Ciri Pubertas
    <div className="space-y-4 text-sm" key="page-12">
      <p className="font-semibold text-base">Ciri-Ciri Pubertas</p>
      <p><b>Laki-laki:</b></p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Mimpi basah.</li>
        <li>Pembesaran testis dan penis.</li>
        <li>Tumbuh jakun dan suara menjadi berat.</li>
        <li>Bau badan meningkat.</li>
      </ul>
      <p><b>Perempuan:</b></p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Menstruasi (menarche).</li>
        <li>Pertumbuhan payudara.</li>
        <li>Tumbuh rambut halus di ketiak dan area kemaluan.</li>
        <li>Pinggul membesar dan bentuk tubuh berubah.</li>
        <li>Perubahan emosi menjadi lebih sensitif.</li>
      </ul>
    </div>,
  ];

  const [page, setPage] = useState(1); // 1-based indexing for user-friendly navigation

  return (
    <Material title="Pertumbuhan dan Perkembangan" quizRoute="/missions/pertumbuhan-perkembangan/quiz">
      {pages[page - 1]}

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded text-white text-sm ${page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          Sebelumnya
        </button>

        <button
          onClick={() => setPage((prev) => Math.min(pages.length, prev + 1))}
          disabled={page === pages.length}
          className={`px-4 py-2 rounded text-white text-sm ${page === pages.length ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          Berikutnya
        </button>
      </div>
    </Material>
  );
}
