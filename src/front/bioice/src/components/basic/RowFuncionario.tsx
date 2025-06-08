import React from "react";

export interface RowFuncionarioData {
  id_usuario: number;
  username: string;
  email: string;
  nivel_permissao: string[];
}

interface Props {
  row: RowFuncionarioData;
}

export default function RowFuncionario({ row }: Props) {
  return (
    <tr className="border-t">
      <td className="p-4">{row.id_usuario}</td>
      <td className="p-4">{row.username}</td>
      <td className="p-4">{row.email}</td>
      <td className="p-4">{row.nivel_permissao.join(", ")}</td>
    </tr>
  );
}
