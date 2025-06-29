"use client"

import { ChangeEvent, useState } from "react"
import RowLancamento, { RowData } from "@/components/Sheets/Entry"
import Button from "@/components/basic/Button"
import Card from "@/components/basic/Card"
import MoneyInput from "@/components/basic/MoneyInput"

const tabs = ["Entradas", "Saídas", "Insumos", "Relatórios", "Admin"]

export default function Lancamentos() {
	const [activeTab, setActiveTab] = useState("Entradas");
	const [receipts, setReceipts] = useState<RowData[]>([{
		id: 1,
		author: "fulano",
		role: "admin",
		status: "Ativo",
		date: new Date(),
		description: "primeiro registro de receita",
		value: 15.99,
		titles: []
	}])

	const [expenses, setExpenses] = useState<RowData[]>([{
		id: 1,
		author: "ciclano",
		role: "admin",
		status: "Ativo",
		date: new Date(),
		description: "primeiro registro de custo",
		value: 15.99,
		titles: []
	}])


	const [add, setAdd] = useState(false)

	return <Card>
		<div className="flex items-center justify-between">
			<h1 className="text-3xl font-bold text-gray-800">Lançamentos</h1>
		</div>

		<div className="flex gap-4 border-b border-gray-200">
			{tabs.map((tab) => (
				<button
					key={tab}
					onClick={() => setActiveTab(tab)}
					className={`relative pb-2 px-1 text-sm font-semibold transition-colors ${activeTab === tab
						? "text-green-700 border-b-2 border-green-700"
						: "text-gray-500 hover:text-gray-700"}`}
				>
					{tab}
					{tab === "Entradas" && <span className="ml-1 text-xs bg-gray-200 px-1 rounded">2</span>}
					{tab === "Insumos" && <span className="ml-1 text-xs bg-gray-200 px-1 rounded">99+</span>}
				</button>
			))}
		</div>

		<Button color="secondary" onClick={() => setAdd(true)}>Adicionar</Button>

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
					{activeTab == "Entradas"
						? receipts.map(row => <RowLancamento key={row.id} row={row} />)
						: expenses.map(row => <RowLancamento key={row.id} row={row} />)}
				</tbody>
			</table>
		</div>
		{
			add && <ModalAddEntry
				onClose={() => setAdd(false)}
				onFinish={(items: AddEntry) => {
					if (items.type == "receipt")
						setReceipts(prev => ([...prev, {
							id: receipts.length + 1,
							author: "admin",
							date: new Date(),
							description: items.description,
							role: "admin",
							status: "Ativo",
							titles: [],
							value: items.value
						}]))
					else setExpenses(prev => ([...prev, {
						id: receipts.length + 1,
						author: "admin",
						date: new Date(),
						description: items.description,
						role: "admin",
						status: "Ativo",
						titles: [],
						value: items.value
					}]))

					setAdd(false)
				}}
			/>
		}
	</Card >
}

type AddEntry = {
	type: "receipt" | "expense"
	description: string
	value: number
}

interface ModalAddEntry {
	onClose: () => void
	onFinish: (form: AddEntry) => void
}

function ModalAddEntry({ onClose, onFinish }: ModalAddEntry) {
	const [form, setForm] = useState<AddEntry>({
		type: "receipt",
		description: "",
		value: 0
	})

	const handleChange = (e?: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => {
		if (e) {
			const { name, value } = e.target
			console.log(value)

			setForm(prev => ({ ...prev, [name]: value }))
		}
	}

	return <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/20 backdrop-blur-sm">
		<div className="bg-white rounded-xl w-full max-w-md p-6 shadow-2xl">
			<h2 className="text-2xl font-semibold text-gray-800 mb-4">Cadastrar Registro</h2>
			<form
				onSubmit={() => { }}
				className="space-y-4"
			>
				<div>
					<label className="block text-sm font-medium text-gray-700">Tipo</label>
					<select
						value={form.type}
						onChange={handleChange}
						required
						name="type"
						className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600"
					>
						<option value="receipt">Entrada</option>
						<option value="expense">Saída</option>
					</select>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">Descrição</label>
					<textarea
						name="description"
						value={form.description}
						onChange={handleChange}
						required
						className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600"
					/>
				</div>

				<div className="text-red-500">
					<pre>
						{JSON.stringify(form, null, 3)}
					</pre>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">Valor</label>
					<MoneyInput
						name="value"
						value={form.value}
						onChange={handleChange}
					/>
				</div>

				<div className="flex justify-end gap-2 pt-4">
					<Button variant="border" onClick={onClose} >
						Cancelar
					</Button>
					<Button onClick={() => onFinish(form)} >
						Salvar
					</Button>
				</div>
			</form>
		</div>
	</div>
}
