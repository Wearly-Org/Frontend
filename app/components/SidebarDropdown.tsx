"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface SidebarDropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    width?: string;
}

export default function SidebarDropdown({ label, options, value, onChange, width = "w-full" }: SidebarDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`relative ${width}`} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-transparent px-2 py-0.5 rounded-full border border-black/20 text-[10px] flex justify-between items-center hover:bg-black/5 transition-colors"
            >
                <span className="truncate mr-1">{value || label}</span>
                <ChevronDown size={8} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-full max-h-32 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-3 py-1.5 text-[10px] hover:bg-gray-100 text-gray-700"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
