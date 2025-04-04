"use client"
import { useRouter } from "next/navigation"

export default function Diagnostico() {
  const router = useRouter()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center font-inter">
      <h1 className="text-2xl font-bold text-[#009CFF] mb-2">Pré diagnóstico</h1>
      <p className="text-sm font-medium text-gray-700 mb-6">
        A nossa <span className="text-[#009CFF] font-semibold">IA</span> preparou um pré diagnóstico de acordo com suas seleções no formulário prévio
      </p>

      {/* Card de diagnóstico */}
      <div className="bg-[#009CFF] text-white rounded-xl px-6 py-6 text-left max-w-md mx-auto mb-8 shadow">
        <p className="text-sm font-bold mb-1">Possíveis problemas:</p>
        <p className="text-sm font-normal mb-3">Desgaste das pastilhas de freio</p>

        <p className="text-sm font-bold mb-1">Checar:</p>
        <p className="text-sm font-normal mb-3">Pastilhas de freio</p>

        <p className="text-sm font-bold mb-1">Tempo de reparo:</p>
        <p className="text-sm font-normal mb-3">2h</p>

        <p className="text-sm font-bold mb-1">Custo do serviço:</p>
        <p className="text-sm font-normal mb-3">R$90–150</p>

        <p className="text-sm font-bold mb-1">Necessidade de troca de peças?</p>
        <p className="text-sm font-normal mb-3">Sim</p>

        <p className="text-sm font-bold mb-1">Custo médio da peça:</p>
        <p className="text-sm font-normal mb-3">R$117–600</p>

        <p className="text-sm font-bold mb-1">Gravidade do problema:</p>
        <p className="text-sm font-normal">Baixa</p>
      </div>

      {/* Botões */}
      <div className="flex justify-center gap-4">
        <button
          className="bg-[#009CFF] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md text-sm transition-colors"
          onClick={() => alert("Futuramente irá reservar peças")}
        >
          Reservar peças
        </button>
        <button
          className="text-[#009CFF] hover:text-blue-700 font-medium text-sm"
          onClick={() => router.push("/dashboard")}
        >
          Voltar ao menu
        </button>
      </div>
    </div>
  )
}
