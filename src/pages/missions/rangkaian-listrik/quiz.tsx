import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Rangkaian listrik yang tidak memiliki percabangan kabel disebut...",
    options: [
      { option: "Rangkaian paralel", message: "Salah, rangkaian paralel memiliki percabangan kabel." },
      { option: "Rangkaian seri", message: "Benar! Rangkaian seri tidak memiliki percabangan kabel." },
      { option: "Rangkaian terbuka", message: "Salah, ini istilah untuk rangkaian yang tidak tertutup." },
      { option: "Rangkaian tertutup", message: "Salah, ini hanya kondisi aliran arus, bukan tipe rangkaian." },
    ],
    correctIndex: 1,
  },
  {
    question: "Apa yang terjadi jika salah satu kabel pada rangkaian seri terputus?",
    options: [
      { option: "Hanya lampu di dekat kabel putus yang mati", message: "Salah, semua lampu akan mati." },
      { option: "Seluruh lampu mati", message: "Benar! Karena arus listrik tidak bisa mengalir di rangkaian seri." },
      { option: "Lampu tetap menyala normal", message: "Salah, arus terputus dan lampu mati semua." },
      { option: "Hanya arus yang berhenti, lampu tetap menyala", message: "Salah, lampu membutuhkan arus untuk menyala." },
    ],
    correctIndex: 1,
  },
  {
    question: "Rangkaian listrik yang memiliki percabangan kabel disebut...",
    options: [
      { option: "Rangkaian paralel", message: "Benar! Rangkaian paralel memiliki percabangan kabel." },
      { option: "Rangkaian seri", message: "Salah, itu tidak memiliki percabangan." },
      { option: "Rangkaian terbuka", message: "Salah, ini kondisi arus tidak mengalir." },
      { option: "Rangkaian tertutup", message: "Salah, ini kondisi aliran arus, bukan tipe rangkaian." },
    ],
    correctIndex: 0,
  },
  {
    question: "Jika salah satu kabel pada rangkaian paralel terputus, apa yang terjadi?",
    options: [
      { option: "Semua lampu mati", message: "Salah, lampu lainnya masih menyala karena arus tetap mengalir di cabang lain." },
      { option: "Hanya lampu di cabang putus yang mati", message: "Benar! Lampu lain tetap menyala di rangkaian paralel." },
      { option: "Arus listrik berhenti seluruhnya", message: "Salah, hanya cabang putus yang berhenti." },
      { option: "Rangkaian menjadi seri", message: "Salah, rangkaian tetap paralel." },
    ],
    correctIndex: 1,
  },
  {
    question: "Pada rangkaian seri, kuat arus listrik...",
    options: [
      { option: "Bernilai sama di semua titik", message: "Benar! Arus seri sama di semua bagian rangkaian." },
      { option: "Berbeda-beda di setiap lampu", message: "Salah, arus seri sama di seluruh rangkaian." },
      { option: "Tidak mengalir sama sekali", message: "Salah, arus tetap mengalir jika rangkaian tertutup." },
      { option: "Bergantung pada lampu terdekat", message: "Salah, arus seri tidak bergantung pada posisi lampu." },
    ],
    correctIndex: 0,
  },
  {
    question: "Pada rangkaian seri, tegangan lampu-lampu...",
    options: [
      { option: "Bernilai sama di semua lampu", message: "Salah, tegangan berbeda di tiap lampu seri." },
      { option: "Berbeda-beda", message: "Benar! Tegangan tiap lampu seri tidak sama." },
      { option: "Selalu nol", message: "Salah, ada beda potensial pada tiap lampu." },
      { option: "Bergantung pada arus total", message: "Salah, tegangan tiap lampu ditentukan oleh hambatan masing-masing." },
    ],
    correctIndex: 1,
  },
  {
    question: "Pada rangkaian paralel, tegangan listrik pada tiap cabang...",
    options: [
      { option: "Berbeda-beda", message: "Salah, tegangan paralel sama di semua cabang." },
      { option: "Bernilai sama", message: "Benar! Tegangan paralel sama di setiap cabang." },
      { option: "Hanya ada pada cabang utama", message: "Salah, semua cabang memiliki tegangan yang sama." },
      { option: "Tidak ada tegangan", message: "Salah, arus tetap mengalir sehingga ada tegangan." },
    ],
    correctIndex: 1,
  },
  {
    question: "Pada rangkaian paralel, besar arus listrik pada tiap cabang...",
    options: [
      { option: "Bernilai sama", message: "Salah, arus berbeda tergantung hambatan tiap cabang." },
      { option: "Berbeda-beda", message: "Benar! Arus paralel berbeda di tiap cabang." },
      { option: "Selalu nol", message: "Salah, arus tetap mengalir." },
      { option: "Sama dengan arus total", message: "Salah, arus total = jumlah arus tiap cabang." },
    ],
    correctIndex: 1,
  },
  {
    question: "Jika ingin menyalakan beberapa lampu sekaligus hanya dengan satu saklar, rangkaian yang dipilih adalah...",
    options: [
      { option: "Rangkaian seri", message: "Salah, jika salah satu lampu putus, semua lampu mati." },
      { option: "Rangkaian paralel", message: "Benar! Lampu tetap menyala meski salah satu cabang terganggu." },
      { option: "Rangkaian terbuka", message: "Salah, arus tidak mengalir sama sekali." },
      { option: "Rangkaian tertutup", message: "Salah, ini hanya kondisi arus, bukan tipe rangkaian." },
    ],
    correctIndex: 1,
  },
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/rangkaian-listrik"/>
}
