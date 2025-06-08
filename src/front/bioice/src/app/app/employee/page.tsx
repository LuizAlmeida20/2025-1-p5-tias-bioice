"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import RowFuncionario, { RowFuncionarioData } from "@/components/basic/RowFuncionario";

type FormState = {
  id_usuario: string;
  username: string;
  email: string;
  nivel_permissao: string;
  password: string;
};

export default function ListaUsuarios() {
  const [data, setData] = useState<RowFuncionarioData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState<FormState>({
    id_usuario: "",
    username: "",
    email: "",
    nivel_permissao: "",
    password: "",
  });

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/usuarios`);
        if (!res.ok) throw new Error(`Erro: ${res.statusText}`);
        const json = await res.json();

        const formattedData: RowFuncionarioData[] = json.map((item: any) => ({
          id_usuario: item.id || item.id_usuario,
          username: item.username || `Usuário ${item.id}`,
          email: item.email || "sememail@exemplo.com",
          nivel_permissao: item.nivel_permissao ? [item.nivel_permissao] : ["usuário"],
        }));

        setData(formattedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newUser: RowFuncionarioData = {
      id_usuario: Number(form.id_usuario),
      username: form.username,
      email: form.email,
      nivel_permissao: form.nivel_permissao.split(",").map((p) => p.trim()),
    };

    setData((prev) => [...prev, newUser]);
    setIsModalOpen(false);
    setForm({
      id_usuario: "",
      username: "",
      email: "",
      nivel_permissao: "",
      password: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Usuários</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Novo Usuário
        </button>
      </div>

      <div className="overflow-x-auto border rounded-xl">
        <table className="min-w-full table-fixed text-sm text-left text-gray-700">
          <thead className="bg-green-100 text-green-700 uppercase text-xs font-bold">
            <tr>
              <th className="p-4 w-10">
                <input type="checkbox" />
              </th>
              <th className="p-4 w-20">Id</th>
              <th className="p-4 w-40">Nome de usuário</th>
              <th className="p-4 w-45">Email</th>
              <th className="p-4 w-40">Permissões</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  Carregando...
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={5} className="text-center p-4 text-red-600">
                  {error}
                </td>
              </tr>
            )}
            {!loading && !error && data.map((row) => (
              <RowFuncionario key={row.id_usuario} row={row} />
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/20 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cadastrar Usuário</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: "ID", name: "id_usuario", type: "number" },
                { label: "Nome de usuário", name: "username", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Permissões", name: "nivel_permissao", type: "text", placeholder: "Ex: admin, usuário" },
                { label: "Senha", name: "password", type: "password" },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={(form as any)[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600"
                  />
                </div>
              ))}

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
