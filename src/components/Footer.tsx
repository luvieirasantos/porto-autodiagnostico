"use client"
import { Mail, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-6 mt-10 bg-white border-t border-gray-200 font-inter">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 px-4 mx-auto text-center md:flex-row">
        <p className="text-sm font-medium text-gray-700">
          Desenvolvido por <span className="text-[#009CFF] font-semibold">Lu Vieira</span> e <span className="text-[#009CFF] font-semibold">Melissa Pereira</span>
        </p>

        <div className="flex gap-4 text-[#009CFF]">
          <a
            href="https://www.linkedin.com/in/luhenrivieira/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors cursor-pointer hover:text-blue-700"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/luvieirasantos?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors cursor-pointer hover:text-blue-700"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:henrique3.terceiro@gmail.com"
            aria-label="Email"
            className="transition-colors cursor-pointer hover:text-blue-700"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
