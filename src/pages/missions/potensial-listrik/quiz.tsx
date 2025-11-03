import PlaneQuizGame from "@/components/quiz/Quiz";

const questionData = [
  {
    question: "Apa yang sebenarnya mengalir saat kita tersengat listrik dari stop kontak?",
    options: [
      { option: "Ion positif", message: "Salah, aliran di stop kontak adalah elektron, bukan ion." },
      { option: "Elektron", message: "Benar! Yang mengalir adalah elektron dari beda potensial listrik." },
      { option: "Proton", message: "Salah, proton tidak berpindah dalam sirkuit listrik rumah." },
      { option: "Gelombang magnetik", message: "Salah, bukan gelombang magnetik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Beda potensial listrik dapat dihitung menggunakan rumus...",
    options: [
      { option: "V = I × R", message: "Salah, itu hukum Ohm." },
      { option: "V = W / Q", message: "Benar! Beda potensial V adalah energi per muatan." },
      { option: "V = F / q", message: "Salah, itu rumus medan listrik." },
      { option: "V = k × Q / r²", message: "Salah, itu rumus medan listrik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Satuan beda potensial listrik adalah...",
    options: [
      { option: "Coulomb (C)", message: "Salah, itu satuan muatan listrik." },
      { option: "Joule (J)", message: "Salah, itu satuan energi." },
      { option: "Volt (V)", message: "Benar! Beda potensial diukur dalam Volt." },
      { option: "Ampere (A)", message: "Salah, itu satuan arus listrik." },
    ],
    correctIndex: 2,
  },
  {
    question: "Apa yang dimaksud dengan biolistrik?",
    options: [
      { option: "Aliran arus listrik dalam kabel listrik", message: "Salah, biolistrik hanya terjadi pada makhluk hidup." },
      { option: "Aliran impuls listrik pada makhluk hidup, khususnya manusia", message: "Benar! Biolistrik mempelajari impuls listrik tubuh." },
      { option: "Energi panas tubuh", message: "Salah, ini bukan biolistrik." },
      { option: "Aliran air dalam tubuh manusia", message: "Salah, aliran cairan tidak disebut biolistrik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Bagian tubuh yang memproduksi dan menyalurkan impuls listrik adalah...",
    options: [
      { option: "Otot", message: "Salah, otot menanggapi impuls tapi bukan penghasil utama." },
      { option: "Saraf", message: "Benar! Jaringan saraf menghasilkan dan menyalurkan impuls listrik." },
      { option: "Kulit", message: "Salah, kulit hanya isolator alami." },
      { option: "Pembuluh darah", message: "Salah, pembuluh darah tidak menyalurkan impuls listrik." },
    ],
    correctIndex: 1,
  },
  {
    question: "Apa saja bagian utama sel saraf?",
    options: [
      { option: "Badan sel saraf, dendrit, dan akson/neuron", message: "Benar! Tiga bagian utama sel saraf adalah badan sel, dendrit, dan akson." },
      { option: "Myelin, dendrit, dan glia", message: "Salah, myelin bukan bagian utama sel saraf." },
      { option: "Dendrit, akson, dan mitokondria", message: "Salah, mitokondria ada di semua sel tapi bukan bagian khusus sel saraf." },
      { option: "Badan sel, akson, dan glia", message: "Salah, glia bukan bagian utama sel saraf." },
    ],
    correctIndex: 0,
  },
  {
    question: "Apa fungsi selubung myelin pada akson?",
    options: [
      { option: "Menghasilkan impuls listrik", message: "Salah, myelin tidak menghasilkan impuls." },
      { option: "Menyelubungi akson untuk mempercepat transmisi impuls listrik", message: "Benar! Myelin mempercepat konduksi impuls saraf." },
      { option: "Menghentikan aliran ion", message: "Salah, myelin tidak menghentikan aliran ion." },
      { option: "Menangkap rangsangan dari panca indera", message: "Salah, itu fungsi dendrit." },
    ],
    correctIndex: 1,
  },
  {
    question: "Beda potensial pada jaringan saraf berbeda dengan listrik rumah. Apa yang mengalir di jaringan saraf?",
    options: [
      { option: "Arus elektron", message: "Salah, bukan elektron seperti pada kabel listrik." },
      { option: "Ion di dalam tubuh", message: "Benar! Arus listrik saraf berupa pergerakan ion." },
      { option: "Gelombang elektromagnetik", message: "Salah, ini bukan mekanisme saraf." },
      { option: "Muatan statis", message: "Salah, ini bukan listrik statis." },
    ],
    correctIndex: 1,
  },
  {
    question: "Neuron yang memiliki selubung myelin disebut...",
    options: [
      { option: "Neuron berselubung myelin", message: "Benar! Ada neuron berselubung myelin dan yang tidak." },
      { option: "Neuron tak berselubung", message: "Salah, itu neuron yang tidak memiliki myelin." },
      { option: "Glia", message: "Salah, glia bukan neuron." },
      { option: "Akson", message: "Salah, akson adalah bagian dari neuron, bukan jenis neuron." },
    ],
    correctIndex: 0,
  },
];

export default function Home(){
  return <PlaneQuizGame questions={questionData} materialRoute="/missions/potensial-listrik"/>
}
