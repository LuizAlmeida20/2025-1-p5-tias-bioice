"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Users,
  FileText,
  Settings,
  Bell,
  UserCircle2,
  Search,
  LogOut,
} from "lucide-react";
import NavBarButton from "@/components/basic/NavBarButton";
import { useRouter } from "next/navigation";
import { AppProvider } from "@/contexts/AppContext";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("");
  const router = useRouter();

  const menuItems = [
    { name: "Home", icon: <Home size={18} />, href: "/app/dashboard" },
    { name: "Lançamentos", icon: <FileText size={18} />, href: "/app/entries" },
    { name: "Funcionários", icon: <Users size={18} />, href: "/app/employee" },
    { name: "Configurações", icon: <Settings size={18} />, href: "/app/config" },
    { name: "Sair", icon: <LogOut size={18} />, href: "/" },
  ];

  useEffect(() => {
    if (window.location.pathname.includes("app")) {
      const uri = window.location.pathname.split("/")
      switch (uri[2]) {
        case "dashboard":
          setActive("Home")
          break
        case "entries":
          setActive("Lançamentos")
          break
        case "employee":
          setActive("Funcionários")
          break
        case "config":
          setActive("Configurações")
          break
      }
    }

  }), []

  return <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <div className="w-64 bg-white border-r border-gray-300 shadow-sm flex flex-col px-4 py-6">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="text-xl font-bold text-green-600 text-center">🌱 Biolce</div>
      </div>

      {/* Top Icons */}
      <div className="flex justify-center items-center gap-1.5 mb-4">
        <NavBarButton
          icon={<UserCircle2 size={20} />}
          onClick={() => {
            setActive("Perfil");
            router.push("/app/perfil");
          }}
          active={active === "Perfil"}
        />
        <NavBarButton
          icon={<Settings size={18} />}
          onClick={() => {
            setActive("Configurações");
            router.push("/app/config");
          }}
          active={active === "Configurações"}
        />
        <div className="relative w-full">
          <NavBarButton
            icon={<Bell size={18} />}
            onClick={() => {
              setActive("Notificações");
              router.push("/app/notificacoes");
            }}
            active={active === "Notificações"}
          />
          <span className="absolute top-0 right-1 bg-red-500 text-white text-xs rounded-full px-1">
            9
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Procurar por..."
          className="w-full pl-8 pr-2 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-green-400"
        />
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <NavBarButton
            key={item.name}
            icon={item.icon}
            label={item.name}
            onClick={() => {
              setActive(item.name);
              router.push(item.href);
            }}
            active={active === item.name}
          />
        ))}
      </nav>
    </div>

    {/* Main content */}
    <main className="flex-1 bg-gray-100 p-6 overflow-auto">{children}</main>
  </div>
}
