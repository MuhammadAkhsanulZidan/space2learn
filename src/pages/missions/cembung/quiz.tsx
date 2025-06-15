import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Sebuah benda diletakkan 30 cm di depan cermin cembung yang memiliki panjang fokus -20 cm. Berapa jarak bayangan yang terbentuk?",
    options: [
      { option: "-12 cm", message: "Benar! Gunakan rumus 1/f = 1/so + 1/si → 1/(-20) = 1/30 + 1/si → si = -12 cm." },
      { option: "-20 cm", message: "Kurang tepat. Gunakan rumus 1/f = 1/so + 1/si untuk menghitung." },
      { option: "10 cm", message: "Salah. Gunakan rumus 1/f = 1/so + 1/si untuk menghitung." },
      { option: "16 cm", message: "Salah. Gunakan rumus 1/f = 1/so + 1/si untuk menghitung." },
    ],
    correctIndex: 0,
  },
  {
    question: "Sebuah benda setinggi 4 cm diletakkan 40 cm di depan cermin cembung dengan fokus -20 cm. Berapa tinggi bayangan yang terbentuk?",
    options: [
      { option: "1.3 cm", message: "Benar! M = si/so = -13.3 / 40 = -0.33 → hi = 0.33 × 4 = 1.3 cm (tegak, diperkecil)." },
      { option: "4 cm", message: "Salah. Bayangan pada cermin cembung selalu lebih kecil dari benda." },
      { option: "2 cm", message: "Kurang tepat. Coba hitung perbesaran dengan M = si/so." },
      { option: "6 cm", message: "Salah. Cermin cembung tidak memperbesar bayangan." },
    ],
    correctIndex: 0,
  },
  {
    question: "Berapa perbesaran (M) bayangan yang dihasilkan oleh cermin cembung jika jarak benda 30 cm dan jarak bayangan -12 cm?",
    options: [
      { option: "0.4", message: "Benar! M = si / so = -12 / 30 = -0.4 (bayangan tegak, diperkecil)." },
      { option: "2.5", message: "Salah. Itu hasil dari 30 / 12." },
      { option: "1", message: "Salah. Bayangan cermin cembung selalu lebih kecil dari benda." },
      { option: "-2", message: "Salah. Nilai perbesaran seharusnya lebih kecil dari 1." },
    ],
    correctIndex: 0,
  },
  {
    question: "Fokus sebuah cermin cembung adalah -25 cm. Jarak bayangan yang terbentuk jika benda berada 50 cm di depan cermin adalah...",
    options: [
      { option: "-16.7 cm", message: "Benar! 1/f = 1/so + 1/si → 1/(-25) = 1/50 + 1/si → si ≈ -16.7 cm." },
      { option: "25 cm", message: "Salah. Fokus cermin cembung negatif, dan bayangan selalu di belakang cermin." },
      { option: "-25 cm", message: "Kurang tepat. Gunakan rumus dan hitung kembali." },
      { option: "16.7 cm", message: "Salah. Bayangan cermin cembung berada di belakang dan nilainya negatif." },
    ],
    correctIndex: 0,
  },
  {
    question: "Cermin cembung memiliki fokus -15 cm. Jika benda diletakkan 45 cm di depan cermin, berapakah perbesaran bayangannya?",
    options: [
      { option: "0.25", message: "Benar! 1/f = 1/so + 1/si → si = -11.25 → M = -11.25 / 45 = -0.25." },
      { option: "1", message: "Salah. Perbesaran untuk cermin cembung selalu kurang dari 1." },
      { option: "-2", message: "Salah. Hasil terlalu besar untuk cermin cembung." },
      { option: "3", message: "Salah. Cermin cembung tidak memperbesar bayangan." },
    ],
    correctIndex: 0,
  }
];

export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/cembung" />
}
