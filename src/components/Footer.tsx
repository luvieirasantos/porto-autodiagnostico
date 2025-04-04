"use client"
import { Mail, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-10 font-inter">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center gap-4">
        <p className="text-sm font-medium text-gray-700">
          Desenvolvido por <span className="text-[#009CFF] font-semibold">Lu Vieira</span>
        </p>

        <div className="flex gap-4 text-[#009CFF]">
          <a
            href="https://www.linkedin.com/in/luhenrivieira/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/luvieirasantos?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:henrique3.terceiro@gmail.com"
            aria-label="Email"
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
