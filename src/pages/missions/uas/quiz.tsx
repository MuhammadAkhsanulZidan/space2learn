import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  // 1
  {
    question: "Sebuah balok ditekan pada lantai dengan gaya 200 N dan luas bidang tekan 2 m². Berapa tekanan yang diberikan balok?",
    options: [
      { option: "400 Pa", message: "Salah." },
      { option: "200 Pa", message: "Salah." },
      { option: "300 Pa", message: "Salah." },
      { option: "100 Pa", message: "Benar! P = F/A = 200 / 2 = 100 Pa." },
    ],
    correctIndex: 3,
  },

  // 2
  {
    question: "Seseorang berdiri dengan satu kaki (luas 200 cm²), lalu berdiri dengan dua kaki (total luas 400 cm²). Tekanan saat dua kaki menjadi...",
    options: [
      { option: "Lebih besar", message: "Salah. Luas lebih besar → tekanan lebih kecil." },
      { option: "Lebih kecil", message: "Benar! Tekanan berbanding terbalik dengan luas." },
      { option: "Tetap sama", message: "Salah." },
      { option: "Tidak dapat ditentukan", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 3
  {
    question: "Semakin tinggi suatu tempat dari permukaan laut, maka tekanan udara akan...",
    options: [
      { option: "Semakin besar", message: "Salah." },
      { option: "Semakin kecil", message: "Benar! Ketinggian naik → tekanan turun." },
      { option: "Tetap", message: "Salah." },
      { option: "Tidak menentu", message: "Salah." },
    ],
    correctIndex: 1,
  },

  // 4
  {
    question: "Pada dongkrak hidrolik, gaya kecil dapat mengangkat beban besar karena...",
    options: [
      { option: "Tekanan dalam fluida diteruskan ke segala arah sama besar", message: "Benar! Ini prinsip Hukum Pascal." },
      { option: "Air berubah bentuk", message: "Salah." },
      { option: "Gaya gesek kecil", message: "Salah." },
      { option: "Massa jenis fluida besar", message: "Salah." },
    ],
    correctIndex: 0
  },

  // 5
  {
    question: "Dua lubang pada dinding bak berada pada kedalaman berbeda. Air menyembur lebih jauh dari lubang yang...",
    options: [
      { option: "Paling atas", message: "Salah." },
      { option: "Paling bawah", message: "Benar! Semakin dalam → tekanan makin besar." },
      { option: "Sedang", message: "Salah." },
      { option: "Tidak berhubungan dengan kedalaman", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 6
  {
    question: "Jika tekanan darah seseorang 120/80 mmHg, angka 120 menunjukkan...",
    options: [
      { option: "Tekanan diastolik", message: "Salah." },
      { option: "Tekanan saat jantung memompa darah", message: "Benar! 120 adalah tekanan sistolik." },
      { option: "Tekanan saat jantung istirahat", message: "Salah." },
      { option: "Tekanan nadi", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 7
  {
    question: "Contoh penerapan hukum Pascal terdapat pada...",
    options: [
      { option: "Kapal selam", message: "Salah." },
      { option: "Dongkrak hidrolik", message: "Benar!" },
      { option: "Termometer", message: "Salah." },
      { option: "Pencairan es", message: "Salah." },
    ],
    correctIndex: 1,
  },

  // 8
  {
    question: "Kapal baja dapat terapung di air karena...",
    options: [
      { option: "Massa jenis baja kecil", message: "Salah. Massa jenis baja besar." },
      { option: "Bentuknya membuat gaya angkat lebih besar dari berat kapal", message: "Benar!" },
      { option: "Air menekan ke bawah", message: "Salah." },
      { option: "Udara memampat", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 9
  {
    question: "Partikel yang membawa muatan negatif adalah...",
    options: [
      { option: "Proton", message: "Salah, muatannya positif." },
      { option: "Neutron", message: "Salah, tidak bermuatan." },
      { option: "Elektron", message: "Benar!" },
      { option: "Inti atom", message: "Salah." },
    ],
    correctIndex: 2
  },

  // 10
  {
    question: "Inti atom tersusun atas...",
    options: [
      { option: "Elektron saja", message: "Salah." },
      { option: "Proton dan neutron", message: "Benar!" },
      { option: "Neutron dan elektron", message: "Salah." },
      { option: "Proton dan elektron", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 11
  {
    question: "Ketika penggaris plastik digosok kain wol, penggaris menjadi bermuatan karena...",
    options: [
      { option: "Proton berpindah", message: "Salah, proton tidak berpindah." },
      { option: "Elektron berpindah", message: "Benar!" },
      { option: "Neutron berpindah", message: "Salah." },
      { option: "Atom berpindah", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 12
  {
    question: "Peristiwa listrik statis terjadi akibat...",
    options: [
      { option: "Perpindahan elektron", message: "Benar!" },
      { option: "Perpindahan proton", message: "Salah." },
      { option: "Perubahan bentuk", message: "Salah." },
      { option: "Panas", message: "Salah." },
    ],
    correctIndex: 0
  },

  // 13
  {
    question: "Dua muatan sejenis akan...",
    options: [
      { option: "Saling tarik", message: "Salah." },
      { option: "Saling tolak", message: "Benar!" },
      { option: "Tidak bereaksi", message: "Salah." },
      { option: "Netral", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 14
  {
    question: "Alat untuk mendeteksi muatan listrik adalah...",
    options: [
      { option: "Voltmeter", message: "Salah." },
      { option: "Amperemeter", message: "Salah." },
      { option: "Elektroskop", message: "Benar!" },
      { option: "Barometer", message: "Salah." },
    ],
    correctIndex: 2
  },

  // 15
  {
    question: "Gaya Coulomb akan semakin besar jika...",
    options: [
      { option: "Jarak diperbesar", message: "Salah. Jarak besar → gaya kecil." },
      { option: "Muatan diperbesar", message: "Benar!" },
      { option: "Tidak ada muatan", message: "Salah." },
      { option: "Muatan dinetralkan", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 16
  {
    question: "Atom netral dengan nomor atom 11 memiliki jumlah elektron sebanyak...",
    options: [
      { option: "10", message: "Salah." },
      { option: "11", message: "Benar!" },
      { option: "12", message: "Salah." },
      { option: "22", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 17
  {
    question: "Dua muatan +Q dan +Q berdekatan. Gaya yang terjadi adalah...",
    options: [
      { option: "Tarik-menarik", message: "Salah." },
      { option: "Tolak-menolak", message: "Benar!" },
      { option: "Tidak ada gaya", message: "Salah." },
      { option: "Nol", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 18
  {
    question: "Ion yang berperan dalam impuls saraf adalah...",
    options: [
      { option: "Na⁺ dan Cl⁻", message: "Salah." },
      { option: "Na⁺ dan K⁺", message: "Benar!" },
      { option: "Fe²⁺", message: "Salah." },
      { option: "Mg²⁺", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 19
  {
    question: "Bagian neuron yang menerima rangsangan adalah...",
    options: [
      { option: "Akson", message: "Salah." },
      { option: "Dendrit", message: "Benar!" },
      { option: "Sinapsis", message: "Salah." },
      { option: "Inti sel", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 20
  {
    question: "Fungsi akson pada neuron adalah...",
    options: [
      { option: "Menerima rangsang", message: "Salah." },
      { option: "Menghantarkan impuls ke sel lain", message: "Benar!" },
      { option: "Mengatur gerak sadar", message: "Salah." },
      { option: "Membentuk hormon", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 21
  {
    question: "Benda berikut yang termasuk konduktor adalah...",
    options: [
      { option: "Karet", message: "Salah, ini isolator." },
      { option: "Plastik", message: "Salah." },
      { option: "Tembaga", message: "Benar!" },
      { option: "Kain", message: "Salah." },
    ],
    correctIndex: 2
  },

  // 22
  {
    question: "Yang termasuk isolator adalah...",
    options: [
      { option: "Aluminium", message: "Salah." },
      { option: "Besi", message: "Salah." },
      { option: "Karet", message: "Benar!" },
      { option: "Perak", message: "Salah." },
    ],
    correctIndex: 2
  },

  // 23
  {
    question: "Kawat listrik umumnya dibuat dari...",
    options: [
      { option: "Kertas", message: "Salah." },
      { option: "Tembaga", message: "Benar!" },
      { option: "Karet", message: "Salah." },
      { option: "Kayu", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 24
  {
    question: "Rangkaian listrik di rumah umumnya menggunakan rangkaian...",
    options: [
      { option: "Seri", message: "Salah." },
      { option: "Paralel", message: "Benar!" },
      { option: "Campuran", message: "Salah." },
      { option: "Tertutup", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 25
  {
    question: "Jika satu lampu pada rangkaian seri putus, maka lampu lainnya...",
    options: [
      { option: "Tetap menyala", message: "Salah." },
      { option: "Redup", message: "Salah." },
      { option: "Mati semua", message: "Benar!" },
      { option: "Lebih terang", message: "Salah." },
    ],
    correctIndex: 2
  },

  // 26
  {
    question: "Jika V meningkat dan R tetap, maka arus I akan...",
    options: [
      { option: "Naik", message: "Benar!" },
      { option: "Turun", message: "Salah." },
      { option: "Tetap", message: "Salah." },
      { option: "Nol", message: "Salah." },
    ],
    correctIndex: 0
  },

  // 27
  {
    question: "Diketahui V = 10 V dan R = 5 Ω, maka arus I = ...",
    options: [
      { option: "1 A", message: "Salah." },
      { option: "2 A", message: "Benar!" },
      { option: "5 A", message: "Salah." },
      { option: "10 A", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 28
  {
    question: "Hambatan total 2 Ω dan 3 Ω paralel adalah...",
    options: [
      { option: "1,2 Ω", message: "Benar!" },
      { option: "5 Ω", message: "Salah." },
      { option: "6 Ω", message: "Salah." },
      { option: "0,5 Ω", message: "Salah." },
    ],
    correctIndex: 0
  },

  // 29
  {
    question: "Dua benda bermuatan + dan – jika didekatkan maka akan...",
    options: [
      { option: "Tolak-menolak", message: "Salah." },
      { option: "Tarik-menarik", message: "Benar!" },
      { option: "Netral", message: "Salah." },
      { option: "Tidak berubah", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 30
  {
    question: "Jika muatan 10 C mengalir dengan arus 2 A, waktu yang dibutuhkan adalah...",
    options: [
      { option: "2 detik", message: "Salah." },
      { option: "5 detik", message: "Benar! t = Q/I = 10/2 = 5 s." },
      { option: "10 detik", message: "Salah." },
      { option: "20 detik", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 31
  {
    question: "Garis gaya listrik keluar dari...",
    options: [
      { option: "Muatan negatif", message: "Salah." },
      { option: "Muatan positif", message: "Benar!" },
      { option: "Netral", message: "Salah." },
      { option: "Tanah", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 32
  {
    question: "Dua hambatan 4 Ω dan 6 Ω seri. Hambatan total adalah...",
    options: [
      { option: "2 Ω", message: "Salah." },
      { option: "4 Ω", message: "Salah." },
      { option: "6 Ω", message: "Salah." },
      { option: "10 Ω", message: "Benar!" },
    ],
    correctIndex: 3
  },

  // 33
  {
    question: "Jika V = 12 V dan R_total = 3 Ω, arus yang mengalir adalah...",
    options: [
      { option: "1 A", message: "Salah." },
      { option: "2 A", message: "Salah." },
      { option: "3 A", message: "Salah." },
      { option: "4 A", message: "Benar!" },
    ],
    correctIndex: 3
  },

  // 34
  {
    question: "Kutub yang senama pada magnet akan...",
    options: [
      { option: "Tarik-menarik", message: "Salah." },
      { option: "Tolak-menolak", message: "Benar!" },
      { option: "Diam", message: "Salah." },
      { option: "Netral", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 35
  {
    question: "Contoh penggunaan magnet adalah...",
    options: [
      { option: "Kompor gas", message: "Salah." },
      { option: "Kompas", message: "Benar!" },
      { option: "Termometer", message: "Salah." },
      { option: "Lampu pijar", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 36
  {
    question: "Pengeras suara bekerja dengan prinsip...",
    options: [
      { option: "Hambatan listrik", message: "Salah." },
      { option: "Gaya magnet", message: "Benar!" },
      { option: "Panas", message: "Salah." },
      { option: "Cahaya", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 37
  {
    question: "Benda berikut yang dapat ditarik magnet adalah...",
    options: [
      { option: "Plastik", message: "Salah." },
      { option: "Kayu", message: "Salah." },
      { option: "Besi", message: "Benar!" },
      { option: "Kaca", message: "Salah." },
    ],
    correctIndex: 2
  },

  // 38
  {
    question: "Kutub utara dan selatan magnet akan...",
    options: [
      { option: "Tolak-menolak", message: "Salah." },
      { option: "Tarik-menarik", message: "Benar!" },
      { option: "Tetap", message: "Salah." },
      { option: "Lepas", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 39
  {
    question: "Baterai menghasilkan arus jenis...",
    options: [
      { option: "AC", message: "Salah." },
      { option: "DC", message: "Benar!" },
      { option: "AC dan DC", message: "Salah." },
      { option: "Tidak ada arus", message: "Salah." },
    ],
    correctIndex: 1
  },

  // 40
  {
    question: "Yang termasuk energi terbarukan adalah...",
    options: [
      { option: "Batu bara", message: "Salah." },
      { option: "Minyak bumi", message: "Salah." },
      { option: "Energi surya", message: "Benar!" },
      { option: "Gas alam", message: "Salah." },
    ],
    correctIndex: 2
  },
];

export default function Home() {
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/uas/quiz" />;
}
