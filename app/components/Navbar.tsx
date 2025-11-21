"use client";

import { ShoppingCart, CircleUserRound, ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between w-full max-w-3xl mx-auto py-4">
            {/* Navigation Links */}
            <div className="bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200 flex items-center gap-8">
                <a href="#" className="font-medium text-gray-900 hover:text-gray-600">Introduction</a>
                <a href="#" className="font-medium text-gray-900 hover:text-gray-600">FAQs</a>
                <a href="#" className="font-medium text-gray-900 hover:text-gray-600">Blog</a>
                <a href="#" className="font-medium text-gray-900 hover:text-gray-600">Contact</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button className="bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200 flex items-center gap-2 font-medium hover:bg-gray-50">
                    Account <ChevronDown size={16} />
                </button>

                <button className="bg-white rounded-full p-3 shadow-sm border border-gray-200 hover:bg-gray-50 text-[#2D6A62]">
                    <ShoppingCart size={20} />
                </button>
            </div>
        </div>
    );
}
