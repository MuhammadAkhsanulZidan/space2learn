import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Apa yang dimaksud dengan tenaga endogen?",
    options: [
      { option: "Tenaga dari dalam bumi yang membentuk permukaan bumi", message: "Benar! Tenaga endogen berasal dari dalam bumi dan membentuk relief permukaan." },
      { option: "Tenaga dari luar bumi yang merusak permukaan bumi", message: "Salah. Itu adalah tenaga eksogen." },
      { option: "Tenaga dari matahari yang mempengaruhi iklim", message: "Salah. Itu termasuk faktor iklim, bukan tenaga endogen." },
      { option: "Tenaga dari air dan angin yang mengendapkan sedimen", message: "Salah. Itu adalah bagian dari tenaga eksogen." },
    ],
    correctIndex: 0,
  },
  {
    question: "Contoh tenaga endogen berikut yang termasuk vulkanisme adalah...",
    options: [
      { option: "Letusan gunung berapi", message: "Benar! Letusan gunung berapi termasuk aktivitas vulkanisme." },
      { option: "Pelapukan batuan oleh air hujan", message: "Salah. Itu termasuk tenaga eksogen." },
      { option: "Pengikisan oleh angin", message: "Salah. Itu juga tenaga eksogen." },
      { option: "Pengendapan pasir di pantai", message: "Salah. Itu proses sedimentasi oleh tenaga eksogen." },
    ],
    correctIndex: 0,
  },
  {
    question: "Apa ciri utama tenaga eksogen?",
    options: [
      { option: "Berasal dari luar bumi dan merusak bentuk permukaan bumi", message: "Benar! Tenaga eksogen merusak dan meratakan bentuk permukaan." },
      { option: "Membentuk pegunungan dan lipatan", message: "Salah. Itu ciri tenaga endogen." },
      { option: "Terjadi karena pergerakan magma", message: "Salah. Itu termasuk vulkanisme, bagian dari tenaga endogen." },
      { option: "Menghasilkan gempa bumi", message: "Salah. Gempa bumi juga akibat tenaga endogen." },
    ],
    correctIndex: 0,
  },
  {
    question: "Yang termasuk contoh tenaga eksogen adalah...",
    options: [
      { option: "Erosi oleh air sungai", message: "Benar! Erosi adalah tenaga eksogen yang mengikis permukaan." },
      { option: "Patahan lempeng bumi", message: "Salah. Itu tenaga endogen (tektonik)." },
      { option: "Letusan gunung api", message: "Salah. Termasuk tenaga endogen." },
      { option: "Pergerakan magma", message: "Salah. Itu bagian dari vulkanisme (endogen)." },
    ],
    correctIndex: 0,
  },
  {
    question: "Proses pengendapan material hasil erosi disebut...",
    options: [
      { option: "Sedimentasi", message: "Benar! Sedimentasi adalah pengendapan hasil erosi." },
      { option: "Pelapukan", message: "Salah. Itu proses penghancuran batuan." },
      { option: "Vulkanisme", message: "Salah. Itu berkaitan dengan magma." },
      { option: "Seisme", message: "Salah. Seisme adalah gempa bumi." },
    ],
    correctIndex: 0,
  },

];

export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/endogen-eksogen" />;
}
