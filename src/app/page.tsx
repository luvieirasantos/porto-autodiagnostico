"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Login() {
  const router = useRouter()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="flex h-screen font-inter">
      {/* Formulário lado esquerdo */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
        <Image src="/logo.png" alt="Logo Porto" width={120} height={40} className="mb-6" />
        <h2 className="text-2xl font-bold mb-8">Sign-in</h2>

        {/* Formulário Mecânico */}
        <form onSubmit={handleLogin} className="mb-8">
          <h3 className="text-[#009CFF] font-bold mb-2">Mecânico</h3>
          <input
            type="email"
            placeholder="E-mail"
            required
            className="w-full mb-2 px-4 py-2 rounded-md bg-gray-100 text-sm font-medium"
          />
          <input
            type="text"
            placeholder="Código porto mecânico"
            required
            className="w-full mb-3 px-4 py-2 rounded-md bg-gray-100 text-sm font-medium"
          />
          <button
            type="submit"
            className="bg-[#009CFF] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md text-sm cursor-pointer transition-colors"
          >
            Entrar
          </button>
        </form>

        {/* Formulário Cliente */}
        <form onSubmit={handleLogin}>
          <h3 className="text-[#009CFF] font-bold mb-2">Cliente</h3>
          <input
            type="email"
            placeholder="E-mail"
            required
            className="w-full mb-2 px-4 py-2 rounded-md bg-gray-100 text-sm font-medium"
          />
          <input
            type="text"
            placeholder="Código porto cliente"
            required
            className="w-full mb-3 px-4 py-2 rounded-md bg-gray-100 text-sm font-medium"
          />
          <button
            type="submit"
            className="bg-[#009CFF] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md text-sm cursor-pointer transition-colors"
          >
            Entrar
          </button>
        </form>

        {/* Rodapé do login */}
        <p className="text-xs text-gray-600 mt-4 font-normal">
          *O que é código porto?
        </p>

        {/* Link para cadastro */}
        <p
          className="mt-6 text-sm text-[#009CFF] font-medium underline cursor-pointer hover:text-blue-700 transition-colors"
          onClick={() => alert("Redirecionar para cadastro futuramente")}
        >
          Ainda não é cadastrado? Clique aqui
        </p>
      </div>

      {/* Imagem lado direito */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/login-bg.jpg"
          alt="Login background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}
