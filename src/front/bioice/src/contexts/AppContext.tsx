"use client"

import API from "@/services/API"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

type User = {
	id: number | null
	name: string
	email: string
}

type AppContextType = {
	api: API
	user: User
	setUser: Dispatch<SetStateAction<User>>
}
const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const api = new API()
	const [user, setUser] = useState<User>({
		id: null,
		name: "",
		email: ""
	})

	return <AppContext.Provider value={{ api, user, setUser }}>
		{children}
	</AppContext.Provider>
}

export const useAppContext = () => {
	const context = useContext(AppContext)
	if (!context) throw new Error("useAppContext must be used within AppProvider")
	return context
}