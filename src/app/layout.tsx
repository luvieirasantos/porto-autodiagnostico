import "../styles/globals.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// Fonte Inter com pesos específicos
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // regular, medium, bold
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Porto Autodiagnóstico",
  description: "Diagnóstico rápido e fácil para o seu carro",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="font-sans bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
