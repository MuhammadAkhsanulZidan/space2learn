import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Jika dua cermin datar disusun membentuk sudut 180°, berapa jumlah bayangan yang terbentuk?",
    options: [
      { option: "1", message: "Masih terlalu sedikit. Pikirkan bagaimana cahaya memantul bolak-balik." },
      { option: "Tak hingga", message: "Benar! Cahaya akan terus dipantulkan bolak-balik, membentuk bayangan tak hingga." },
      { option: "5", message: "Itu terlalu sedikit untuk sudut 180°." },
      { option: "0", message: "Benda tetap memiliki bayangan pada cermin, bahkan jika cermin saling berhadapan." },
    ],
    correctIndex: 1,
  },
  {
    question: "Sifat bayangan yang terbentuk dari dua cermin datar yang saling berhadapan (180°) adalah...",
    options: [
      { option: "Nyata dan terbalik", message: "Keliru. Bayangan pada cermin datar selalu maya dan tegak." },
      { option: "Tegak, maya, dan jumlah tak hingga", message: "Benar! Itulah sifat bayangan pada dua cermin saling berhadapan." },
      { option: "Tegak dan nyata", message: "Bayangan memang tegak, tapi bukan nyata, melainkan maya." },
      { option: "Tidak ada bayangan", message: "Keliru. Justru akan terbentuk sangat banyak bayangan." },
    ],
    correctIndex: 1,
  }
];


export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/sudut-180" />
}