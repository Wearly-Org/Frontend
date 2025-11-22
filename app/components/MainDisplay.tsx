"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ModelViewer3D from "./ModelViewer3D";

export default function MainDisplay({ gender }: { gender: string }) {
    const [viewMode, setViewMode] = useState<"3D" | "Image">("Image");

    return (
        <div className="flex-1 relative h-full overflow-hidden flex">
            {/* Center Model Area */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
                {/* View Toggle */}
                <div className="absolute top-4 bg-white rounded-full p-1 shadow-sm border border-gray-200 flex z-10">
                    <button
                        onClick={() => setViewMode("3D")}
                        className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${viewMode === "3D" ? "bg-black text-white" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        3D
                    </button>
                    <button
                        onClick={() => setViewMode("Image")}
                        className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${viewMode === "Image" ? "bg-black text-white" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        Image
                    </button>
                </div>

                {/* Model Image Placeholder */}
                <div className="h-[80%] w-full max-w-md bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {viewMode === "Image" ? (
                        <img
                            src={gender === "Male" ? "/male-model.png" : "/female-model.png"}
                            alt={`${gender} Model`}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <ModelViewer3D gender={gender} />
                    )}

                    {/* Dotted Lines (Visual approximation) - Only show in Image mode */}
                    {viewMode === "Image" && (
                        <>
                            <div className="absolute right-0 top-[20%] w-32 border-t-2 border-dashed border-gray-400 translate-x-1/2 rotate-[-15deg] opacity-50 pointer-events-none"></div>
                            <div className="absolute right-0 top-[50%] w-32 border-t-2 border-dashed border-gray-400 translate-x-1/2 opacity-50 pointer-events-none"></div>
                            <div className="absolute right-0 bottom-[20%] w-32 border-t-2 border-dashed border-gray-400 translate-x-1/2 rotate-[15deg] opacity-50 pointer-events-none"></div>
                        </>
                    )}
                </div>
            </div>

            {/* Right Product Cards */}
            <div className="w-[350px] flex flex-col justify-center gap-8 pr-8 h-full overflow-y-auto py-8">
                <div className="transform translate-x-0 transition-transform hover:-translate-x-2 duration-300">
                    <ProductCard
                        title="Hat"
                        sex="Male/Female"
                        stock="Only 2 left"
                        price="100Euro"
                    />
                </div>

                <div className="transform translate-x-0 transition-transform hover:-translate-x-2 duration-300">
                    <ProductCard
                        title="Coat"
                        sex="Male/Female"
                        stock="Only 2 left"
                        price="100Euro"
                    />
                </div>

                <div className="transform translate-x-0 transition-transform hover:-translate-x-2 duration-300">
                    <ProductCard
                        title="Pants"
                        sex="Male/Female"
                        stock="Only 2 left"
                        price="100Euro"
                    />
                </div>
            </div>
        </div>
    );
}
