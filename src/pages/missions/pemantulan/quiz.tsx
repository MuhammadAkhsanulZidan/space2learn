import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Berikut ini yang merupakan hukum pemantulan cahaya adalah...",
    options: [
      { option: "Sudut datang lebih besar dari sudut pantul", message: "Salah. Sudut datang = sudut pantul." },
      { option: "Cahaya hanya dapat dipantulkan oleh permukaan logam", message: "Tidak tepat. Banyak permukaan bisa memantulkan." },
      { option: "Sinar datang, sinar pantul, dan garis normal terletak pada bidang yang berbeda", message: "Keliru. Semua berada di satu bidang." },
      { option: "Sudut datang sama dengan sudut pantul", message: "Benar! Ini adalah hukum pemantulan." },
    ],
    correctIndex: 3,
  },
  {
    question: "Jika sudut datang 40°, maka sudut pantul adalah...",
    options: [
      { option: "20°", message: "Ingat hukum pemantulan: sudut datang = sudut pantul." },
      { option: "40°", message: "Benar! Sudut pantul = sudut datang." },
      { option: "60°", message: "Terlalu besar. Coba cek lagi." },
      { option: "90°", message: "Itu sudut tegak lurus, bukan pantulan." },
    ],
    correctIndex: 1,
  },
  {
    question: "Garis normal adalah...",
    options: [
      { option: "Garis sejajar sinar datang", message: "Itu bukan garis normal." },
      { option: "Garis tegak lurus terhadap bidang pantul", message: "Benar! Ini definisi garis normal." },
      { option: "Garis sejajar sinar pantul", message: "Keliru. Garis normal tegak lurus permukaan." },
      { option: "Garis pantulan yang menembus benda", message: "Tidak sesuai dengan definisi garis normal." },
    ],
    correctIndex: 1,
  },
];



export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/pemantulan"/>
}