
import Material from "@/components/material/material";
import WaveReflection from "@/components/WaveReflection";

export default function Home() {
  return (
    <Material title="Pemantulan Sinar" quizRoute="/missions/pemantulan/quiz">
      <div className="text-sm">
        <p className="mb-2">
          Pemantulan cahaya adalah peristiwa berubahnya arah rambat cahaya ketika mengenai permukaan benda yang tidak tembus cahaya.
        </p>
        <p className="mb-2 font-semibold">Hukum Pemantulan Cahaya:</p>
        <ul className="list-decimal list-inside ml-4">
          <li>Sinar datang, sinar pantul, dan garis normal terletak pada satu bidang datar.</li>
          <li>Sudut datang (i) sama dengan sudut pantul (r): <strong>i = r</strong>.</li>
        </ul>
      </div>
      <WaveReflection/>
    </Material>
  );
}
