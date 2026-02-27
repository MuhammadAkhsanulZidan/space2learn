import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Import font from next/font/google
import { Poppins } from 'next/font/google'

// Configure the font
const orbitron = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // add weights you need
  variable: '--font-orbitron', // optional CSS variable
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`min-h-screen bg-slate-800 ${orbitron.className}`}>
      <Component {...pageProps} />
    </div>
  )
}