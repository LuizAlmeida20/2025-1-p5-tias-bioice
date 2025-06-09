import { useEffect } from "react"
import { useState } from "react"

interface ButtonI {
	color?: "primary" | "secondary" | "error"
	variant?: "filled" | "border" | "empty"
	onClick?: () => void
	children?: React.ReactNode
	fullwidth?: boolean
}

export default function Button({ color = "primary", variant = "filled", onClick = () => { }, fullwidth, children }: ButtonI) {
	const [className, setClassName] = useState("")

	useEffect(() => {
		let cssClass = ""
		if (variant == "filled") {
			if (color == "primary")
				cssClass = "bg-[#37b4c3] hover:bg-[#c7e9ec] border-[#37b4c3] shadow text-white hover:text-[#37b4c3]"
			if (color == "secondary")
				cssClass = "bg-[#37c382] hover:bg-[#bce9d4] border-[#37c382] shadow text-white hover:text-[#37c382]"
			if (color == "error")
				cssClass = "bg-[#c3374e] hover:bg-[#ebc2c9] border-[#c3374e] shadow text-white hover:text-[#c3374e]"
		}

		if (variant == "border") {
			if (color == "primary")
				cssClass = "border-[#37b4c3] hover:bg-[#c7e9ec] hover:border-[#37b4c3] text-[#37b4c3]"
			if (color == "secondary")
				cssClass = "border-[#37c382] hover:bg-[#bce9d4] hover:border-[#37c382] text-[#37c382]"
			if (color == "error")
				cssClass = "border-[#c3374e] hover:bg-[#ebc2c9] hover:border-[#c3374e] text-[#c3374e]"
		}

		if (variant == "empty") {
			if (color == "primary")
				cssClass = "hover:bg-[#c7e9ec] border-transparent text-[#37b4c3]"
			if (color == "secondary")
				cssClass = "hover:bg-[#bce9d4] border-transparent text-[#37c382]"
			if (color == "error")
				cssClass = "hover:bg-[#ebc2c9] border-transparent text-[#c3374e]"
		}

		if (fullwidth) cssClass += " w-full"

		setClassName(cssClass)
	}, [])


	return <>
		<button
			className={"border-2 cursor-pointer font-bold px-6 py-3 rounded-xl transition-all duration-200 " + className}
			onClick={onClick}
		>
			<div className="flex justify-center gap-3">
				{children}
			</div>
		</button>
	</>
}