import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Mengapa helai rambut dapat berdiri setelah disisir dengan sisir plastik pada rambut kering?",
    options: [
      { option: "Karena udara panas membuat rambut ringan", message: "Bukan, udara panas tidak menyebabkan gaya listrik." },
      { option: "Karena terjadi perpindahan elektron antara sisir dan rambut", message: "Benar! Gesekan memindahkan elektron, menyebabkan listrik statis." },
      { option: "Karena rambut menjadi basah", message: "Salah, rambut basah justru mengurangi efek listrik statis." },
      { option: "Karena rambut kehilangan proton", message: "Salah, proton tidak mudah berpindah dari atom." },
    ],
    correctIndex: 1,
  },
  {
    question: "Apa yang dimaksud dengan listrik statis?",
    options: [
      { option: "Aliran listrik yang terus-menerus dari sumber listrik", message: "Salah, itu listrik dinamis." },
      { option: "Perpindahan muatan listrik dari satu benda ke benda lain tanpa sumber listrik", message: "Benar! Itulah definisi listrik statis." },
      { option: "Panas yang timbul akibat gesekan", message: "Salah, listrik statis bukan panas." },
      { option: "Energi yang dihasilkan oleh baterai", message: "Salah, baterai menghasilkan listrik dinamis." },
    ],
    correctIndex: 1,
  },
  {
    question: "Apa yang terjadi jika dua benda bermuatan sejenis didekatkan?",
    options: [
      { option: "Saling tarik-menarik", message: "Salah, benda bermuatan sejenis saling tolak-menolak." },
      { option: "Saling tolak-menolak", message: "Benar! Muatan sejenis menolak satu sama lain." },
      { option: "Tidak terjadi apa-apa", message: "Salah, tetap ada gaya listrik di antara keduanya." },
      { option: "Menjadi netral", message: "Salah, benda tidak otomatis menjadi netral." },
    ],
    correctIndex: 1,
  },
  {
    question: "Apa fungsi alat elektroskop?",
    options: [
      { option: "Mengukur suhu udara", message: "Salah, itu fungsi termometer." },
      { option: "Menentukan besar gaya gravitasi", message: "Salah, itu bukan fungsi elektroskop." },
      { option: "Mendeteksi ada tidaknya muatan listrik pada benda", message: "Benar! Elektroskop digunakan untuk mendeteksi muatan listrik." },
      { option: "Mengukur arus listrik dalam kabel", message: "Salah, itu fungsi amperemeter." },
    ],
    correctIndex: 2,
  },
  {
    question: "Mengapa aluminium foil pada elektroskop dapat terbuka ketika didekatkan benda bermuatan?",
    options: [
      { option: "Karena udara panas di sekitar foil", message: "Salah, bukan karena panas." },
      { option: "Karena terjadi induksi muatan listrik di foil", message: "Benar! Muatan benda memengaruhi distribusi muatan di foil (induksi listrik)." },
      { option: "Karena aluminium foil ringan", message: "Salah, meskipun ringan, penyebabnya adalah induksi muatan." },
      { option: "Karena foil memiliki magnet", message: "Salah, ini bukan fenomena magnetik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Bagaimana cara membuat benda netral menjadi bermuatan listrik?",
    options: [
      { option: "Dengan menambahkan proton", message: "Salah, proton tidak mudah berpindah." },
      { option: "Dengan menggosokkan benda pada benda lain", message: "Benar! Gesekan memindahkan elektron dan menghasilkan muatan listrik." },
      { option: "Dengan menambahkan panas", message: "Salah, panas tidak membuat benda bermuatan." },
      { option: "Dengan mendinginkan benda", message: "Salah, pendinginan tidak memengaruhi muatan listrik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Apa yang menyebabkan percikan api pada rel kereta atau jalan aspal saat kendaraan lewat?",
    options: [
      { option: "Gesekan menghasilkan perbedaan muatan listrik", message: "Benar! Gesekan menyebabkan listrik statis yang dapat memicu percikan." },
      { option: "Kereta membawa listrik dari baterai", message: "Salah, bukan karena baterai." },
      { option: "Cahaya pantulan logam", message: "Salah, bukan efek cahaya." },
      { option: "Udara di sekitar rel sangat panas", message: "Salah, bukan karena suhu." },
    ],
    correctIndex: 0,
  },
  {
    question: "Apa yang terjadi jika benda bermuatan positif dan benda bermuatan negatif didekatkan?",
    options: [
      { option: "Saling tolak-menolak", message: "Salah, muatan berlawanan justru saling tarik-menarik." },
      { option: "Saling tarik-menarik", message: "Benar! Muatan berbeda saling tarik-menarik." },
      { option: "Menjadi netral tanpa kontak", message: "Salah, harus ada perpindahan muatan." },
      { option: "Tidak terjadi apa-apa", message: "Salah, pasti ada gaya listrik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Apa yang dimaksud dengan benda netral?",
    options: [
      { option: "Benda yang memiliki muatan positif lebih banyak", message: "Salah, itu benda bermuatan positif." },
      { option: "Benda yang jumlah elektron dan protonnya seimbang", message: "Benar! Benda netral memiliki jumlah muatan positif dan negatif sama." },
      { option: "Benda tanpa atom", message: "Salah, semua benda tersusun atas atom." },
      { option: "Benda yang tidak bisa bermuatan listrik", message: "Salah, benda netral bisa dibuat bermuatan." },
    ],
    correctIndex: 1,
  },
  {
    question: "Fenomena listrik statis dapat terjadi tanpa memerlukan...",
    options: [
      { option: "Gesekan antara dua benda", message: "Salah, gesekan justru sering memicunya." },
      { option: "Sumber listrik seperti stop kontak", message: "Benar! Listrik statis tidak butuh sumber listrik eksternal." },
      { option: "Elektron di dalam atom", message: "Salah, elektron justru penyebabnya." },
      { option: "Muatan positif", message: "Salah, muatan positif tetap terlibat." },
    ],
    correctIndex: 1,
  },
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/menu"/>
}
