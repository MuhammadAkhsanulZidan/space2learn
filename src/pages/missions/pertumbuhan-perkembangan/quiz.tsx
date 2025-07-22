import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Apa yang dimaksud dengan pertumbuhan pada makhluk hidup?",
    options: [
      { option: "Perubahan fungsi organ menuju kematangan", message: "Itu adalah pengertian dari perkembangan." },
      { option: "Pertambahan ukuran seperti tinggi, massa, atau volume", message: "Benar! Itu adalah pengertian pertumbuhan." },
      { option: "Perubahan perilaku dan kemampuan sosial", message: "Itu termasuk contoh perkembangan, bukan pertumbuhan." },
      { option: "Kemampuan untuk berkembang biak", message: "Itu lebih berkaitan dengan reproduksi." }
    ],
    correctIndex: 1
  },
  {
    question: "Manakah yang *bukan* ciri pertumbuhan?",
    options: [
      { option: "Bersifat irreversibel", message: "Salah, ini adalah ciri pertumbuhan." },
      { option: "Bisa diukur dengan angka", message: "Salah, ini juga ciri pertumbuhan." },
      { option: "Bersifat kualitatif", message: "Benar! Ini ciri perkembangan, bukan pertumbuhan." },
      { option: "Menggunakan auksanometer untuk mengukur", message: "Salah, ini alat ukur pertumbuhan tanaman." }
    ],
    correctIndex: 2
  },
  {
    question: "Berikut ini adalah contoh *perkembangan*, kecuali...",
    options: [
      { option: "Anak mulai bisa membaca", message: "Ini termasuk perkembangan." },
      { option: "Remaja mulai berpikir logis", message: "Ini termasuk perkembangan." },
      { option: "Batang jagung bertambah panjang", message: "Benar! Ini contoh pertumbuhan." },
      { option: "Anak semakin pandai bekerja sama", message: "Ini termasuk perkembangan." }
    ],
    correctIndex: 2
  },
  {
    question: "Ciri utama dari perkembangan adalah...",
    options: [
      { option: "Dapat diukur dengan alat ukur", message: "Itu ciri pertumbuhan." },
      { option: "Mengalami penambahan massa", message: "Itu juga ciri pertumbuhan." },
      { option: "Menuju kematangan fungsi dan sifatnya kualitatif", message: "Benar!" },
      { option: "Mudah diamati dari luar", message: "Tidak selalu. Perkembangan bisa tidak terlihat secara fisik." }
    ],
    correctIndex: 2
  },
  {
    question: "Dimanakah tempat terjadinya fertilisasi (pembuahan) pada manusia?",
    options: [
      { option: "Ovarium", message: "Ovarium adalah tempat produksi sel telur." },
      { option: "Uterus (rahim)", message: "Rahim adalah tempat embrio berkembang." },
      { option: "Tuba falopi", message: "Benar! Fertilisasi terjadi di tuba falopi." },
      { option: "Endometrium", message: "Endometrium adalah tempat menempelnya embrio (implantasi)." }
    ],
    correctIndex: 2
  },
  {
    question: "Urutan tahap awal perkembangan manusia setelah fertilisasi adalah...",
    options: [
      { option: "Zigot → Embrio → Morula → Blastosit", message: "Urutannya salah." },
      { option: "Zigot → Blastosit → Morula → Embrio", message: "Urutannya salah." },
      { option: "Ovum → Embrio → Zigot → Morula", message: "Urutannya salah." },
      { option: "Zigot → Morula → Blastosit → Embrio", message: "Benar!" }
    ],
    correctIndex: 3
  },
  {
    question: "Apa fungsi hormon progesteron pada wanita?",
    options: [
      { option: "Mengatur pertumbuhan otot", message: "Itu peran testosteron." },
      { option: "Memicu menstruasi", message: "Itu lebih banyak dilakukan oleh estrogen." },
      { option: "Menjaga kehamilan dan mendukung pertumbuhan embrio", message: "Benar!" },
      { option: "Menghasilkan sel telur", message: "Sel telur diproduksi di ovarium, bukan oleh hormon ini langsung." }
    ],
    correctIndex: 2
  },
  {
    question: "Apa nama sel hasil dari pembuahan ovum dan sperma?",
    options: [
      { option: "Oosit", message: "Oosit adalah sel telur yang belum matang." },
      { option: "Zigot", message: "Benar! Zigot adalah hasil awal pembuahan." },
      { option: "Morula", message: "Morula adalah hasil pembelahan zigot." },
      { option: "Blastosit", message: "Blastosit terbentuk setelah morula." }
    ],
    correctIndex: 1
  },
  {
    question: "Lapisan embrionik yang akan membentuk kulit dan sistem saraf adalah...",
    options: [
      { option: "Ektoderm", message: "Benar!" },
      { option: "Mesoderm", message: "Mesoderm membentuk otot dan tulang." },
      { option: "Endoderm", message: "Endoderm membentuk sistem pencernaan." },
      { option: "Epidermis", message: "Epidermis adalah bagian dari kulit yang terbentuk dari ektoderm." }
    ],
    correctIndex: 0
  },
  {
    question: "Hormon yang memicu pertumbuhan otot dan suara menjadi berat pada laki-laki adalah...",
    options: [
      { option: "Estrogen", message: "Estrogen adalah hormon utama perempuan." },
      { option: "Progesteron", message: "Progesteron membantu menjaga kehamilan." },
      { option: "Testosteron", message: "Benar!" },
      { option: "FSH", message: "FSH membantu pematangan sel kelamin, tapi bukan penyebab perubahan fisik saat pubertas." }
    ],
    correctIndex: 2
  },
  {
    question: "Apa ciri awal pubertas pada perempuan?",
    options: [
      { option: "Menstruasi (menarche)", message: "Benar! Ini tanda awal pubertas perempuan." },
      { option: "Tumbuh jakun", message: "Ini ciri khas pubertas laki-laki." },
      { option: "Suara menjadi berat", message: "Ini juga ciri laki-laki." },
      { option: "Bau badan", message: "Bisa terjadi pada keduanya, tapi bukan tanda utama." }
    ],
    correctIndex: 0
  },
  {
    question: "Manakah pernyataan yang benar tentang perkembangan?",
    options: [
      { option: "Terlihat jelas dari luar", message: "Tidak selalu terlihat dari luar." },
      { option: "Dapat diukur dengan penggaris", message: "Itu untuk pertumbuhan." },
      { option: "Tidak dapat diukur dengan alat ukur biasa", message: "Benar!" },
      { option: "Selalu disertai dengan pertumbuhan", message: "Tidak selalu. Contohnya perkembangan mental." }
    ],
    correctIndex: 2
  },
  {
    question: "Organ yang berfungsi menangkap ovum saat ovulasi adalah...",
    options: [
      { option: "Fimbriae", message: "Benar! Fimbriae menangkap ovum." },
      { option: "Ovarium", message: "Ovarium tempat produksi ovum." },
      { option: "Infundibulum", message: "Infundibulum adalah bagian awal tuba falopi, tapi bukan yang menangkap langsung." },
      { option: "Rahim", message: "Rahim adalah tempat berkembangnya embrio." }
    ],
    correctIndex: 0
  },
  {
    question: "Salah satu perubahan emosional saat pubertas adalah...",
    options: [
      { option: "Tumbuh rambut di wajah", message: "Itu perubahan fisik." },
      { option: "Bertambah tinggi badan", message: "Itu pertumbuhan." },
      { option: "Menjadi lebih sensitif atau mudah marah", message: "Benar!" },
      { option: "Menstruasi", message: "Itu perubahan biologis, bukan emosional." }
    ],
    correctIndex: 2
  },
  {
    question: "Pubertas terjadi karena dipicu oleh hormon-hormon tertentu. Hormon yang menyebabkan menstruasi adalah...",
    options: [
      { option: "Estrogen", message: "Benar! Estrogen mengatur menstruasi." },
      { option: "Testosteron", message: "Testosteron berperan pada pria." },
      { option: "Adrenalin", message: "Adrenalin tidak berhubungan dengan reproduksi." },
      { option: "Insulin", message: "Insulin mengatur kadar gula darah." }
    ],
    correctIndex: 0
  }
];



export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/sifat-cahaya" />
}