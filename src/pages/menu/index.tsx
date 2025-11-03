import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface MenuItem {
  label: string
  route: string
}

export default function Menu() {
  const [start, setStart] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // controls when menu appears
  const router = useRouter();

  useEffect(() => {
    // Trigger plane animation first
    setStart(true);

    // Then show menu after animation completes
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 1000); // match duration of flying animation

    return () => clearTimeout(timer);
  }, []);

  const menu: MenuItem[] = [
    {
      label: "Listrik Statis", route: "missions/listrik-statis/quiz"
    },
    {
      label: "Gaya Listrik", route: "missions/gaya-listrik/quiz"
    },
    {
      label: "Medan Listrik", route: "missions/medan-listrik/quiz"
    },
    {
      label: "Potensial Listrik", route: "missions/potensial-listrik/quiz"
    },
    {
      label: "Listrik Dinamis", route: "missions/listrik-dinamis/quiz"
    },
    {
      label: "Arus Listrik", route: "missions/arus-listrik/quiz"
    },
    {
      label: "Rangkaian Listrik", route: "missions/rangkaian-listrik/quiz"
    },
    {
      label: "Sumber Listrik", route: "missions/sumber-listrik/quiz"
    },
    {
      label: "Daya Listrik", route: "missions/daya-listrik/quiz"
    },
    // { label: "Pertumbuhan & Perkembangan", route: "/missions/pertumbuhan-perkembangan" },
    // { label: "Pertumbuhan Manusia", route: "/missions/pertumbuhan-manusia" },
    // { label: "Sifat Cahaya", route: "/missions/sifat-cahaya" },
    // { label: "Hukum Pemantulan Sinar", route: "/missions/pemantulan" },
    // { label: "Jumlah Bayangan Pada Cermin Datar", route: "/missions/bayangan-datar" },
    // { label: "Sifat bayangan pada cermin dengan sudut 180", route: "/missions/sudut-180" },
    // { label: "Cermin cekung", route: "/missions/cekung" },
    // { label: "Cermin cembung", route: "/missions/cembung" },
    // { label: "Lensa divergen", route: "/missions/divergen" },
    // { label: "Lensa konvergen", route: "/missions/konvergen" },
    // { label: "menghitung kuat lensa", route: "/missions/kuat-lensa" },
    // { label: "anatomi mata", route: "/missions/anatomi-mata" },
    // { label: "lapisan atmosfir dan fungsinya", route: "/missions/atmosfer" },
    // { label: "siklus hidrologi", route: "/missions/hidrologi" },
    // { label: "tenaga endogen atau eksogen", route: "/missions/endogen-eksogen" },
    // { label: "gempa bumi", route: "/missions/gempa" },
  ];

  return (
    <div className="min-h-screen text-white p-6 overflow-hidden flex justify-center items-center">
      {showMenu && (
        <div className="w-full flex flex-col items-center gap-8">
          <p className="text-4xl font-bold text-center">Pilih Misimu!</p>
          <div className="w-full max-w-6xl grid gap-6 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            {menu.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(item.route)}
                className="bg-slate-700 capitalize flex flex-col items-center justify-center hover:bg-slate-600 transition rounded-xl p-6 shadow-xl text-center text-lg font-semibold cursor-pointer"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
      {!showMenu && (
        <img
          src="/Sprites/Ships/spaceShips_001.png"
          alt="Spaceship"
          className={`w-32 self-end transition-transform duration-[1500ms] ease-in-out
            ${start ? "-translate-y-[150vh] scale-250" : "scale-250 -translate-y-[-150vh]"}
          `}
        />
      )}
    </div>
  );
}
