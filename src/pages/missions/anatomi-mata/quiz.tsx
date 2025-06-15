import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Apa fungsi utama kornea pada mata manusia?",
    options: [
      { option: "Sebagai pelindung dan membantu memfokuskan cahaya yang masuk ke mata", message: "Benar! Kornea melindungi mata dan membantu memfokuskan cahaya ke retina." },
      { option: "Mengatur jumlah cahaya yang masuk", message: "Salah. Itu adalah fungsi iris." },
      { option: "Mengubah cahaya menjadi sinyal listrik", message: "Salah. Itu tugas retina." },
      { option: "Mengirimkan sinyal ke otak", message: "Salah. Itu fungsi saraf optik." },
    ],
    correctIndex: 0,
  },
  {
    question: "Bagian mata manakah yang memberi warna pada mata dan berfungsi mengatur jumlah cahaya yang masuk ke dalam mata?",
    options: [
      { option: "Iris", message: "Benar! Iris memberi warna pada mata dan mengatur ukuran pupil untuk mengontrol jumlah cahaya." },
      { option: "Lensa", message: "Salah. Lensa memfokuskan cahaya ke retina." },
      { option: "Retina", message: "Salah. Retina menerima cahaya, bukan mengaturnya." },
      { option: "Kornea", message: "Salah. Kornea hanya memfokuskan cahaya, tidak mengatur jumlahnya." },
    ],
    correctIndex: 0,
  },
  {
    question: "Bagian mata yang berfungsi menangkap cahaya dan mengubahnya menjadi sinyal listrik adalah...",
    options: [
      { option: "Retina", message: "Benar! Retina berisi sel fotoreseptor untuk menangkap cahaya." },
      { option: "Pupil", message: "Salah. Pupil hanya lubang masuk cahaya." },
      { option: "Lensa", message: "Salah. Lensa hanya memfokuskan cahaya." },
      { option: "Iris", message: "Salah. Iris hanya mengatur besar kecil pupil." },
    ],
    correctIndex: 0,
  },
  {
    question: "Bagian mata yang berfungsi membawa sinyal dari mata ke otak adalah...",
    options: [
      { option: "Saraf optik", message: "Benar! Saraf optik meneruskan sinyal ke otak." },
      { option: "Retina", message: "Salah. Retina hanya menangkap cahaya." },
      { option: "Kornea", message: "Salah. Kornea tidak berperan dalam pengiriman sinyal." },
      { option: "Sklera", message: "Salah. Sklera adalah lapisan pelindung luar mata." },
    ],
    correctIndex: 0,
  },
  {
    question: "Bagian mata yang berfungsi untuk memfokuskan cahaya agar jatuh tepat di retina adalah...",
    options: [
      { option: "Lensa", message: "Benar! Lensa dapat berubah bentuk untuk memfokuskan cahaya ke retina." },
      { option: "Pupil", message: "Salah. Pupil hanya mengatur cahaya yang masuk." },
      { option: "Saraf optik", message: "Salah. Saraf optik hanya mengirimkan sinyal ke otak." },
      { option: "Sklera", message: "Salah. Sklera adalah lapisan luar pelindung mata." },
    ],
    correctIndex: 0,
  },
  {
    question: "Miopi (rabun jauh) terjadi ketika bayangan jatuh di...",
    options: [
      { option: "Depan retina, dikoreksi dengan lensa cekung", message: "Benar! Miopi disebabkan oleh bola mata terlalu panjang atau lensa terlalu cembung." },
      { option: "Belakang retina, dikoreksi dengan lensa cembung", message: "Salah. Itu adalah hipermetropi." },
      { option: "Tepat di retina, tidak perlu dikoreksi", message: "Salah. Bayangan tidak jatuh tepat di retina." },
      { option: "Retina, dikoreksi dengan lensa silinder", message: "Salah. Lensa silinder digunakan untuk astigmatisme." },
    ],
    correctIndex: 0,
  },
  {
    question: "Hipermetropi (rabun dekat) terjadi ketika bayangan jatuh di...",
    options: [
      { option: "Belakang retina, dikoreksi dengan lensa cembung", message: "Benar! Hipermetropi terjadi karena bola mata terlalu pendek atau lensa mata kurang mencembung." },
      { option: "Depan retina, dikoreksi dengan lensa cekung", message: "Salah. Itu adalah kondisi miopi." },
      { option: "Retina, dikoreksi dengan lensa silinder", message: "Salah. Lensa silinder untuk astigmatisme." },
      { option: "Di tengah kornea", message: "Salah. Bayangan jatuh di retina, bukan kornea." },
    ],
    correctIndex: 0,
  },
  {
    question: "Apa perbedaan utama antara sel kerucut dan sel batang di retina?",
    options: [
      { option: "Sel kerucut untuk melihat warna, sel batang untuk melihat dalam gelap", message: "Benar! Sel kerucut mendeteksi warna dan bekerja baik di cahaya terang, sedangkan sel batang berfungsi dalam cahaya redup." },
      { option: "Sel kerucut hanya ada di malam hari", message: "Salah. Sel kerucut aktif di cahaya terang." },
      { option: "Sel batang untuk melihat warna", message: "Salah. Sel batang tidak mampu mendeteksi warna." },
      { option: "Keduanya hanya berfungsi di malam hari", message: "Salah. Hanya sel batang yang aktif di malam hari." },
    ],
    correctIndex: 0,
  }

];

export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/anatomi-mata" />;
}
