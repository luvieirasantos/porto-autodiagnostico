"use client"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold text-[#009CFF]">Navegação</h2>
        <button
          onClick={onClose}
          className="text-xl font-bold text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
        >
          ×
        </button>
      </div>

      <nav className="flex flex-col p-4 space-y-3 font-medium text-[#009CFF]">
        {[
          { href: "/dashboard", label: "Dashboard" },
          { href: "/prontuario", label: "Prontuário" },
          { href: "/diagnostico", label: "Diagnóstico" },
          { href: "/cadastro", label: "Cadastro" },
          { href: "/", label: "Login" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
