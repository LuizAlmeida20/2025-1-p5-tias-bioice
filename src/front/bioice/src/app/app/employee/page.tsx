"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

type Funcionario = {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  cargo: string;
  dataNascimento: string;
  genero: string;
  fotoPreview: string;
};

export default function FuncionariosPage() {
  const [syncCloud, setSyncCloud] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cargo: "",
    dataNascimento: "",
    genero: "",
    foto: null as File | null,
    fotoPreview: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const target = e.target;
    const name = target.name;

    if (name === "foto") {
      // Cast para garantir acesso ao files
      const input = target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        setForm((f) => ({
          ...f,
          foto: file,
          fotoPreview: URL.createObjectURL(file),
        }));
        return; // evita executar o código abaixo
      }
    }

    // Para inputs e selects comuns
    const value = (target as HTMLInputElement | HTMLSelectElement).value;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!form.sobrenome.trim()) newErrors.sobrenome = "Sobrenome é obrigatório.";
    if (!form.email.trim()) newErrors.email = "Email é obrigatório.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email inválido.";
    if (!form.telefone.trim()) newErrors.telefone = "Telefone é obrigatório.";
    if (!form.cargo.trim()) newErrors.cargo = "Cargo é obrigatório.";
    if (!form.dataNascimento.trim()) newErrors.dataNascimento = "Data de nascimento é obrigatória.";
    if (!form.genero.trim()) newErrors.genero = "Selecione o gênero.";
    return newErrors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      // Simula envio de dados
      await new Promise((r) => setTimeout(r, 1000));

      // Adiciona novo funcionário na lista
      setFuncionarios((prev) => [
        ...prev,
        {
          id: Date.now(),
          nome: form.nome.trim(),
          sobrenome: form.sobrenome.trim(),
          email: form.email.trim(),
          telefone: form.telefone.trim(),
          cargo: form.cargo.trim(),
          dataNascimento: form.dataNascimento,
          genero: form.genero,
          fotoPreview: form.fotoPreview,
        },
      ]);

      alert("Funcionário salvo com sucesso!");
      setLoading(false);
      handleClear();
    }
  }

  function handleClear() {
    setForm({
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      cargo: "",
      dataNascimento: "",
      genero: "",
      foto: null,
      fotoPreview: "",
    });
    setErrors({});
    setSyncCloud(true);
  }

  return (
    <main className="min-h-screen bg-[#F9FAFB] p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Funcionários</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-3xl mx-auto p-8 rounded-xl shadow-sm"
        noValidate
      >
        {/* Upload e Sincronizar */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 overflow-hidden">
              {form.fotoPreview ? (
                <img
                  src={form.fotoPreview}
                  alt="Foto do funcionário"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Foto</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="foto"
                className="cursor-pointer text-sm px-3 py-1 border border-[#37B4C3] text-[#37B4C3] rounded hover:bg-[#e6f7f9] inline-block"
              >
                Enviar Foto
              </label>
              <input
                type="file"
                id="foto"
                name="foto"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => setForm((f) => ({ ...f, foto: null, fotoPreview: "" }))}
                className="text-xs text-red-500 hover:underline"
              >
                Remover
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={syncCloud}
              onChange={() => setSyncCloud(!syncCloud)}
            />
            Sincronizar na nuvem
          </label>
        </div>

        <hr className="mb-6" />

        {/* Campos do formulário */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className={`w-full px-4 py-2 mt-1 border rounded ${
                errors.nome ? "border-red-500 bg-red-50" : "bg-gray-100"
              }`}
            />
            {errors.nome && <p className="text-xs text-red-500 mt-1">{errors.nome}</p>}
          </div>
          <div>
            <label className="text-sm text-gray-600">Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              value={form.sobrenome}
              onChange={handleChange}
              placeholder="Digite seu sobrenome"
              className={`w-full px-4 py-2 mt-1 border rounded ${
                errors.sobrenome ? "border-red-500 bg-red-50" : "bg-gray-100"
              }`}
            />
            {errors.sobrenome && (
              <p className="text-xs text-red-500 mt-1">{errors.sobrenome}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@exemplo.com"
              className={`w-full px-4 py-2 mt-1 border rounded ${
                errors.email ? "border-red-500 bg-red-50" : "bg-gray-100"
              }`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm text-gray-600">Telefone</label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="(99) 99999-9999"
              className={`w-full px-4 py-2 mt-1 border rounded ${
                errors.telefone ? "border-red-500 bg-red-50" : "bg-gray-100"
              }`}
            />
            {errors.telefone && (
              <p className="text-xs text-red-500 mt-1">{errors.telefone}</p>
            )}
          </div>
          <div>
            <label className="text-sm text-gray-600">Cargo</label>
            <input
              type="text"
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
              placeholder="Digite o cargo"
              className={`w-full px-4 py-2 mt-1 border rounded ${
                errors.cargo ? "border-red-500 bg-red-50" : "bg-gray-100"
              }`}
            />
            {errors.cargo && <p className="text-xs text-red-500 mt-1">{errors.cargo}</p>}
          </div>

          <div>
            <label className="text-sm text-gray-600">Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              value={form.dataNascimento}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 border rounded ${
                errors.dataNascimento ? "border-red-500 bg-red-50" : "bg-gray-100"
              }`}
            />
            {errors.dataNascimento && (
              <p className="text-xs text-red-500 mt-1">{errors.dataNascimento}</p>
            )}
          </div>
          <div>
            <label className="text-sm text-gray-600">Gênero</label>
            <select
              name="genero"
              value={form.genero}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 border rounded ${
                errors.genero ? "border-red-500 bg-red-50" : "bg-gray-100"
              }`}
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
            {errors.genero && <p className="text-xs text-red-500 mt-1">{errors.genero}</p>}
          </div>
        </div>

        {/* Botões */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-2 border border-gray-400 rounded hover:bg-gray-100"
            disabled={loading}
          >
            Limpar
          </button>

          <button
            type="submit"
            className="bg-emerald-500 text-white px-6 py-2 rounded hover:opacity-90 transition flex items-center gap-2"
            disabled={loading}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            Salvar
          </button>
        </div>
      </form>

      {/* Listagem de funcionários */}
      <section className="max-w-3xl mx-auto mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Funcionários Cadastrados
        </h2>

        {funcionarios.length === 0 ? (
          <p className="text-gray-600">Nenhum funcionário cadastrado.</p>
        ) : (
          <ul className="space-y-4">
            {funcionarios.map((func) => (
              <li
                key={func.id}
                className="flex items-center gap-4 bg-white p-4 rounded shadow"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {func.fotoPreview ? (
                    <img
                      src={func.fotoPreview}
                      alt={`${func.nome} ${func.sobrenome}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400">Foto</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">
                    {func.nome} {func.sobrenome}
                  </span>
                  <span className="text-gray-600">{func.cargo}</span>
                  <span className="text-gray-500 text-sm">{func.email}</span>
                  <span className="text-gray-500 text-sm">{func.telefone}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
