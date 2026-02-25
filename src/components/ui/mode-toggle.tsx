"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-[#ffffff]/20 bg-transparent hover:bg-[#ffffff]/10">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-[#ffffff]" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-[#ffffff]" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={12} className="bg-[#1a0b2e]/95 backdrop-blur-xl border-[#ffffff]/10 rounded-xl shadow-xl">
                <DropdownMenuItem onClick={() => setTheme("light")} className="text-[#e2d5f3] hover:text-[#ffffff] focus:text-[#ffffff] hover:bg-[#ffffff]/10 focus:bg-[#ffffff]/10 cursor-pointer rounded-lg">
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="text-[#e2d5f3] hover:text-[#ffffff] focus:text-[#ffffff] hover:bg-[#ffffff]/10 focus:bg-[#ffffff]/10 cursor-pointer rounded-lg">
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="text-[#e2d5f3] hover:text-[#ffffff] focus:text-[#ffffff] hover:bg-[#ffffff]/10 focus:bg-[#ffffff]/10 cursor-pointer rounded-lg">
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
