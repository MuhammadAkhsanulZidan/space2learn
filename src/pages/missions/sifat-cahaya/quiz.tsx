import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
    {
    question: "Manakah dari berikut ini yang *bukan* sifat gelombang cahaya?",
    options: [
      { option: "Refraksi", message: "Refraksi adalah pembiasan cahaya, termasuk sifat gelombang cahaya." },
      { option: "Difraksi", message: "Difraksi adalah pembelokan gelombang cahaya saat melewati celah sempit, jadi ini sifat cahaya." },
      { option: "Resonansi", message: "Resonansi lebih umum terjadi pada gelombang mekanik." },
      { option: "Interferensi", message: "Interferensi adalah gabungan dua gelombang cahaya yang saling memperkuat atau melemahkan." },
    ],
    correctIndex: 2,
  },
  {
    question: "Manakah dari berikut ini yang merupakan sifat gelombang dan dimiliki oleh cahaya?",
    options: [
      { option: "Resonansi", message: "Resonansi lebih umum terjadi pada gelombang mekanik." },
      { option: "Difraksi", message: "Benar! Cahaya dapat mengalami difraksi saat melewati celah sempit." },
      { option: "Cahaya tidak memiliki sifat gelombang", message: "Keliru, cahaya adalah gelombang elektromagnetik." },
      { option: "Getaran partikel", message: "Itu khas gelombang mekanik, bukan cahaya." },
    ],
    correctIndex: 1,
  }
];


export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/sifat-cahaya" />
}