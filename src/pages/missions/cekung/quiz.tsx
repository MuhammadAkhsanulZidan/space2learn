import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Sebuah benda diletakkan 30 cm di depan cermin cekung yang memiliki fokus 15 cm. Berapa jarak bayangan yang terbentuk?",
    options: [
      { option: "20 cm", message: "Salah. Gunakan rumus 1/f = 1/s + 1/s' untuk menghitung jarak bayangan." },
      { option: "15 cm", message: "Kurang tepat. Coba hitung lagi dengan rumus cermin." },
      { option: "40 cm", message: "Salah. Gunakan rumus 1/f = 1/s + 1/s' untuk menghitung jarak bayangan." },
      { option: "30 cm", message: "Benar! 1/f = 1/so + 1/si → 1/15 = 1/30 + 1/si → s' = 30 cm" },
    ],
    correctIndex: 3,
  },
  {
    question: "Sebuah bayangan berada di belakang cermin, searah dengan benda, dan lebih besar dari benda. Apa sifat bayangannya?",
    options: [
      { option: "Nyata, terbalik, diperkecil", message: "Salah. Coba perhatikan lagi kalimatnya" },
      { option: "Maya, tegak, diperbesar", message: "Betul! Sesuai dengan sifat dari soal" },
      { option: "Nyata, tegak, diperbesar", message: "Salah. Coba perhatikan lagi kalimatnya" },
      { option: "Tidak terbentuk", message: "Coba perhatikan lagi kalimatnya" },
    ],
    correctIndex: 1,
  },
  {
    question: "Jika jarak benda 20 cm dan jarak bayangan 60 cm, berapa panjang fokus cermin cekung?",
    options: [
      { option: "15 cm", message: "Tepat! 1/f = 1/so + 1/si → f = 15 cm." },
      { option: "20 cm", message: "Itu jarak benda, bukan fokusnya." },
      { option: "30 cm", message: "Kurang tepat. Hitung lagi menggunakan rumus utama." },
      { option: "40 cm", message: "Terlalu besar. Fokus lebih kecil dari jarak bayangan." },
    ],
    correctIndex: 0,
  },
  {
    question: "Sebuah benda berada 30 cm di depan cermin cekung. Bayangan terbentuk sejauh 60 cm. Berapa perbesarannya?",
    options: [
      { option: "2", message: "Tepat! M = si/so = 60/30 = 2" },
      { option: "2", message: "Kurang tepat" },
      { option: "0.5", message: "Itu terlalu kecil. Hitung ulang M = s'/s." },
      { option: "0.25", message: "Perbesaran lebih besar dari 1, karena s' > s." },
    ],
    correctIndex: 0,
  },
  {
    question: "Jika fokus cermin cekung adalah 25 cm dan jarak benda 50 cm, berapa jarak bayangan yang terbentuk?",
    options: [
      { option: "25 cm", message: "Kurang tepat. Gunakan rumus cermin." },
      { option: "40 cm", message: "Salah. Gunakan rumus 1/f = 1/s + 1/s'." },
      { option: "20 cm", message: "Salah. Gunakan rumus 1/f = 1/s + 1/s'." },
      { option: "50 cm", message: "Tepat! 1/f = 1/s + 1/s' → 1/25 = 1/50 + 1/s' → s' = 50 cm." },
    ],
    correctIndex: 3,
  },
];


export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/cekung" />
}