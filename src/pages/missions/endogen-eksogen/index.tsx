import Material from "@/components/material/material";

export default function Home() {
  return (
    <Material title="Tenaga Endogen dan Eksogen" quizRoute="/missions/endogen-eksogen/quiz">
      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          Permukaan bumi tidaklah tetap. Ada dua kekuatan besar yang bekerja secara terus-menerus membentuk dan mengubahnya, yaitu <strong>tenaga endogen</strong> dan <strong>tenaga eksogen</strong>.
        </p>

        <div className="text-white p-3 rounded">
          <p className="font-semibold underline">Tenaga Endogen</p>
          <p className="mt-1">
            Tenaga endogen adalah tenaga yang berasal dari dalam bumi dan bersifat membentuk permukaan bumi. Tenaga ini menyebabkan terjadinya gunung meletus, gempa bumi, dan pembentukan pegunungan.
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Vulkanisme:</strong> aktivitas magma dari dalam bumi (misalnya gunung meletus).</li>
            <li><strong>Tektonisme:</strong> pergerakan lempeng bumi (misalnya pembentukan pegunungan).</li>
            <li><strong>Seisme:</strong> getaran atau gempa akibat pergeseran lempeng atau letusan.</li>
          </ul>
        </div>

        <div className=" text-white p-3 rounded">
          <p className="font-semibold underline">Tenaga Eksogen</p>
          <p className="mt-1">
            Tenaga eksogen berasal dari luar bumi dan bersifat merusak atau meratakan permukaan bumi. Tenaga ini berasal dari angin, air, suhu, dan makhluk hidup.
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Pelapukan:</strong> penghancuran batuan oleh suhu, air, dan organisme.</li>
            <li><strong>Erosi:</strong> pengikisan permukaan bumi oleh air, angin, atau gletser.</li>
            <li><strong>Sedimentasi:</strong> pengendapan material hasil erosi dan pelapukan.</li>
          </ul>
        </div>
      </div>
    </Material>
  );
}
