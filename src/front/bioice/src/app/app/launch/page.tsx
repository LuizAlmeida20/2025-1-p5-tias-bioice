"use client";

import { useState, useEffect } from "react";
import RowLancamento, { RowData } from "@/components/basic/RowLancamento";

const tabs = ["Visão Geral", "Entradas", "Saídas", "Insumos", "Relatórios", "Admin"];

const mockData = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  author: "Jane Doe",
  role: "Senior Designer",
  titles: ["Cell Text", "Cell Text", "Cell Text", "Cell Text"],
  status: i % 2 === 0 ? "Ativo" : "Inativo",
}));

export default function Lancamentos() {
  const [activeTab, setActiveTab] = useState("Saídas");
  const [data, setData] = useState<RowData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/lancamentos?tipo=${activeTab.toLowerCase()}`); 
        if (!res.ok) throw new Error(`Erro na requisição: ${res.statusText}`);
        const json = await res.json();

        
        const formattedData = json.map((item: any) => ({
          id: item.id,
          author: item.id_user_FK ? `Usuário ${item.id_user_FK}` : "Anônimo",
          role: item.IsEntrada ? "Entrada" : "Saída",
          titles: [
            item.Descrição,
            Number(item.valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
            new Date(item.data_operacao).toLocaleDateString("pt-BR"),
            "", 
          ],
          status: "Ativo", 
        }));

        setData(formattedData);
      } catch (err: any) {
        setError(err.message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [activeTab]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Lançamentos</h1>
      </div>

      {/* Abas */}
      <div className="flex gap-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 px-1 text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
            {tab === "Entradas" && <span className="ml-1 text-xs bg-gray-200 px-1 rounded">2</span>}
            {tab === "Insumos" && <span className="ml-1 text-xs bg-gray-200 px-1 rounded">99+</span>}
          </button>
        ))}
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto border rounded-xl">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-green-100 text-green-700 uppercase text-xs font-bold">
            <tr>
              <th className="p-4"><input type="checkbox" /></th>
              <th className="p-4">Autor</th>
              <th className="p-4">Descrição</th>
              <th className="p-4">Valor</th>
              <th className="p-4">Data</th>
              <th className="p-4">Extra</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={6} className="text-center p-4">
                  Carregando...
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={6} className="text-center p-4 text-red-600">
                  {error}
                </td>
              </tr>
            )}
            {!loading && !error && data.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4">
                  Nenhum registro encontrado.
                </td>
              </tr>
            )}
            {!loading &&
              !error &&
              data.map((row) => <RowLancamento key={row.id} row={row} />)}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="flex justify-between items-center pt-4 border-t text-sm text-gray-600">
        <div className="space-x-2">
          <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">Anterior</button>
          <button className="px-3 py-1 rounded-md bg-green-100 text-green-700 font-semibold">1</button>
          <button className="px-3 py-1 rounded-md bg-green-700 text-white font-semibold">2</button>
          <button className="px-3 py-1 rounded-md bg-green-100 text-green-700 font-semibold">3</button>
          <span>...</span>
          <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
