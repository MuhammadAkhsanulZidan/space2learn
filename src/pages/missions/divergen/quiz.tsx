import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Sebuah benda diletakkan 30 cm di depan lensa cembung dengan panjang fokus 20 cm. Berapa jarak bayangan yang terbentuk?",
    options: [
      { option: "60 cm", message: "Benar! 1/f = 1/so + 1/si → 1/20 = 1/30 + 1/si → si = 60 cm (nyata)." },
      { option: "10 cm", message: "Salah. Coba hitung kembali menggunakan rumus lensa cembung." },
      { option: "-12 cm", message: "Salah. Lensa cembung menghasilkan bayangan nyata jika benda di luar fokus." },
      { option: "30 cm", message: "Kurang tepat. Itu adalah jarak benda, bukan bayangan." },
    ],
    correctIndex: 0,
  },
  {
    question: "Sebuah benda setinggi 5 cm diletakkan 30 cm di depan lensa cembung dengan fokus 15 cm. Berapa tinggi bayangan yang terbentuk?",
    options: [
      { option: "10 cm", message: "Benar! si = 30 cm, M = si/so = 30/30 = 1 → hi = 1 × 5 = 5 cm (terbalik, nyata)." },
      { option: "5 cm", message: "Salah. Coba hitung perbesaran lebih dahulu." },
      { option: "2.5 cm", message: "Kurang tepat. Bayangan di sini berukuran sama karena posisi di 2f." },
      { option: "-5 cm", message: "Salah. Nilai tinggi tidak bisa negatif, hanya menunjukkan arah (terbalik/tegak)." },
    ],
    correctIndex: 0,
  },
  {
    question: "Jika jarak benda adalah 40 cm dan jarak fokus lensa cembung adalah 20 cm, berapakah perbesaran bayangannya?",
    options: [
      { option: "1", message: "Benar! si = 40 cm, M = si / so = 40 / 40 = 1 → bayangan sama besar dan terbalik." },
      { option: "2", message: "Salah. Itu hanya jika si dua kali lebih besar dari so." },
      { option: "0.5", message: "Salah. Coba hitung M = si / so." },
      { option: "-1", message: "Salah. Tandanya negatif hanya menunjukkan arah (terbalik), bukan nilai absolut perbesaran." },
    ],
    correctIndex: 0,
  }
];

export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/konvergen" />;
}
