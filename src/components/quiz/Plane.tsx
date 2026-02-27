import Image from "next/image";
import { RefObject } from "react";

type PlaneProps = {
  planeX: string;
  planeRef: RefObject<HTMLDivElement | null>; // <-- Fix here
};

export default function Plane({ planeX, planeRef }: PlaneProps) {
  return (
    <div
      ref={planeRef}
      className="absolute bottom-25 z-20 transition-all duration-500"
      style={{ left: planeX, transform: "translateX(-50%)" }}
    >
      <Image
        src="/Sprites/Ships/spaceShips_001.png"
        alt="Plane"
        width={100}
        height={100}
      />
    </div>
  );
}
