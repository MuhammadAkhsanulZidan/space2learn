"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Bullet({
  targetId,
  planeX,
  onHit,
}: {
  targetId: string;
  planeX: string;
  onHit: () => void;
}) {
  const [fired, setFired] = useState(false);
  const [visible, setVisible] = useState(true);
  const [transform, setTransform] = useState("translate(0, 0)");
  const bulletRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const bullet = bulletRef.current;
    const meteor = document.getElementById(targetId);
    if (!bullet || !meteor) return;

    const bulletRect = bullet.getBoundingClientRect();
    const meteorRect = meteor.getBoundingClientRect();
    const dy = meteorRect.top + meteorRect.height / 2 - bulletRect.top;
    const distance = Math.abs(dy);

    setTransform(`translateY(-${distance}px)`);
    requestAnimationFrame(() => setFired(true));

    const timer = setTimeout(() => {
      onHit();
      setVisible(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [targetId, onHit]);

  if (!visible) return null;

  return (
    <Image
      ref={bulletRef}
      src="/Sprites/Missiles/spaceMissiles_002.png"
      width={24}
      height={24}
      alt="Bullet"
      className="absolute bottom-[100px] z-50 transition-transform duration-300"
      style={{
        left: planeX,
        transform: fired ? transform : "translate(0, 0)",
        transformOrigin: "bottom center",
      }}
    />
  );
}
