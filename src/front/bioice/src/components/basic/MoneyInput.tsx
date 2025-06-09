interface MoneyInput {
	name: string
	value: string | number
	onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MoneyInput({ name, value, onChange }: MoneyInput) {
	// Formata o valor em centavos para R$ X,XX
	const formatted = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(Number(value || "0") / 100);

	const handleLocalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const onlyNums = e.target.value.replace(/\D/g, "");
		const syntheticEvent = {
			...e,
			target: {
				...e.target,
				name,
				value: onlyNums,
			},
		};
		if (onChange) onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
	};

	return (
		<input
			name={name}
			value={formatted}
			onChange={handleLocalChange}
			className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600"
		/>
	);
}
