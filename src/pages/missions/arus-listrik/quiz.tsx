import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Dari mana elektron mengalir dalam sebuah rangkaian listrik?",
    options: [
      { option: "Dari potensial tinggi ke potensial rendah", message: "Salah, elektron mengalir dari potensial rendah ke tinggi (kutub negatif ke positif)." },
      { option: "Dari potensial rendah ke potensial tinggi", message: "Benar! Elektron mengalir dari kutub negatif (potensial rendah) ke kutub positif (potensial tinggi)." },
      { option: "Dari kutub positif ke kutub positif", message: "Salah, itu tidak terjadi dalam rangkaian listrik." },
      { option: "Dari kutub negatif ke kutub negatif", message: "Salah, elektron tidak berpindah dari negatif ke negatif." },
    ],
    correctIndex: 1,
  },
  {
    question: "Arus listrik didefinisikan sebagai...",
    options: [
      { option: "Aliran elektron dari negatif ke positif", message: "Salah, arus listrik disepakati mengalir dari potensial tinggi ke rendah." },
      { option: "Aliran muatan listrik karena perbedaan potensial", message: "Benar! Arus listrik adalah arus muatan yang mengalir karena beda potensial." },
      { option: "Jumlah elektron dalam konduktor", message: "Salah, itu hanya muatan total." },
      { option: "Hambatan kawat listrik", message: "Salah, itu resistansi." },
    ],
    correctIndex: 1,
  },
  {
    question: "Arus listrik disepakati mengalir dari...",
    options: [
      { option: "Potensial rendah ke potensial tinggi", message: "Salah, itu arah aliran elektron." },
      { option: "Potensial tinggi ke potensial rendah", message: "Benar! Arus konvensional mengalir dari kutub positif ke negatif." },
      { option: "Kutub negatif ke kutub negatif", message: "Salah, arus harus mengalir antara dua kutub berbeda." },
      { option: "Tidak mengalir sama sekali", message: "Salah, arus listrik selalu mengalir jika ada rangkaian tertutup." },
    ],
    correctIndex: 1,
  },
  {
    question: "Besar arus listrik pada rangkaian tertutup dapat dihitung dengan rumus...",
    options: [
      { option: "i = q × t", message: "Salah, ini salah satu satuan." },
      { option: "i = q / t", message: "Benar! Arus listrik adalah muatan per satuan waktu." },
      { option: "i = t / q", message: "Salah, ini terbalik." },
      { option: "i = V / R", message: "Salah, itu rumus hukum Ohm." },
    ],
    correctIndex: 1,
  },
  {
    question: "Apa satuan arus listrik?",
    options: [
      { option: "Volt (V)", message: "Salah, volt adalah satuan beda potensial." },
      { option: "Ampere (A)", message: "Benar! Satuan resmi arus listrik adalah Ampere." },
      { option: "Coulomb (C)", message: "Salah, coulomb adalah satuan muatan listrik." },
      { option: "Ohm (Ω)", message: "Salah, ohm adalah satuan hambatan." },
    ],
    correctIndex: 1,
  },
  {
    question: "Dalam rumus i = N × e / t, apa arti N?",
    options: [
      { option: "Besar arus listrik", message: "Salah, itu i." },
      { option: "Jumlah muatan listrik atau elektron", message: "Benar! N adalah jumlah elektron yang mengalir." },
      { option: "Waktu dalam detik", message: "Salah, itu t." },
      { option: "Muatan elektron", message: "Salah, itu e." },
    ],
    correctIndex: 1,
  },
  {
    question: "Dalam rumus i = N × e / t, apa arti e?",
    options: [
      { option: "Jumlah muatan listrik", message: "Salah, itu N." },
      { option: "Muatan elektron", message: "Benar! e adalah muatan satu elektron (~1,6 × 10⁻¹⁹ C)." },
      { option: "Arus listrik", message: "Salah, itu i." },
      { option: "Waktu", message: "Salah, itu t." },
    ],
    correctIndex: 1,
  },
  {
    question: "Jika jumlah muatan yang mengalir meningkat, maka arus listrik...",
    options: [
      { option: "Berkurang", message: "Salah, arus sebanding dengan muatan." },
      { option: "Bertambah", message: "Benar! Semakin banyak muatan per detik, semakin besar arus." },
      { option: "Tetap sama", message: "Salah, arus berubah sesuai muatan." },
      { option: "Menjadi nol", message: "Salah, arus tidak hilang kecuali rangkaian terbuka." },
    ],
    correctIndex: 1,
  },
  {
    question: "Apa hubungan antara arus listrik dan aliran elektron?",
    options: [
      { option: "Arus listrik searah dengan aliran elektron", message: "Salah, arus listrik berlawanan arah dengan aliran elektron." },
      { option: "Arus listrik berlawanan arah dengan aliran elektron", message: "Benar! Arus konvensional mengalir dari positif ke negatif, berlawanan dengan elektron." },
      { option: "Arus listrik tidak berhubungan dengan elektron", message: "Salah, arus listrik terjadi karena aliran elektron." },
      { option: "Arus listrik sama dengan jumlah elektron", message: "Salah, arus adalah laju aliran muatan, bukan jumlah saja." },
    ],
    correctIndex: 1,
  },
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/arus-listrik"/>
}
