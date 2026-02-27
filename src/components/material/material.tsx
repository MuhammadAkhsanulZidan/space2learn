import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Material({ title, children, quizRoute }: { title: string; children: ReactNode; quizRoute: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 text-white">
      <div className="flex flex-row gap-2 absolute top-3 left-5">
        <button onClick={() => router.push('/menu')} className="cursor-pointer text-xs bg-pink-500 py-2 px-3 rounded">kembali</button>
        <button
          onClick={() => router.push(quizRoute)}
          className="cursor-pointer w-fit bg-orange-500 px-4 py-2 text-xs rounded text-white "
        >
          Mulai Misi
        </button>
      </div>

      <div className="rounded bg-slate-700 w-full h-[90vh] p-6 flex flex-col gap-6 overflow-auto">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-bold">Misi: {title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
