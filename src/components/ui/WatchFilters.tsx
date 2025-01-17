'use client'

import * as React from "react"
import { IoMdSearch } from "react-icons/io"
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const brands = [
    "Rolex", "Omega", "Tag Heuer", "Breitling", "Casio", "Citizen", "Seiko",
    "Tissot", "IWC Schaffhausen", "Patek Philippe", "Audemars Piguet", "Longines"
]
const models = [
    "Submariner", "Daytona", "Explorer", "Yacht-Master", "GMT-Master II",
    "Seamaster", "Speedmaster", "Constellation", "Aqua Terra", "De Ville",
    "Carrera", "Monaco"
]
const sizes = ["34mm", "36mm", "38mm", "40mm", "42mm", "44mm", "46mm", "48mm"]

export default function WatchFilters() {
    const [selectedBrand, setSelectedBrand] = React.useState("")
    const [selectedModel, setSelectedModel] = React.useState("")
    const [selectedSize, setSelectedSize] = React.useState("")

    return (
        <div className="w-full max-w-[1100px] mx-auto">
            <div className="grid bg-white py-4 px-6 rounded-[8px]  p-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-3"
            >

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="w-full md:w-[280px] cursor-pointer mr-4">
                            <div className="flex items-center justify-between w-full p-3 border rounded-md bg-white hover:border-gray-400">
                                <div>
                                    <div className="text-[20px] font-semibold mb-1">{selectedBrand || "Brand"}</div>
                                    <div className="text-gray-500">
                                        {selectedBrand ? "": "Select Brand"}
                                    </div>
                                </div>
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[280px] max-h-[280px] overflow-y-auto">
                        {brands.map((brand) => (
                            <DropdownMenuItem
                                key={brand}
                                className="py-2 cursor-pointer"
                                onClick={() => setSelectedBrand(brand)}
                            >
                                {brand}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="w-full md:w-[280px] cursor-pointer">
                            <div className="flex items-center justify-between w-full p-3 border rounded-md bg-white hover:border-gray-400">
                                <div>
                                    <div className="text-[20px] font-semibold mb-1">{selectedModel || "Model"}</div>
                                    <div className="text-gray-500">
                                        {selectedModel? "": "Select Model"}
                                    </div>
                                </div>
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[280px] max-h-[280px] overflow-y-auto">
                        {models.map((model) => (
                            <DropdownMenuItem
                                key={model}
                                className="py-2 cursor-pointer"
                                onClick={() => setSelectedModel(model)}
                            >
                                {model}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="w-full md:w-[280px] cursor-pointer">
                            <div className="flex items-center justify-between w-full p-3 border rounded-md bg-white hover:border-gray-400">
                                <div>
                                    <div className="text-[20px] font-semibold mb-1"> {selectedSize || "Size"}</div>
                                    <div className="text-gray-500">
                                        {selectedSize ? "": "Select Size"}
                                    </div>
                                </div>
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[280px] max-h-[280px] overflow-y-auto">
                        {sizes.map((size) => (
                            <DropdownMenuItem
                                key={size}
                                className="py-2 cursor-pointer"
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex justify-end">
                    <Button
                        className="w-full md:w-[160px] h-[72px] bg-[#2C3641] hover:bg-[#3A4754] text-white rounded-md flex items-center justify-center gap-2"
                    >
                        <IoMdSearch className="w-5 h-5" />
                        Search
                    </Button>
                </div>
            </div>
        </div>
    )
}

