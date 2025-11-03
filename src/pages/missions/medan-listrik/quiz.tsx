import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Apa yang dimaksud dengan medan listrik?",
    options: [
      { option: "Daerah di sekitar benda bermuatan yang menimbulkan pengaruh gaya listrik terhadap muatan lain", message: "Benar! Medan listrik adalah daerah pengaruh suatu muatan." },
      { option: "Arus listrik yang mengalir melalui konduktor", message: "Salah, itu listrik dinamis, bukan medan listrik." },
      { option: "Gaya tarik bumi terhadap benda bermassa", message: "Salah, itu gaya gravitasi." },
      { option: "Muatan yang dilepaskan ke udara", message: "Salah, itu bukan definisi medan listrik." },
    ],
    correctIndex: 0,
  },
  {
    question: "Arah garis medan listrik keluar dari muatan menunjukkan...",
    options: [
      { option: "Muatan positif", message: "Benar! Garis keluar menandakan muatan positif." },
      { option: "Muatan negatif", message: "Salah, garis masuk menandakan muatan negatif." },
      { option: "Benda netral", message: "Salah, benda netral tidak menghasilkan medan listrik." },
      { option: "Muatan uji", message: "Salah, muatan uji hanya digunakan untuk mengukur medan." },
    ],
    correctIndex: 0,
  },
  {
    question: "Arah garis medan listrik masuk ke dalam muatan menunjukkan...",
    options: [
      { option: "Muatan positif", message: "Salah, garis masuk menandakan muatan negatif." },
      { option: "Muatan negatif", message: "Benar! Garis masuk menandakan muatan negatif." },
      { option: "Muatan netral", message: "Salah, benda netral tidak menghasilkan medan listrik." },
      { option: "Muatan uji positif", message: "Salah, muatan uji hanya digunakan untuk mengukur medan." },
    ],
    correctIndex: 1,
  },
  {
    question: "Bagaimana cara menentukan besar kuat medan listrik di suatu titik?",
    options: [
      { option: "Dengan mengukur arus listrik yang mengalir di konduktor", message: "Salah, arus listrik bukan cara mengukur medan." },
      { option: "Dengan membagi gaya listrik (F) yang bekerja pada muatan uji (q0) dengan besar muatan uji", message: "Benar! Rumus E = F/q0 digunakan untuk menentukan kuat medan listrik." },
      { option: "Dengan menjumlahkan muatan semua benda di sekitarnya", message: "Salah, medan listrik tergantung jarak dan muatan, bukan penjumlahan sederhana." },
      { option: "Dengan mengukur tegangan di antara dua titik", message: "Salah, tegangan berbeda dengan medan listrik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Rumus kuat medan listrik yang dihasilkan oleh muatan Q pada jarak r adalah...",
    options: [
      { option: "E = k × Q × r²", message: "Salah, jarak harus di penyebut kuadrat, bukan perkalian." },
      { option: "E = k × Q / r²", message: "Benar! Itulah rumus medan listrik E = kQ/r²." },
      { option: "E = F × q0", message: "Salah, E = F/q0, bukan perkalian." },
      { option: "E = k × F / r", message: "Salah, rumus tidak sesuai hukum Coulomb." },
    ],
    correctIndex: 1,
  },
  {
    question: "Jika muatan uji q0 lebih kecil, apakah kuat medan listrik yang dialaminya berubah?",
    options: [
      { option: "Ya, semakin kecil q0 maka E semakin kecil", message: "Salah, kuat medan listrik E tidak tergantung pada muatan uji." },
      { option: "Tidak, E tetap sama karena E = F/q0", message: "Benar! E hanya bergantung pada muatan sumber Q dan jarak r." },
      { option: "Ya, semakin kecil q0 maka E semakin besar", message: "Salah, E tidak berubah dengan q0." },
      { option: "E menjadi nol", message: "Salah, E tidak menjadi nol karena q0 kecil." },
    ],
    correctIndex: 1,
  },
  {
    question: "Satuan kuat medan listrik adalah...",
    options: [
      { option: "Newton per Coulomb (N/C)", message: "Benar! Satuan resmi kuat medan listrik adalah N/C." },
      { option: "Coulomb per Newton (C/N)", message: "Salah, ini terbalik." },
      { option: "Volt (V)", message: "Salah, volt adalah satuan potensial listrik." },
      { option: "Ampere (A)", message: "Salah, ampere adalah satuan arus listrik." },
    ],
    correctIndex: 0,
  },
  {
    question: "Medan listrik yang dihasilkan oleh muatan positif di suatu titik akan...",
    options: [
      { option: "Menarik muatan uji positif ke muatan sumber", message: "Salah, muatan sejenis saling tolak-menolak." },
      { option: "Menolak muatan uji positif menjauhi muatan sumber", message: "Benar! Muatan sejenis saling tolak-menolak." },
      { option: "Menarik muatan uji negatif menjauhi muatan sumber", message: "Salah, muatan negatif justru tertarik ke muatan positif." },
      { option: "Tidak memengaruhi muatan uji", message: "Salah, selalu ada pengaruh gaya listrik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Bagaimana besar medan listrik berubah jika jarak dari muatan sumber diperbesar dua kali lipat?",
    options: [
      { option: "E menjadi setengah", message: "Salah, medan listrik berbanding terbalik dengan kuadrat jarak." },
      { option: "E menjadi seperempat", message: "Benar! E ∝ 1/r², jadi jika r menjadi 2r, E menjadi 1/4." },
      { option: "E tetap sama", message: "Salah, medan listrik menurun jika jarak bertambah." },
      { option: "E menjadi dua kali lipat", message: "Salah, medan listrik berkurang, bukan bertambah." },
    ],
    correctIndex: 1,
  },
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/medan-listrik"/>
}
