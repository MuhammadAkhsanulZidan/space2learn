import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Dua cermin datar disusun membentuk sudut 60°. Berapa jumlah bayangan saat objek ditengah cermin yang terbentuk?",
    options: [
      { option: "6", message: "Kurang tepat. Gunakan rumus n = (360 / θ) - 1." },
      { option: "5", message: "Tepat! n = (360 / 60) - 1 = 6 - 1 = 5 bayangan." },
      { option: "4", message: "Kurang tepat. Coba hitung lagi pakai rumus jumlah bayangan." },
      { option: "3", message: "Terlalu sedikit. Sudut 60° menghasilkan lebih banyak bayangan." },
    ],
    correctIndex: 1,
  },
  {
    question: "Jika dua cermin datar menghasilkan 3 bayangan saat objek ditengah cermin, maka sudut antara kedua cermin tersebut adalah...",
    options: [
      { option: "120°", message: "Terlalu besar. Hitung dengan rumus θ = 360 / (n + 1)." },
      { option: "60°", message: "Kurang tepat. Dengan sudut ini jumlah bayangan akan lebih dari 3." },
      { option: "90°", message: "Tepat! Jika n = 3, maka θ = 360 / (3 + 1) = 90°." },
      { option: "45°", message: "Sudut ini menghasilkan lebih banyak bayangan." },
    ],
    correctIndex: 2,
  },
  {
    question: "Jika dua cermin membentuk sudut 45°, berapa jumlah bayangan saat objek ditengah cermin yang dapat terbentuk?",
    options: [
      { option: "6", message: "Salah. Hitung n = (360 / 45) - 1 = 7 bayangan." },
      { option: "7", message: "Tepat! n = (360 / 45) - 1 = 8 - 1 = 7 bayangan." },
      { option: "8", message: "Itu hasil sebelum dikurangi 1. Ingat n = (360 / θ) - 1." },
      { option: "5", message: "Kurang. Sudut 45° menghasilkan lebih banyak bayangan." },
    ],
    correctIndex: 1,
  },
  {
    question: "Dua cermin disusun membentuk sudut 120°. Hitung jumlah bayangan saat objek ditengah cermin yang terbentuk.",
    options: [
      { option: "2", message: "Kurang tepat. n = (360 / 120) - 1 = 3 - 1 = 2 bayangan." },
      { option: "3", message: "Salah. Itu hasil pembagian awal. Jangan lupa kurangi 1." },
      { option: "4", message: "Terlalu banyak untuk sudut 120°." },
      { option: "1", message: "Terlalu sedikit. Sudut 120° masih membentuk beberapa bayangan." },
    ],
    correctIndex: 0,
  },
  {
    question: "Dua cermin membentuk sudut 30°. Hitung jumlah bayangan saat objek ditengah cermin yang dihasilkan.",
    options: [
      { option: "10", message: "Salah. Hitung n = (360 / 30) - 1" },
      { option: "11", message: "Benar! n = (360 / 30) - 1 = 12 - 1 = 11 bayangan." },
      { option: "12", message: "Itu hasil sebelum dikurangi 1. Jangan lupa rumusnya." },
      { option: "9", message: "Kurang. Sudut 30° menghasilkan banyak bayangan." },
    ],
    correctIndex: 1,
  },
];


export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/bayangan-datar" />
}