import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Fungsi utama kabel listrik adalah...",
    options: [
      { option: "Sebagai isolator listrik", message: "Salah, kabel digunakan untuk menghantarkan listrik." },
      { option: "Sebagai penghantar listrik dari satu ujung ke ujung lainnya", message: "Benar! Kabel berfungsi menghantarkan arus listrik." },
      { option: "Sebagai sumber listrik", message: "Salah, kabel bukan sumber listrik." },
      { option: "Sebagai pengubah energi listrik menjadi panas", message: "Salah, meskipun ada panas karena hambatan, itu bukan fungsi utama." },
    ],
    correctIndex: 1,
  }
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/listrik-dinamis"/>
}
