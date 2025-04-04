"use client"
import { useState } from "react"
import Image from "next/image"
import Sidebar from "./Sidebar"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center font-inter">
        <Image src="/logo.png" alt="Logo" width={100} height={40} />

        {/* Ícone de menu (hambúrguer) */}
        <button
          onClick={() => setOpen(true)}
          className="text-[#009CFF] text-3xl font-bold focus:outline-none hover:text-blue-700 transition-colors cursor-pointer"
        >
          ☰
        </button>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
