"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Button from "@/components/basic/Button";

export default function Login() {

  async function logar() {

  }

  return (
    <div className="min-h-screen flex bg-[#FDF9F4]">
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

      <div className="w-1/2 flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Faça login na sua conta
          </h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-black border border-gray-300 rounded bg-gray-50"
            />

            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-2 text-black border border-gray-300 rounded bg-gray-50"
            />

            <div className="flex items-center gap-2">
              <input type="checkbox" id="lembrar" />
              <label htmlFor="lembrar" className="text-sm text-gray-600">
                Lembrar-me
              </label>
            </div>
            2

            <Button>
              Entrar
            </Button>
          </form>

          {/* Botões de login social */}
          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-[#2DB9C3] text-[#2DB9C3] py-2 rounded font-medium">
              <FcGoogle size={20} />
              Entrar com Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-[#2DB9C3] text-[#2DB9C3] py-2 rounded font-medium">
              <FaApple size={20} />
              Entrar com Apple
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            Ainda não possui uma conta?{" "}
            <a href="/cadastro" className="text-[#2DB9C3] hover:underline">
              Cadastre-se aqui.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
