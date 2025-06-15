"use client";
import Image from "next/image";

export default function Meteor({
  id,
  index,
  destroyed,
  justHit,
  optionText,
  onShoot,
}: {
  id: string;
  index: number;
  destroyed: boolean;
  justHit: boolean;
  optionText: string;
  onShoot: () => void;
}) {
  return (
    <div
      key={index}
      id={id}
      className={`transition-transform duration-300 ${
        destroyed ? "scale-0" : "scale-100"
      } w-full flex flex-col items-center text-center text-white`}
    >
      {justHit ? (
        <Image
          src="/Sprites/Effects/explosion00.png"
          alt="Explosion"
          width={80}
          height={80}
        />
      ) : (
        <Image
          src="/Sprites/Meteors/spaceMeteors_003.png"
          alt="Meteor"
          width={60}
          height={60}
          onClick={onShoot}
          className="cursor-pointer hover:scale-110 transition-transform"
        />
      )}
      <div className="mt-1 break-words text-sm">{optionText}</div>
    </div>
  );
}
