"use client"

export default function Prontuario() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-inter">
      {/* Formulário principal */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm">
        {/* Lado esquerdo: imagem e texto */}
        <div className="bg-[#F5F5F5] md:w-1/2 p-6 flex flex-col justify-center items-start text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Faça seu formulário</h2>
          <p className="text-base font-medium text-gray-700">
            Seu formulário é <span className="text-[#009CFF] font-semibold">importante</span> para que o nosso <br />
            <span className="text-[#009CFF] font-semibold">pré diagnóstico</span> seja feito!
          </p>
        </div>

        {/* Lado direito: perguntas */}
        <form className="md:w-1/2 bg-white p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Está escutando ruídos vindos do veículo ao passar por lombadas e buracos?",
            "Está escutando um barulho contínuo nas rodas?",
            "Escuta um rangido na hora de pisar no freio?",
            "Está havendo algum aumento no consumo de gasolina?",
            "O volante está trepidando?",
            "A direção está puxando para algum dos lados?",
            "Notou algum vazamento de óleo?",
            "Notou algum vazamento de água?",
            "Notou a saída de uma fumaça azul do veículo?",
            "E quanto à saída de uma fumaça preta?",
          ].map((pergunta, i) => (
            <label key={i} className="flex items-start gap-2 text-sm font-medium text-gray-800">
              <input type="checkbox" className="mt-1 accent-[#009CFF]" />
              {pergunta}
            </label>
          ))}

          {/* Botão */}
          <div className="col-span-full flex justify-center mt-2">
            <button
              type="submit"
              className="bg-[#009CFF] hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
            >
              Enviar formulário
            </button>
          </div>
        </form>
      </div>

      {/* Explicação abaixo */}
      <div className="mt-10 text-center max-w-2xl mx-auto">
        <h3 className="text-lg font-bold mb-2 font-inter">Sobre o formulário</h3>
        <p className="text-sm font-normal text-gray-700 leading-relaxed">
          O formulário serve para que a nossa <span className="text-[#009CFF] font-medium">IA possa analisar</span> as suas respostas e demonstrar um <br />
          <span className="text-[#009CFF] font-medium">pré diagnóstico para seus problemas</span>
        </p>
      </div>
    </div>
  )
}
