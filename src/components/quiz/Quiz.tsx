"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Bullet from "./Bullet";
import Meteor from "./Meteor";
import Plane from "./Plane";

export type QuestionType = {
  question: string;
  correctIndex: number;
  options: {
    option: string;
    message: string;
  }[];
};

export default function PlaneQuizGame({
  questions,
  materialRoute,
}: {
  questions: QuestionType[];
  materialRoute: string;
}) {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  const questionData = questions[questionIndex];
  const [totalBulletsUsed, setTotalBulletsUsed] = useState(0);

  const [bullets, setBullets] = useState(10);
  const [meteors] = useState([0, 1, 2, 3]);
  const [destroyed, setDestroyed] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [justHit, setJustHit] = useState<number[]>([]);
  const [popup, setPopup] = useState<{ message: string; correct: boolean } | null>(null);
  const [firedBullet, setFiredBullet] = useState<{
    targetId: string;
    key: number;
    onHit: () => void;
  } | null>(null);
  const [planeX, setPlaneX] = useState("50%");
  const [planeReady, setPlaneReady] = useState(true);
  const planeRef = useRef<HTMLDivElement>(null);

  const [countdown, setCountdown] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameStarted(true);
    }
  }, [countdown]);

  const handleShoot = (index: number) => {
    if (bullets === 0 || destroyed.includes(index) || gameOver || win || !planeReady) return;

    const meteor = document.getElementById(`meteor-${index}`);
    if (!meteor || !planeRef.current) return;

    const meteorRect = meteor.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const targetCenter = meteorRect.left + meteorRect.width / 2;
    const targetXPercent = (targetCenter / screenWidth) * 100;

    setPlaneReady(false);
    setPlaneX(`${targetXPercent}%`);

    setTimeout(() => {
      const isCorrect = index === questionData.correctIndex;
      const selectedOption = questionData.options[index];

      setFiredBullet({
        targetId: `meteor-${index}`,
        key: Date.now(),
        onHit: () => {
          setJustHit((prev) => [...prev, index]);
          setTimeout(() => {
            setJustHit((prev) => prev.filter((i) => i !== index));
          }, 400);

          if (isCorrect) {
            setDestroyed([...meteors]);
            setPopup({ message: selectedOption.message, correct: true });
          } else {
            setDestroyed((prev) => [...prev, index]);
            setPopup({ message: selectedOption.message, correct: false });

            if (bullets - 1 === 0) {
              setGameOver(true);
            }
          }

          setFiredBullet(null);
          setPlaneReady(true);
          setBullets((prev) => prev - 1);
          setTotalBulletsUsed(prev => prev + 1);
        },
      });
    }, 500);
  };

  const nextQuestion = () => {
    setPopup(null);
    setDestroyed([]);
    setBullets(10);
    setJustHit([]);
    setPlaneX("50%");
    setPlaneReady(true);
    setQuestionIndex((prev) => {
      if (prev + 1 === questions.length) {
        setWin(true); // Win condition after last question
      }
      return prev + 1;
    });
  };

  const resetGame = () => {
    window.location.reload();
  };

  // ⭐ Star Calculation Function
  const renderStars = () => {
    const starCount = 5;
    const minimumBullets = questions.length;
    const usedBullets = totalBulletsUsed === 0 ? 1 : totalBulletsUsed; // avoid division by zero
    const efficiency = minimumBullets / usedBullets;
    let goldStars = Math.round(efficiency * starCount);
    if (goldStars > 5) goldStars = 5;
    if (goldStars < 0) goldStars = 0;

    return Array.from({ length: starCount }).map((_, i) => (
      <Image
        key={i}
        src={i < goldStars ? "/Sprites/Stars/star_gold.png" : "/Sprites/Stars/star_silver.png"}
        alt="Star"
        width={30}
        height={30}
      />
    ));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 w-full h-[200%] scroll-background">
          <div
            className="w-full h-1/2 bg-repeat"
            style={{ backgroundImage: "url('/Sprites/Backgrounds/space_background.png')" }}
          />
          <div
            className="w-full h-1/2 bg-repeat"
            style={{ backgroundImage: "url('/Sprites/Backgrounds/space_background.png')" }}
          />
        </div>
      </div>

      {/* Bullet UI */}
      <div className="absolute top-0 z-40 p-2 flex flex-row justify-between w-full">
        <div className="flex flex-row gap-3">
          <p>Missile: </p>
          {Array.from({ length: bullets }).map((_, i) => (
            <Image
              key={i}
              src="/Sprites/Missiles/spaceMissiles_002.png"
              alt="Bullet"
              width={10}
              height={10}
            />
          ))}
        </div>
        <button
          onClick={() => router.push(materialRoute)}
          className="bg-green-600 px-2 py-1 text-xs rounded text-white"
        >
          Kembali ke Materi
        </button>
      </div>

      {gameStarted && (
        <>
          {/* Question */}
          <div className="absolute bg-purple-900 top-10 left-1/2 transform -translate-x-1/2 text-white flex items-center justify-center text-sm z-10 p-3 w-full">
            {questionData.question}
          </div>

          {/* Plane */}
          <Plane planeX={planeX} planeRef={planeRef} />

          {/* Meteors */}
          <div className="absolute top-40 z-50 w-full flex justify-center">
            <div className="grid grid-cols-4 gap-4 max-w-[500px] w-full px-4">
              {meteors.map((m, i) => (
                <Meteor
                  key={i}
                  id={`meteor-${i}`}
                  index={i}
                  destroyed={destroyed.includes(i)}
                  justHit={justHit.includes(i)}
                  optionText={questionData.options[i].option}
                  onShoot={() => handleShoot(i)}
                />
              ))}
            </div>
          </div>

          {/* Bullet Animation */}
          {firedBullet && (
            <div className="z-30">
              <Bullet
                key={firedBullet.key}
                targetId={firedBullet.targetId}
                planeX={planeX}
                onHit={firedBullet.onHit}
              />
            </div>
          )}
        </>
      )}

      {/* Popup for Correct/Incorrect */}
      {popup && !gameOver && !win && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-xl text-center">
            <h2 className={`text-lg font-bold mb-4 ${popup.correct ? "text-green-600" : "text-red-600"}`}>
              {popup.correct ? "Benar!" : "Kurang Tepat"}
            </h2>
            <p className="mb-4 text-black text-sm">{popup.message}</p>

            {popup.correct ? (
              <div className="space-x-4">
                {questionIndex < questions.length - 1 ? (
                  <button
                    onClick={nextQuestion}
                    className="text-sm bg-blue-500 px-4 py-2 rounded text-white"
                  >
                    Soal Berikutnya
                  </button>
                ) : (
                  <button
                    onClick={() => setWin(true)}
                    className="bg-green-600 px-4 py-2 text-sm rounded text-white"
                  >
                    Selesai
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => setPopup(null)}
                className="bg-gray-800 px-4 py-2 text-xs rounded text-white"
              >
                Coba Lagi
              </button>
            )}
          </div>
        </div>
      )}

      {/* Win Screen */}
      {win && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-xl text-center">
            <h2 className="text-green-600 text-lg font-bold mb-4">Misi Selesai!</h2>
            <p className="mb-4 text-black text-sm">Skor Kamu:</p>
            <div className="flex justify-center mb-4">
              {renderStars()}
            </div>
            <div className="space-x-4">
              <button onClick={resetGame} className="bg-blue-500 px-4 py-2 text-sm rounded text-white">
                Ulangi Misi
              </button>
              <button onClick={() => router.push(materialRoute)} className="bg-green-600 px-4 py-2 text-sm rounded text-white">
                Lihat Materi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Over */}
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-xl text-center">
            <h2 className="text-purple-500 text-lg font-bold mb-4">Wah. Misilnya sudah Habis</h2>
            <p className="mb-4 text-black text-sm">Skor Kamu:</p>
            <div className="flex justify-center mb-4">
              {renderStars()}
            </div>
            <div className="space-x-4">
              <button onClick={resetGame} className="bg-blue-500 px-4 py-2 text-sm rounded text-white">
                Coba Lagi
              </button>
              <button onClick={() => router.push(materialRoute)} className="bg-green-600 px-4 py-2 text-sm rounded text-white">
                Lihat Materi
              </button>
            </div>
          </div>
        </div>
      )}

      {!gameStarted && (
        <div className="absolute inset-0 bg-opacity-90 flex flex-col items-center justify-center z-50 text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Lindungi Stasiun dari Meteor!</h1>
          <p className="text-6xl font-bold animate-pulse">{countdown > 0 ? countdown : "Mulai!"}</p>
        </div>
      )}
    </div>
  );
}
