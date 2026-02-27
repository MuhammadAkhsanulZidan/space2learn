import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Apa yang dimaksud dengan daya listrik?",
    options: [
      { option: "Jumlah muatan listrik yang mengalir per detik", message: "Salah, itu definisi arus listrik." },
      { option: "Energi listrik yang mengalir atau diserap per satuan waktu", message: "Benar! Daya listrik adalah energi listrik per detik." },
      { option: "Perbedaan potensial antara dua titik", message: "Salah, itu beda potensial." },
      { option: "Besar hambatan dalam rangkaian listrik", message: "Salah, itu resistansi." },
    ],
    correctIndex: 1,
  },
  {
    question: "Rumus untuk menghitung daya listrik adalah...",
    options: [
      { option: "P = E × t", message: "Salah, ini salah satu rumus tapi tidak sesuai definisi daya per satuan waktu." },
      { option: "P = E / t", message: "Benar! Daya listrik adalah energi dibagi waktu." },
      { option: "P = V × I", message: "Benar juga dalam konteks tegangan dan arus, tapi dari konsep energi dan waktu, rumus utama P = E / t." },
      { option: "P = I / V", message: "Salah, ini bukan rumus daya." },
    ],
    correctIndex: 1,
  },
  {
    question: "Satuan daya listrik adalah...",
    options: [
      { option: "Coulomb (C)", message: "Salah, itu satuan muatan listrik." },
      { option: "Volt (V)", message: "Salah, itu satuan tegangan." },
      { option: "Watt (W)", message: "Benar! Daya listrik diukur dalam Watt." },
      { option: "Ampere (A)", message: "Salah, itu satuan arus listrik." },
    ],
    correctIndex: 2,
  },
  {
    question: "Daya listrik dapat dikonversi menjadi...",
    options: [
      { option: "Energi gerak", message: "Benar! Contohnya energi listrik di baterai mobil listrik diubah menjadi gerak." },
      { option: "Muatan listrik", message: "Salah, daya bukan muatan." },
      { option: "Hambatan listrik", message: "Salah, hambatan bukan energi." },
      { option: "Potensial listrik", message: "Salah, potensial listrik bukan konversi daya." },
    ],
    correctIndex: 0,
  },
  {
    question: "Jika sebuah baterai mobil listrik mengeluarkan energi 3600 Joule selama 10 detik, besar daya listriknya adalah...",
    options: [
      { option: "360 W", message: "Benar! P = E / t = 3600 / 10 = 360 W." },
      { option: "36 W", message: "Salah, hasilnya terlalu kecil." },
      { option: "3600 W", message: "Salah, hasilnya terlalu besar." },
      { option: "10 W", message: "Salah, hasilnya terlalu kecil." },
    ],
    correctIndex: 0,
  },
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/daya-listrik"/>
}
