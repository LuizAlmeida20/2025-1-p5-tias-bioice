"use client"

import { useState } from "react";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [state, setState] = useState("")
    return <div>
        <div className="flex">
            <div className="w-20 h-screen bg-green-500">
                AAB
            </div>
            <div className="w-full bg-red-500 p-3">
                {children}
            </div>
        </div>
    </div>
}
