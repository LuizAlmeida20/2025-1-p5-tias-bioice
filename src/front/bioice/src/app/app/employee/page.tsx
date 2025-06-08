"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import RowFuncionario, { RowFuncionarioData } from "@/components/basic/RowFuncionario";

type FormState = {
  username: string;
  email: string;
  nivel_permissao: string;
  password: string;
};

export default function ListaUsuarios() {
  const [data, setData] = useState<RowFuncionarioData[]>([
    {
      id_usuario: 1,
      username: "admin",
      email: "admin@sorveteria.com",
      nivel_permissao: ["admin"],
    },
    {
      id_usuario: 2,
      username: "usuario_teste",
      email: "teste@sorveteria.com",
      nivel_permissao: ["usuário"],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    username: "",
    email: "",
    nivel_permissao: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const maxId = data.reduce((max, user) => Math.max(max, user.id_usuario), 0);
    const newUser: RowFuncionarioData = {
      id_usuario: maxId + 1,
      username: form.username,
      email: form.email,
      nivel_permissao: [form.nivel_permissao],
    };

    setData((prev) => [...prev, newUser]);
    setIsModalOpen(false);

    // Limpa o formulário
    setForm({
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
              <th className="p-4 w-20">Id</th>
              <th className="p-4 w-40">Nome de usuário</th>
              <th className="p-4 w-45">Email</th>
              <th className="p-4 w-40">Permissões</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
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
              {/* Campo Nome de usuário */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome de usuário</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600"
                />
              </div>

              {/* Campo Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600"
                />
              </div>

              {/* Permissões com radio buttons */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Permissões</label>
                <div className="space-y-2">
                  {["admin", "usuário", "gerente"].map((perm) => (
                    <label key={perm} className="flex items-center space-x-2 text-gray-700">
                      <input
                        type="radio"
                        name="nivel_permissao"
                        value={perm}
                        checked={form.nivel_permissao === perm}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            nivel_permissao: e.target.value,
                          }))
                        }
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="capitalize">{perm}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Campo Senha */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Senha</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600"
                />
              </div>

              {/* Botões */}
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
