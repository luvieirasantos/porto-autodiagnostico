"use client"
import { useRouter } from "next/navigation"

export default function Cadastro() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Código requisitado!") // futuramente pode redirecionar ou conectar com backend
  }

  return (
    <div className="flex min-h-screen font-inter">
      {/* Lado esquerdo (azul) */}
      <div className="hidden md:flex md:w-1/2 bg-[#009CFF] text-white flex-col justify-center px-10">
        <h2 className="text-3xl font-bold mb-4">A melhor solução para clientes e mecânicos</h2>
        <p className="text-base font-medium leading-relaxed">
          Com o acesso à nossa plataforma você conseguirá toda a facilidade e praticidade que tanto
          esperamos dentro da área automobilística dentro de sua casa!
        </p>
        <p className="mt-4 text-sm font-normal">
          Mecânicos e clientes podem desfrutar da tecnologia para a agilização do processo de
          manutenção dos veículos
        </p>
      </div>

      {/* Lado direito (formulário) */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center px-10 py-10">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-2xl font-bold text-[#009CFF]">Criação de conta</h2>
          <p className="text-sm mt-1 mb-4 text-gray-700">
            Já tem o código?{" "}
            <span
              onClick={() => router.push("/")}
              className="text-[#009CFF] cursor-pointer underline hover:text-blue-700"
            >
              Entrar
            </span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Nome"
              required
              className="w-full px-4 py-2 rounded-md bg-white text-sm font-medium"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              required
              className="w-full px-4 py-2 rounded-md bg-white text-sm font-medium"
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              className="w-full px-4 py-2 rounded-md bg-white text-sm font-medium"
            />
            <select
              required
              className="w-full px-4 py-2 rounded-md bg-white text-sm font-medium"
            >
              <option value="">Selecione</option>
              <option value="cliente">Cliente</option>
              <option value="mecanico">Mecânico</option>
            </select>

            <button
              type="submit"
              className="bg-[#009CFF] hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md text-sm cursor-pointer transition-colors w-full mt-2"
            >
              Requisitar código
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
