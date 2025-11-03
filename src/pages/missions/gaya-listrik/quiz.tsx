import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Siapakah ilmuwan yang pertama kali merumuskan perhitungan gaya listrik?",
    options: [
      { option: "Isaac Newton", message: "Salah, Newton merumuskan gaya gravitasi." },
      { option: "Michael Faraday", message: "Salah, Faraday meneliti induksi elektromagnetik." },
      { option: "Charles Augustin de Coulomb", message: "Benar! Coulomb menemukan hubungan gaya listrik antara dua muatan." },
      { option: "Benjamin Franklin", message: "Salah, Franklin meneliti tentang petir dan muatan listrik, bukan hukum gaya listrik." },
    ],
    correctIndex: 2,
  },
  {
    question: "Menurut Coulomb, besar gaya listrik antara dua muatan berbanding terbalik dengan...",
    options: [
      { option: "Kuadrat jarak antara kedua muatan", message: "Benar! Semakin jauh jaraknya, gaya listrik semakin kecil." },
      { option: "Jumlah total kedua muatan", message: "Salah, gaya tidak berbanding terbalik dengan jumlah muatan." },
      { option: "Arah medan listrik", message: "Salah, arah tidak berpengaruh pada besar gaya secara langsung." },
      { option: "Waktu gesekan antara benda", message: "Salah, waktu gesekan tidak masuk dalam rumus gaya Coulomb." },
    ],
    correctIndex: 0,
  },
  {
    question: "Jika jarak antara dua benda bermuatan diperbesar dua kali lipat, maka gaya listrik yang terjadi akan...",
    options: [
      { option: "Menjadi dua kali lebih besar", message: "Salah, gaya berkurang, bukan bertambah." },
      { option: "Menjadi setengah dari semula", message: "Salah, bukan berbanding lurus tapi berbanding terbalik dengan kuadrat jarak." },
      { option: "Menjadi seperempat dari semula", message: "Benar! Karena F ∝ 1/r², jika r menjadi 2r, maka F menjadi 1/4 kali semula." },
      { option: "Tetap sama", message: "Salah, gaya berubah jika jarak berubah." },
    ],
    correctIndex: 2,
  },
  {
    question: "Berdasarkan Hukum Coulomb, jika salah satu muatan diperbesar dua kali lipat, maka gaya listrik akan...",
    options: [
      { option: "Tetap sama", message: "Salah, besar gaya akan berubah." },
      { option: "Berkurang setengah", message: "Salah, gaya justru bertambah." },
      { option: "Bertambah dua kali lipat", message: "Benar! Karena F ∝ q1 x q2, jika salah satu muatan dua kali lipat, gaya juga dua kali lipat." },
      { option: "Hilang sama sekali", message: "Salah, gaya tidak akan hilang kecuali salah satu muatan nol." },
    ],
    correctIndex: 2,
  },
  {
    question: "Konstanta k pada rumus gaya Coulomb bernilai...",
    options: [
      { option: "9 x 10⁹ Nm²/C²", message: "Benar! Nilai konstanta Coulomb adalah 9 x 10⁹ Nm²/C²." },
      { option: "3 x 10⁸ m/s", message: "Salah, itu kecepatan cahaya." },
      { option: "6,67 x 10⁻¹¹ Nm²/kg²", message: "Salah, itu konstanta gravitasi Newton." },
      { option: "1,6 x 10⁻¹⁹ C", message: "Salah, itu muatan elektron." },
    ],
    correctIndex: 0,
  },
  {
    question: "Rumus gaya Coulomb yang benar adalah...",
    options: [
      { option: "Fc = k x q1 x q2 / r²", message: "Benar! Itulah rumus hukum Coulomb." },
      { option: "Fc = m x a", message: "Salah, itu hukum Newton II." },
      { option: "Fc = q1 + q2 / r", message: "Salah, bukan penjumlahan muatan." },
      { option: "Fc = k x q1 x q2 x r²", message: "Salah, jarak seharusnya di penyebut (r²)." },
    ],
    correctIndex: 0,
  },
  {
    question: "Apa yang terjadi pada gaya listrik jika kedua muatan memiliki tanda yang sama?",
    options: [
      { option: "Saling tarik-menarik", message: "Salah, muatan sejenis saling tolak-menolak." },
      { option: "Saling tolak-menolak", message: "Benar! Muatan sejenis menolak satu sama lain." },
      { option: "Tidak terjadi interaksi", message: "Salah, tetap ada gaya listrik walau tolak-menolak." },
      { option: "Menjadi netral", message: "Salah, gaya tidak membuat muatan menjadi netral." },
    ],
    correctIndex: 1,
  },
  {
    question: "Bagaimana pengaruh lamanya waktu menggosok terhadap besar gaya listrik pada percobaan dua balon?",
    options: [
      { option: "Semakin lama digosok, gaya listrik semakin besar", message: "Benar! Gesekan lebih lama menambah jumlah elektron yang berpindah." },
      { option: "Tidak berpengaruh sama sekali", message: "Salah, gesekan berpengaruh pada besar muatan." },
      { option: "Gaya listrik berkurang", message: "Salah, gaya justru meningkat." },
      { option: "Balon menjadi netral kembali", message: "Salah, balon tetap bermuatan selama tidak dinetralkan." },
    ],
    correctIndex: 0,
  },
  {
    question: "Berdasarkan Hukum Coulomb, semakin besar jarak antara dua muatan maka...",
    options: [
      { option: "Gaya listrik semakin kecil", message: "Benar! Karena gaya berbanding terbalik dengan kuadrat jarak." },
      { option: "Gaya listrik semakin besar", message: "Salah, gaya justru menurun." },
      { option: "Tidak ada gaya listrik", message: "Salah, gaya tidak nol kecuali jarak tak hingga." },
      { option: "Muatan berubah tanda", message: "Salah, tanda muatan tidak berubah karena jarak." },
    ],
    correctIndex: 0,
  },
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/menu"/>
}
