"use client"

import Button from "@/components/basic/Button";

export default function ConfiguracoesPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Título */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Configurações</h1>

      {/* Card principal */}
      <div className="bg-white p-8 rounded-xl shadow max-w-3xl w-full mx-auto">
        {/* Seção superior: Avatar + Botões + Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6 mb-8 gap-6">
          {/* Avatar + Botões */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-3xl">
              <span className="material-icons">foto</span>
            </div>
            <div className="flex flex-col items-start">
              <Button onClick={() => { }}>Enviar Foto</Button>
              <Button variant="empty" color="error" onClick={() => { }}>Remover</Button>

            </div>


            {/* Toggle */}
            <div className="flex items-center gap-3">
              <label htmlFor="sync" className="text-sm text-gray-700">
                Sincronizar na nuvem
              </label>
              <input
                id="sync"
                type="checkbox"
                className="form-checkbox h-5 w-5 text-teal-500"
                defaultChecked
              />
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Perfil</h2>

          {/* Linha com 2 inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Nome</label>
              <input
                className="p-2 bg-gray-100 rounded text-sm"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Sobrenome</label>
              <input
                className="p-2 bg-gray-100 rounded text-sm"
                placeholder="Digite seu sobrenome"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">E-mail</label>
              <input
                className="p-2 bg-gray-100 rounded text-sm"
                type="email"
                placeholder="email@exemplo.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Telefone</label>
              <input
                className="p-2 bg-gray-100 rounded text-sm"
                type="tel"
                placeholder="(99) 99999-9999"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Cargo</label>
              <input
                className="p-2 bg-gray-100 rounded text-sm"
                placeholder="Digite o cargo"
              />
            </div>
          </div>

          {/* Botão Salvar */}
          <div className="flex justify-end mt-8">
            <Button color="secondary">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}