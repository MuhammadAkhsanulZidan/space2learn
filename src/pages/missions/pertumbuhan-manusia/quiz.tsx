import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Apa yang dimaksud dengan fase pertumbuhan pada manusia?",
    options: [
      { option: "Perubahan fisik dan fungsi organ yang menuju kedewasaan", message: "Itu lebih ke pengertian perkembangan." },
      { option: "Proses bertambahnya usia seseorang", message: "Itu hanya bagian dari pertumbuhan, tapi bukan pengertian utamanya." },
      { option: "Perubahan bentuk tubuh dan fungsi emosi", message: "Itu ciri perkembangan, bukan pertumbuhan." },
      { option: "Proses bertambahnya ukuran tubuh seperti tinggi dan berat", message: "Benar!" }
    ],
    correctIndex: 3
  },
  {
    question: "Pada fase apa pertumbuhan manusia berlangsung paling cepat?",
    options: [
      { option: "Fase bayi", message: "Benar! Pertumbuhan sangat cepat pada fase bayi." },
      { option: "Fase anak-anak", message: "Salah, fase ini lebih stabil." },
      { option: "Fase dewasa", message: "Salah, pada fase ini pertumbuhan fisik telah berhenti." },
      { option: "Fase lansia", message: "Salah, lansia tidak mengalami pertumbuhan lagi." }
    ],
    correctIndex: 0
  },
  {
    question: "Manakah ciri khas dari fase anak-anak?",
    options: [
      { option: "Tumbuh rambut halus di area tubuh", message: "Itu ciri pubertas pada remaja." },
      { option: "Bermain, belajar membaca, dan mulai bersosialisasi", message: "Benar!" },
      { option: "Mengalami perubahan suara", message: "Itu ciri remaja laki-laki." },
      { option: "Mulai memiliki uban", message: "Itu ciri lansia." }
    ],
    correctIndex: 1
  },
  {
    question: "Apa yang terjadi pada fase remaja?",
    options: [
      { option: "Mengalami penuaan organ tubuh", message: "Itu terjadi pada fase lansia." },
      { option: "Mengalami pertumbuhan tinggi badan dan perubahan emosi", message: "Benar!" },
      { option: "Mulai belajar membaca dan menulis", message: "Itu terjadi pada masa anak-anak." },
      { option: "Mengalami kerutan kulit", message: "Itu terjadi saat lansia." }
    ],
    correctIndex: 1
  },
  {
    question: "Ciri utama dari fase dewasa adalah...",
    options: [
      { option: "Pertumbuhan fisik masih sangat cepat", message: "Salah, pertumbuhan sudah berhenti." },
      { option: "Tubuh mengalami kemunduran fungsi", message: "Itu terjadi pada fase lansia." },
      { option: "Mencapai kematangan fisik dan mulai fokus pada karier", message: "Benar!" },
      { option: "Mulai belajar bersosialisasi", message: "Itu terjadi saat anak-anak." }
    ],
    correctIndex: 2
  },
  {
    question: "Apa yang terjadi pada fase lansia?",
    options: [
      { option: "Pertumbuhan tinggi badan", message: "Pertumbuhan sudah berhenti." },
      { option: "Fungsi tubuh mulai menurun dan muncul kerutan", message: "Benar!" },
      { option: "Suara menjadi berat dan tumbuh jakun", message: "Itu masa pubertas." },
      { option: "Mulai belajar berjalan", message: "Itu terjadi saat bayi." }
    ],
    correctIndex: 1
  },
  {
    question: "Mengapa fase bayi disebut masa pertumbuhan tercepat?",
    options: [
      { option: "Karena bayi langsung bisa berjalan dan berbicara", message: "Itu perkembangan, bukan pertumbuhan." },
      { option: "Karena berat dan tinggi badan meningkat pesat", message: "Benar!" },
      { option: "Karena semua organ sudah matang", message: "Tidak, organ masih berkembang." },
      { option: "Karena bayi memiliki banyak rambut", message: "Itu tidak terkait dengan laju pertumbuhan." }
    ],
    correctIndex: 1
  },
  {
    question: "Apa yang membedakan fase anak-anak dan fase remaja?",
    options: [
      { option: "Anak-anak belum mengalami pubertas, remaja sudah", message: "Benar!" },
      { option: "Anak-anak lebih tinggi dari remaja", message: "Salah, remaja biasanya lebih tinggi." },
      { option: "Anak-anak sudah mandiri sepenuhnya", message: "Belum tentu." },
      { option: "Anak-anak mengalami uban", message: "Itu fase lansia." }
    ],
    correctIndex: 0
  }
];

export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/fase-pertumbuhan-manusia" />;
}
