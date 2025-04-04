"use client"
import { PlusCircle } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Container cinza claro */}
      <div className="bg-[#F5F5F5] p-6 rounded-xl mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Card do perfil */}
          <div className="bg-[#009CFF] text-white p-4 rounded-xl w-full md:max-w-xs">
            <p className="text-base mb-1">Oi, José!</p>
            <span className="text-xs bg-white text-[#009CFF] font-semibold px-2 py-0.5 rounded-md">
              Seguro auto
            </span>
            <p className="text-sm mt-3">Saúde - São Paulo - SP</p>
          </div>

          {/* Texto explicativo centralizado */}
          <div className="flex items-center justify-center bg-white p-4 rounded-xl w-full">
            <p className="text-sm text-center font-medium text-gray-800 leading-relaxed">
              Aqui no seu perfil você poderá ver e adicionar seus veículos,
              além de visualizar seu plano de seguro e localização!
            </p>
          </div>
        </div>
      </div>

      {/* Seção de veículos */}
      <div className="bg-[#F5F5F5] p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Veículos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card: Civic */}
          <div className="bg-[#009CFF] text-white p-4 rounded-xl">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-bold">Civic</h3>
              <span className="text-sm">Ano 2009</span>
            </div>
            <p className="text-sm"><strong>Marca:</strong> <span className="font-normal">Honda</span></p>
            <p className="text-sm"><strong>Última visita ao mecânico:</strong> <span className="font-normal">15/10/2023</span></p>
            <p className="text-sm"><strong>Tipo de combustível:</strong> <span className="font-normal">Etanol</span></p>
            <p className="text-sm"><strong>Placa:</strong> <span className="font-normal">XPT1234</span></p>
            <p className="text-sm"><strong>Câmbio:</strong> <span className="font-normal">Manual</span></p>
            <p className="text-sm"><strong>Cor:</strong> <span className="font-normal">Preto</span></p>
          </div>

          {/* Card: Hilux */}
          <div className="bg-[#009CFF] text-white p-4 rounded-xl">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-bold">Hilux</h3>
              <span className="text-sm">Ano 2022</span>
            </div>
            <p className="text-sm"><strong>Marca:</strong> <span className="font-normal">Toyota</span></p>
            <p className="text-sm"><strong>Última visita ao mecânico:</strong> <span className="font-normal">10/05/2023</span></p>
            <p className="text-sm"><strong>Tipo de combustível:</strong> <span className="font-normal">Gasolina</span></p>
            <p className="text-sm"><strong>Placa:</strong> <span className="font-normal">ABC125A3</span></p>
            <p className="text-sm"><strong>Câmbio:</strong> <span className="font-normal">Automático</span></p>
            <p className="text-sm"><strong>Cor:</strong> <span className="font-normal">Branco</span></p>
          </div>

          {/* Card: Adicionar novo veículo */}
          <div className="bg-[#009CFF] flex flex-col items-center justify-center rounded-xl cursor-pointer hover:opacity-90 transition-all min-h-[200px]">
            <PlusCircle className="text-white w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
