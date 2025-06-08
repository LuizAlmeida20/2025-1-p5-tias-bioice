"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Calendar, Gift, Activity, Car } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-gray-100 px-8 py-20 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">Biolce</h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Transforme a forma como você organiza sua rotina. Nossa plataforma oferece
              recursos inteligentes, intuitivos e acessíveis para seu dia a dia.
            </p>
            <div className="mt-8 flex gap-4">
              <button
                className="bg-[#37B4C3] text-white font-medium px-6 py-3 rounded-xl shadow hover:opacity-90 transition-all duration-200"
                onClick={() => router.push("/register")}
              >
                Cadastre-se Agora
              </button>
              <button
                className="border-2 border-[#37B4C3] text-[#37B4C3] font-medium px-6 py-3 rounded-xl hover:bg-[#e6f7f9] transition-all duration-200"
                onClick={() => router.push("/login")}
              >
                Entre
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-20 bg-white flex-grow">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-[#1F4F52] font-semibold tracking-wide uppercase mb-2">
            A ferramenta que você precisa
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Simples, completa e feita para o seu dia a dia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto text-center text-gray-700">
          <Feature
            icon={<Calendar size={36} className="text-[#37B4C3]" />}
            text="Organize seus compromissos de forma eficiente e prática."
          />
          <Feature
            icon={<Gift size={36} className="text-[#37B4C3]" />}
            text="Acompanhe benefícios e ofertas especiais."
          />
          <Feature
            icon={<Activity size={36} className="text-[#37B4C3]" />}
            text="Monitore atividades e mantenha-se produtivo."
          />
          <Feature
            icon={<Car size={36} className="text-[#37B4C3]" />}
            text="Gerencie seus deslocamentos e compromissos externos."
          />
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#37B4C3] text-white px-8 py-3 rounded-xl shadow hover:opacity-90 transition-all duration-200">
            Conheça
          </button>
        </div>
      </section>

      {/* Footer Gray Band */}
      <footer className="bg-[#F3F5F9] h-16 w-full mt-auto" />
    </main>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center px-4">
      <div className="mb-4 p-4 rounded-full bg-[#e6f7f9] shadow-md">
        {icon}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}
