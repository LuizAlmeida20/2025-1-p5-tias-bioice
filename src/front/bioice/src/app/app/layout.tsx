"use client"

import { useState } from "react";
import { Home, Users, FileText, Settings, Bell, UserCircle2, Search } from "lucide-react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState("Lançamentos");

  const menuItems = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "Lançamentos", icon: <FileText size={18} /> },
    { name: "Funcionários", icon: <Users size={18} /> },
    { name: "Configurações", icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-300 shadow-sm flex flex-col px-4 py-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="text-xl font-bold text-green-600 text-center">🌱 Biolce</div>
        </div>

        {/* Top Icons */}
        <div className="flex justify-center items-center gap-1.5 mb-4">
          <button className="p-2 rounded hover:bg-gray-100">
            <UserCircle2 size={22} />
          </button>
          <button className="p-2 rounded hover:bg-gray-100">
            <Settings size={20} />
          </button>
          <button className="relative p-2 rounded hover:bg-gray-100">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">9</span>
          </button>
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
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-2 px-3 py-2 rounded ${
                active === item.name ? "bg-green-100 text-green-700 font-medium" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">{children}</main>
    </div>
  );
}
