"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Cadastro() {
  return (
    <div className="min-h-screen flex bg-[#FDF9F4]">
      {/* Lado Esquerdo - Logo e nome */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-[#FDF9F4]">
        <div className="max-w-sm text-center">
          <img
            src="/logo.png"
            alt="Logo Biolce"
            className="w-48 mx-auto mb-4"
          />
          <h1 className="text-5xl font-bold text-[#003D3D]">Biolce</h1>
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Cadastre-se
          </h2>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Primeiro nome"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded bg-gray-50"
              />
              <input
                type="text"
                placeholder="Segundo nome"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded bg-gray-50"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50"
            />

            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50"
            />

            <div className="flex items-center gap-2">
              <input type="checkbox" id="termos" />
              <label htmlFor="termos" className="text-sm text-gray-600">
                Aceito os termos de uso
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2DB9C3] hover:bg-[#25a6af] text-white font-semibold py-2 rounded"
            >
              Cadastrar
            </button>
          </form>

          {/* Botões de login social */}
          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-[#2DB9C3] text-[#2DB9C3] py-2 rounded font-medium">
              <FcGoogle size={20} />
              Cadastrar com Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-[#2DB9C3] text-[#2DB9C3] py-2 rounded font-medium">
              <FaApple size={20} />
              Cadastrar com Apple
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            Já possui uma conta?{" "}
            <a href="/login" className="text-[#2DB9C3] hover:underline">
              Clique aqui.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
