import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Sebuah persegi memiliki sisi 12 cm. Berapakah luas dan kelilingnya?",
    options: [
      { option: "Luas = 144 cm² dan Keliling = 48 cm", message: "Benar! Luas = 12×12 dan Keliling = 4×12." },
      { option: "Luas = 124 cm² dan Keliling = 48 cm", message: "Salah, luas persegi adalah s × s." },
      { option: "Luas = 144 cm² dan Keliling = 36 cm", message: "Salah, keliling persegi adalah 4 × s." },
      { option: "Luas = 120 cm² dan Keliling = 40 cm", message: "Salah, perhitungan tidak tepat." },
    ],
    correctIndex: 0,
  },
  {
    question: "Persegi panjang memiliki panjang 15 cm dan lebar 8 cm. Hitung luas dan kelilingnya.",
    options: [
      { option: "Luas = 120 cm² dan Keliling = 46 cm", message: "Benar! Luas = p×l dan Keliling = 2(p+l)." },
      { option: "Luas = 130 cm² dan Keliling = 46 cm", message: "Salah, luas harus p × l." },
      { option: "Luas = 120 cm² dan Keliling = 40 cm", message: "Salah, keliling adalah 2(p+l)." },
      { option: "Luas = 100 cm² dan Keliling = 46 cm", message: "Salah, luas tidak tepat." },
    ],
    correctIndex: 0,
  },
  {
    question: "Segitiga memiliki alas 10 cm, tinggi 6 cm, dan sisi lainnya 8 cm serta 10 cm. Berapakah luas dan kelilingnya?",
    options: [
      { option: "Luas = 30 cm² dan Keliling = 28 cm", message: "Benar! Luas = ½×10×6 dan Keliling = 10+8+10." },
      { option: "Luas = 60 cm² dan Keliling = 28 cm", message: "Salah, luas segitiga harus dikali ½." },
      { option: "Luas = 30 cm² dan Keliling = 24 cm", message: "Salah, jumlah sisi belum benar." },
      { option: "Luas = 20 cm² dan Keliling = 30 cm", message: "Salah, perhitungan tidak sesuai rumus." },
    ],
    correctIndex: 0,
  },
  {
    question: "Lingkaran memiliki jari-jari 7 cm (π = 22/7). Hitung luas dan kelilingnya.",
    options: [
      { option: "Luas = 154 cm² dan Keliling = 44 cm", message: "Benar! Luas = πr² dan Keliling = 2πr." },
      { option: "Luas = 144 cm² dan Keliling = 44 cm", message: "Salah, luas harus π × r²." },
      { option: "Luas = 154 cm² dan Keliling = 40 cm", message: "Salah, keliling harus 2πr." },
      { option: "Luas = 200 cm² dan Keliling = 44 cm", message: "Salah, perhitungan luas tidak tepat." },
    ],
    correctIndex: 0,
  },
  {
    question: "Kubus memiliki sisi 6 cm. Berapakah volume dan luas permukaannya?",
    options: [
      { option: "Volume = 216 cm³ dan Luas permukaan = 216 cm²", message: "Benar! Volume = s³ dan LP = 6s²." },
      { option: "Volume = 216 cm³ dan Luas permukaan = 180 cm²", message: "Salah, luas permukaan = 6 × s²." },
      { option: "Volume = 200 cm³ dan Luas permukaan = 216 cm²", message: "Salah, volume = s³." },
      { option: "Volume = 180 cm³ dan Luas permukaan = 180 cm²", message: "Salah, keduanya tidak tepat." },
    ],
    correctIndex: 0,
  },
  {
    question: "Balok memiliki panjang 10 cm, lebar 6 cm, dan tinggi 4 cm. Hitung volume dan luas permukaannya.",
    options: [
      { option: "Volume = 240 cm³ dan Luas permukaan = 248 cm²", message: "Benar! V = p×l×t dan LP = 2(pl+pt+lt)." },
      { option: "Volume = 200 cm³ dan Luas permukaan = 248 cm²", message: "Salah, volume tidak tepat." },
      { option: "Volume = 240 cm³ dan Luas permukaan = 200 cm²", message: "Salah, luas permukaan belum benar." },
      { option: "Volume = 260 cm³ dan Luas permukaan = 260 cm²", message: "Salah, perhitungan keliru." },
    ],
    correctIndex: 0,
  },
  {
    question: "Prisma segitiga memiliki luas alas 20 cm² dan tinggi 15 cm. Jika keliling alas 18 cm, hitung volume dan luas selimutnya.",
    options: [
      { option: "Volume = 300 cm³ dan Luas selimut = 270 cm²", message: "Benar! V = luas alas×tinggi dan selimut = keliling×tinggi." },
      { option: "Volume = 200 cm³ dan Luas selimut = 270 cm²", message: "Salah, volume belum tepat." },
      { option: "Volume = 300 cm³ dan Luas selimut = 200 cm²", message: "Salah, luas selimut harus keliling×tinggi." },
      { option: "Volume = 250 cm³ dan Luas selimut = 250 cm²", message: "Salah, perhitungan keliru." },
    ],
    correctIndex: 0,
  },
  {
    question: "Limas persegi memiliki luas alas 64 cm² dan tinggi 9 cm. Hitung volumenya.",
    options: [
      { option: "Volume = 192 cm³", message: "Benar! V = ⅓ × luas alas × tinggi." },
      { option: "Volume = 576 cm³", message: "Salah, harus dikali ⅓." },
      { option: "Volume = 256 cm³", message: "Salah, perhitungan belum tepat." },
      { option: "Volume = 300 cm³", message: "Salah, gunakan rumus ⅓ × L × t." },
    ],
    correctIndex: 0,
  },
  {
    question: "Tabung memiliki jari-jari 7 cm dan tinggi 10 cm (π = 22/7). Hitung volumenya.",
    options: [
      { option: "Volume = 1540 cm³", message: "Benar! V = πr²t." },
      { option: "Volume = 1400 cm³", message: "Salah, hitung r² dahulu." },
      { option: "Volume = 1500 cm³", message: "Salah, perhitungan belum tepat." },
      { option: "Volume = 1600 cm³", message: "Salah, gunakan π × r² × t." },
    ],
    correctIndex: 0,
  },
  {
    question: "Kerucut memiliki jari-jari 7 cm dan tinggi 24 cm (π = 22/7). Hitung volumenya.",
    options: [
      { option: "Volume = 1232 cm³", message: "Benar! V = ⅓ × π × r² × t." },
      { option: "Volume = 3696 cm³", message: "Salah, harus dikali ⅓." },
      { option: "Volume = 1000 cm³", message: "Salah, perhitungan belum tepat." },
      { option: "Volume = 1500 cm³", message: "Salah, gunakan rumus dengan benar." },
    ],
    correctIndex: 0,
  },
  {
    question: "Sebuah persegi memiliki sisi 9 cm. Berapakah luas dan kelilingnya?",
    options: [
      { option: "Luas = 81 cm² dan Keliling = 36 cm", message: "Benar! 9×9 dan 4×9." },
      { option: "Luas = 72 cm² dan Keliling = 36 cm", message: "Salah, luas harus s²." },
      { option: "Luas = 81 cm² dan Keliling = 30 cm", message: "Salah, keliling harus 4s." },
      { option: "Luas = 90 cm² dan Keliling = 40 cm", message: "Salah, perhitungan keliru." },
    ],
    correctIndex: 0,
  },
  {
    question: "Persegi panjang memiliki panjang 20 cm dan lebar 5 cm. Hitung luas dan kelilingnya.",
    options: [
      { option: "Luas = 100 cm² dan Keliling = 50 cm", message: "Benar! p×l dan 2(p+l)." },
      { option: "Luas = 120 cm² dan Keliling = 50 cm", message: "Salah, luas tidak tepat." },
      { option: "Luas = 100 cm² dan Keliling = 40 cm", message: "Salah, keliling belum benar." },
      { option: "Luas = 80 cm² dan Keliling = 50 cm", message: "Salah, luas harus p×l." },
    ],
    correctIndex: 0,
  },
  {
    question: "Lingkaran memiliki diameter 14 cm (π = 22/7). Hitung luas dan kelilingnya.",
    options: [
      { option: "Luas = 154 cm² dan Keliling = 44 cm", message: "Benar! r = 7 cm." },
      { option: "Luas = 200 cm² dan Keliling = 44 cm", message: "Salah, luas belum tepat." },
      { option: "Luas = 154 cm² dan Keliling = 40 cm", message: "Salah, keliling harus 2πr." },
      { option: "Luas = 100 cm² dan Keliling = 30 cm", message: "Salah, perhitungan keliru." },
    ],
    correctIndex: 0,
  },
  {
    question: "Tabung memiliki jari-jari 5 cm dan tinggi 14 cm (π = 3,14). Hitung luas selimutnya.",
    options: [
      { option: "Luas selimut = 439,6 cm²", message: "Benar! 2πrt." },
      { option: "Luas selimut = 300 cm²", message: "Salah, gunakan 2πrt." },
      { option: "Luas selimut = 500 cm²", message: "Salah, perhitungan belum tepat." },
      { option: "Luas selimut = 350 cm²", message: "Salah, hitung dengan benar." },
    ],
    correctIndex: 0,
  },
  {
    question: "Kerucut memiliki jari-jari 3 cm dan garis pelukis 5 cm (π = 3,14). Hitung luas selimutnya.",
    options: [
      { option: "Luas selimut = 47,1 cm²", message: "Benar! πrs." },
      { option: "Luas selimut = 30 cm²", message: "Salah, gunakan π × r × s." },
      { option: "Luas selimut = 60 cm²", message: "Salah, perhitungan belum tepat." },
      { option: "Luas selimut = 40 cm²", message: "Salah, hitung kembali." },
    ],
    correctIndex: 0,
  }
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/listrik-dinamis"/>
}
