import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Sebuah lensa memiliki titik fokus 50 cm. Berapa kuat lensanya?",
    options: [
      { option: "0.5 Dioptri", message: "Terlalu kecil, ingat rumus P = 100 / f." },
      { option: "2 Dioptri", message: "Tepat! 100 / 50 = 2." },
      { option: "20 Dioptri", message: "Terlalu besar. Coba hitung kembali pakai rumus P = 100 / f." },
      { option: "200 Dioptri", message: "Nilai ini terlalu besar untuk titik fokus 50 cm." },
    ],
    correctIndex: 1,
  },
  {
    question: "Jika kuat lensa adalah 5 Dioptri, maka berapa titik fokusnya?",
    options: [
      { option: "5 cm", message: "Salah. P = 100 / f → 5 = 100 / f → f = ?" },
      { option: "10 cm", message: "Kurang tepat. Gunakan f = 100 / P." },
      { option: "20 cm", message: "Tepat! f = 100 / 5 = 20 cm." },
      { option: "25 cm", message: "Dekat, tapi tidak tepat." },
    ],
    correctIndex: 2,
  },
  {
    question: "Apa satuan dari kuat lensa?",
    options: [
      { option: "Centimeter", message: "Itu satuan titik fokus, bukan kuat lensa." },
      { option: "Meter", message: "Kurang tepat. Ini satuan panjang." },
      { option: "Dioptri", message: "Betul! Satuan kuat lensa adalah Dioptri (D)." },
      { option: "Radian", message: "Itu satuan sudut, bukan kuat lensa." },
    ],
    correctIndex: 2,
  },
  {
    question: "Titik fokus sebuah lensa adalah 25 cm. Maka kuat lensa adalah...",
    options: [
      { option: "0.25 Dioptri", message: "Coba periksa rumusnya lagi." },
      { option: "4 Dioptri", message: "Betul! 100 / 25 = 4." },
      { option: "2.5 Dioptri", message: "Coba hitung lagi dengan benar." },
      { option: "40 Dioptri", message: "Itu terlalu besar. Coba hitung ulang pakai rumus." },
    ],
    correctIndex: 1,
  },
  {
    question: "Lensa dengan kuat lensa negatif artinya...",
    options: [
      { option: "Lensa cembung", message: "Lensa cembung memiliki kuat lensa positif." },
      { option: "Lensa menyerap cahaya", message: "Ini tidak berkaitan langsung dengan kuat lensa." },
      { option: "Lensa cekung", message: "Benar! Lensa cekung memiliki kuat lensa negatif." },
      { option: "Tidak memiliki fokus", message: "Tetap memiliki fokus, tapi nilainya negatif." },
    ],
    correctIndex: 2,
  },
];


export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/kuat-lensa"/>
}