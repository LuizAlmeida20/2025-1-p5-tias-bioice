import { ReactNode } from "react"

export default function Card(props: { children: ReactNode }) {
	return <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
		{props.children}
	</div>
}