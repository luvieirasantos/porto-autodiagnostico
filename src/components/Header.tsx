import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white px-6 py-3 border-b border-gray-200 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png" // coloque sua logo em public/logo.png
          alt="Logo Porto"
          width={90}
          height={24}
        />
      </div>
      <div className="flex items-center gap-2 text-blue-500 cursor-pointer">
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-semibold">Editar</span>
      </div>
    </header>
  )
}
