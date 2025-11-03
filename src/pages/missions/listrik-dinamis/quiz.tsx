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
  },
  {
    question: "Bahan yang paling baik untuk menghantarkan listrik adalah...",
    options: [
      { option: "Plastik dan karet", message: "Salah, itu bahan isolator." },
      { option: "Tembaga dan perak", message: "Benar! Tembaga dan perak adalah konduktor terbaik." },
      { option: "Kayu dan kaca", message: "Salah, ini isolator." },
      { option: "Karbon dan silikon", message: "Salah, ini semikonduktor." },
    ],
    correctIndex: 1,
  },
  {
    question: "Konduktor adalah...",
    options: [
      { option: "Bahan yang sangat buruk menghantarkan listrik", message: "Salah, itu isolator." },
      { option: "Bahan yang mampu menghantarkan arus listrik dengan baik", message: "Benar! Contohnya tembaga, perak, dan emas." },
      { option: "Bahan yang hanya menghantarkan listrik pada suhu tinggi", message: "Salah, itu semikonduktor." },
      { option: "Bahan yang tidak memiliki elektron bebas", message: "Salah, konduktor memiliki banyak elektron bebas." },
    ],
    correctIndex: 1,
  },
  {
    question: "Isolator listrik adalah...",
    options: [
      { option: "Bahan yang menghantarkan listrik dengan sangat baik", message: "Salah, itu konduktor." },
      { option: "Bahan yang sangat buruk untuk menghantarkan listrik", message: "Benar! Contohnya karet, kayu, dan plastik." },
      { option: "Bahan yang menghantarkan listrik hanya saat suhu tinggi", message: "Salah, itu semikonduktor." },
      { option: "Bahan yang tidak ada di bumi", message: "Salah, isolator banyak ditemui di bumi." },
    ],
    correctIndex: 1,
  },
  {
    question: "Semikonduktor bersifat...",
    options: [
      { option: "Selalu menghantarkan listrik dengan baik", message: "Salah, itu konduktor." },
      { option: "Selalu menjadi isolator", message: "Salah, itu isolator." },
      { option: "Bersifat sebagai konduktor pada suhu tinggi dan isolator pada suhu rendah", message: "Benar! Contohnya silikon dan germanium." },
      { option: "Tidak terpengaruh oleh suhu", message: "Salah, sifat semikonduktor tergantung suhu." },
    ],
    correctIndex: 2,
  },
  {
    question: "Hambatan jenis (ρ) suatu bahan memengaruhi...",
    options: [
      { option: "Kemampuan bahan untuk menghantarkan listrik", message: "Benar! Semakin kecil ρ, semakin baik bahan menghantarkan listrik." },
      { option: "Besar muatan listrik benda", message: "Salah, hambatan jenis tidak menentukan muatan." },
      { option: "Tegangan listrik di stop kontak", message: "Salah, tegangan tidak ditentukan oleh ρ." },
      { option: "Arah aliran elektron", message: "Salah, hambatan jenis tidak mengubah arah elektron." },
    ],
    correctIndex: 0,
  },
  {
    question: "Rumus hambatan kawat (R) adalah...",
    options: [
      { option: "R = ρ × A / L", message: "Salah, rumusnya R = ρ × L / A." },
      { option: "R = ρ × L / A", message: "Benar! Hambatan berbanding lurus dengan panjang dan berbanding terbalik dengan luas penampang." },
      { option: "R = V / I", message: "Salah, itu hukum Ohm untuk arus dan tegangan." },
      { option: "R = k × Q / r²", message: "Salah, itu hukum Coulomb." },
    ],
    correctIndex: 1,
  },
  {
    question: "Bahan yang digunakan pada transistor dalam elektronika biasanya adalah...",
    options: [
      { option: "Tembaga", message: "Salah, tembaga adalah konduktor." },
      { option: "Karbon atau silikon", message: "Benar! Karbon dan silikon merupakan semikonduktor yang umum digunakan." },
      { option: "Karet", message: "Salah, karet adalah isolator." },
      { option: "Perak", message: "Salah, perak adalah konduktor." },
    ],
    correctIndex: 1,
  },
  {
    question: "Jika panjang kawat ditingkatkan dan luas penampangnya tetap, maka hambatan listrik...",
    options: [
      { option: "Bertambah", message: "Benar! Hambatan berbanding lurus dengan panjang kawat." },
      { option: "Berkurang", message: "Salah, hambatan meningkat bukan berkurang." },
      { option: "Tetap sama", message: "Salah, perubahan panjang memengaruhi hambatan." },
      { option: "Menjadi nol", message: "Salah, hambatan tidak bisa nol kecuali bahan superkonduktor." },
    ],
    correctIndex: 0,
  },
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/listrik-dinamis"/>
}
