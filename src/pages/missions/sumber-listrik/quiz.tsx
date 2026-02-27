import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Sumber arus listrik yang mengubah energi kimia menjadi listrik disebut...",
    options: [
      { option: "Dinamo AC", message: "Salah, dinamo AC mengubah energi gerak menjadi listrik." },
      { option: "Elemen volta, baterai, atau akumulator", message: "Benar! Sumber DC elektrokimia mengubah energi kimia menjadi listrik." },
      { option: "Solar sel", message: "Salah, solar sel mengubah energi cahaya menjadi listrik." },
      { option: "Generator", message: "Salah, generator mengubah energi gerak menjadi listrik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Arus listrik searah disebut...",
    options: [
      { option: "AC (alternating current)", message: "Salah, AC adalah arus bolak-balik." },
      { option: "DC (direct current)", message: "Benar! DC adalah arus searah." },
      { option: "Elektromagnetik", message: "Salah, ini bukan istilah untuk arus." },
      { option: "Arus listrik statis", message: "Salah, itu listrik statis, bukan DC." },
    ],
    correctIndex: 1,
  },
  {
    question: "Contoh sumber arus DC adalah...",
    options: [
      { option: "Dinamo AC", message: "Salah, itu sumber AC." },
      { option: "Generator", message: "Salah, itu AC atau bisa AC/DC tergantung jenis generator." },
      { option: "Baterai kering, elemen volta, akumulator", message: "Benar! Ini semua sumber DC." },
      { option: "Solar sel", message: "Salah, meskipun solar sel menghasilkan DC, yang dimaksud umum adalah baterai dan akumulator." },
    ],
    correctIndex: 2,
  },
  {
    question: "Contoh sumber arus AC adalah...",
    options: [
      { option: "Baterai kering", message: "Salah, itu DC." },
      { option: "Dinamo AC dan generator", message: "Benar! AC dihasilkan dari dinamo atau generator." },
      { option: "Akumulator", message: "Salah, itu DC." },
      { option: "Elemen volta", message: "Salah, itu DC." },
    ],
    correctIndex: 1,
  },
  {
    question: "Elemen primer adalah sumber arus listrik yang...",
    options: [
      { option: "Dapat diisi ulang", message: "Salah, itu elemen sekunder." },
      { option: "Tidak dapat diisi ulang setelah energinya habis", message: "Benar! Contohnya baterai kering dan elemen volta." },
      { option: "Menghasilkan arus AC", message: "Salah, primer/sekunder berkaitan dengan isi ulang, bukan jenis arus." },
      { option: "Hanya digunakan untuk solar sel", message: "Salah, ini tidak terkait dengan elemen primer." },
    ],
    correctIndex: 1,
  },
  {
    question: "Elemen sekunder adalah sumber arus listrik yang...",
    options: [
      { option: "Tidak dapat diisi ulang", message: "Salah, itu elemen primer." },
      { option: "Dapat diisi ulang setelah energinya habis", message: "Benar! Contohnya akumulator dan baterai Li-ion." },
      { option: "Menghasilkan arus bolak-balik", message: "Salah, sekunder bisa DC atau AC, fokusnya adalah bisa diisi ulang." },
      { option: "Hanya digunakan pada telepon genggam", message: "Salah, ini hanya contoh penggunaannya." },
    ],
    correctIndex: 1,
  },
  {
    question: "Sumber arus listrik AC mengubah energi ... menjadi listrik.",
    options: [
      { option: "Kimia", message: "Salah, itu DC elektrokimia." },
      { option: "Gerak", message: "Benar! AC dihasilkan dari dinamo atau generator yang mengubah energi gerak." },
      { option: "Kalor", message: "Salah, itu solar sel atau termoelektrik." },
      { option: "Cahaya", message: "Salah, itu solar sel." },
    ],
    correctIndex: 1,
  },
  {
    question: "Sumber arus listrik yang digunakan pada telepon genggam biasanya termasuk...",
    options: [
      { option: "Elemen primer", message: "Salah, baterai Li-ion dapat diisi ulang, jadi elemen sekunder." },
      { option: "Elemen sekunder", message: "Benar! Baterai Li-ion dan akumulator dapat diisi ulang." },
      { option: "AC generator", message: "Salah, telepon genggam menggunakan DC." },
      { option: "Dinamo AC", message: "Salah, telepon genggam tidak menggunakan dinamo AC." },
    ],
    correctIndex: 1,
  },
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/sumber-arus-listrik"/>
}
