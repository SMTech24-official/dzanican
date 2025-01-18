"use client";

import * as React from "react"
import { IoMdSearch } from "react-icons/io"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { MdArrowDropDown } from "react-icons/md";


const brands = [
  "Rolex",
  "Omega",
  "Tag Heuer",
  "Breitling",
  "Casio",
  "Citizen",
  "Seiko",
  "Tissot",
  "IWC Schaffhausen",
  "Patek Philippe",
  "Audemars Piguet",
  "Longines",
];
const models = [
    "Submariner", "Daytona", "Explorer", "Yacht-Master", "GMT-Master II",
    "Seamaster", "Speedmaster", "Constellation", "Aqua Terra", "De Ville",
    "Carrera", "Monaco"
]
const sizes = ["34mm", "36mm", "38mm", "40mm", "42mm", "44mm", "46mm", "48mm"]

interface WatchFiltersForm {
    brand: string;
    model: string;
    size: string;
}

export default function WatchFilters() {
    const { handleSubmit, setValue } = useForm<WatchFiltersForm>(); // Specify the type here
    const [selectedBrand, setSelectedBrand] = React.useState("")
    const [selectedModel, setSelectedModel] = React.useState("")
    const [selectedSize, setSelectedSize] = React.useState("")


    const router = useRouter()

    const onSubmit: SubmitHandler<WatchFiltersForm> = (data) => {
        console.log(data);
        router.push('/search-result')
    }

    return (
        <div className="w-full max-w-[1100px] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid bg-white py-4 px-6 rounded-[8px] p-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="w-full md:w-[280px] cursor-pointer mr-4 ">
                                <div className="flex items-center gap-2 w-full p-3  rounded-md bg-white hover:border-gray-400">
                                    <div>
                                        <div className="text-[20px] font-semibold mb-1 flex gap-3">{selectedBrand || "Brand"}                                     <MdArrowDropDown className="h-7 w-7 text-black" /></div>
                                        <div className="text-gray-500">
                                            {selectedBrand ? "" : "Select Brand"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[280px] max-h-[280px] overflow-y-auto">
                            {brands.map((brand) => (
                                <DropdownMenuItem
                                    key={brand}
                                    className="py-2 cursor-pointer"
                                    onClick={() => {
                                        setSelectedBrand(brand);
                                        setValue("brand", brand); // Setting value in react-hook-form
                                    }}
                                >
                                    {brand}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="w-full md:w-[280px] cursor-pointer">
                                <div className="flex items-center gap-2 w-full p-3  rounded-md bg-white hover:border-gray-400">
                                    <div>
                                        <div className="text-[20px] font-semibold mb-1 flex gap-3">{selectedModel || "Model"} <MdArrowDropDown className="h-7 w-7 text-black" /></div>
                                        <div className="text-gray-500">
                                            {selectedModel ? "" : "Select Model"}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[280px] max-h-[280px] overflow-y-auto">
                            {models.map((model) => (
                                <DropdownMenuItem
                                    key={model}
                                    className="py-2 cursor-pointer"
                                    onClick={() => {
                                        setSelectedModel(model);
                                        setValue("model", model); // Setting value in react-hook-form
                                    }}
                                >
                                    {model}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="w-full md:w-[280px] cursor-pointer">
                                <div className="flex items-center gap-2 w-full p-3  rounded-md bg-white hover:border-gray-400">
                                    <div>
                                        <div className="text-[20px] font-semibold mb-1 flex gap-3">{selectedSize || "Size"} <MdArrowDropDown className="h-7 w-7 text-black" /></div>
                                        <div className="text-gray-500">
                                            {selectedSize ? "" : "Select Size"}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[280px] max-h-[280px] overflow-y-auto">
                            {sizes.map((size) => (
                                <DropdownMenuItem
                                    key={size}
                                    className="py-2 cursor-pointer"
                                    onClick={() => {
                                        setSelectedSize(size);
                                        setValue("size", size); // Setting value in react-hook-form
                                    }}
                                >
                                    {size}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className="flex lg:justify-end">
                        <Button
                            type="submit"
                            className="w-full md:w-[160px] h-[72px] bg-[#2C3641] hover:bg-[#3A4754] text-white rounded-md flex items-center justify-center gap-2"
                        >
                            <IoMdSearch className="w-5 h-5" />
                            Search
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}