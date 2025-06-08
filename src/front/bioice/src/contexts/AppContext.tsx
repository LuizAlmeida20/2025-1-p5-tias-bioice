import API from "@/services/API"
import { createContext, useContext, useState } from "react"

type AppContextType = {
	api: API
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<null>(null)
	const api = new API()

	return <AppContext.Provider value={{ api }}>
		{children}
	</AppContext.Provider>
}

export const useAppContext = () => {
	const context = useContext(AppContext)
	if (!context) throw new Error("useAppContext must be used within AppProvider")
	return context
}