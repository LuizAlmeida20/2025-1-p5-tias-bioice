interface Button {
	color?: "primary" | "secondary"
	variant?: "contained" | "border" | ""
	onClick?: () => void
	children?: React.ReactNode
}

export default function Button({ color = "primary", variant = "contained", onClick = () => { }, children }: Button) {

	function getClassName() {
		let color = ""

		switch (color) {
			case "secondary":
				color += "#37c382"
				break
			default:
				color += "#37B4C3"
		}

		switch (variant) {
			case "border":
				return `border-2 cursor-pointer border-[${color}] text-[${color}] font-medium px-6 py-3 rounded-xl hover:bg-[#e6f7f9] transition-all duration-200`
			case "contained":
				return `border-2 cursor-pointer border-[${color}] bg-[${color}] text-white hover:text-[${color}] font-medium px-6 py-3 rounded-xl hover:bg-[#e6f7f9] transition-all duration-200`
			default:
				return ""
		}
	}

	return <button
		className={getClassName()}
		onClick={onClick}
	>
		{children}
	</button>
}