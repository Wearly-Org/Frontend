"use client";

import { User, Cloud, Upload, ArrowLeft, Sparkles } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-80 bg-[#BDBDBD] h-full flex flex-col p-6 gap-6 overflow-y-auto border-r border-gray-400/20 font-sans">
      {/* Logo */}
      <div className="mb-2">
        <div className="bg-[#2D6A62] text-white rounded-full py-3 px-6 flex items-center justify-center gap-2 shadow-lg">
          <Sparkles size={20} className="text-yellow-400" />
          <span className="font-semibold text-lg tracking-wide">Wearly</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-600 font-medium ml-1">Layer Profile</h3>
        <div className="bg-[#D4D4D4] border border-black/10 rounded-3xl p-5 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-black">Profile</h2>
          
          <div className="space-y-3 text-sm font-medium text-gray-800">
            <div className="flex items-center justify-between">
              <span>Gender</span>
              <div className="flex gap-2">
                <button className="bg-black/10 px-3 py-1 rounded-full border border-black/20 text-xs">Male</button>
                <button className="bg-transparent px-3 py-1 rounded-full border border-black/20 text-xs text-gray-500">Female</button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Age</span>
              <button className="bg-transparent px-4 py-1 rounded-full border border-black/20 text-xs min-w-[60px] text-right flex justify-between items-center">
                18 <span className="text-[10px]">▼</span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span>Height</span>
              <button className="bg-transparent px-4 py-1 rounded-full border border-black/20 text-xs min-w-[60px] text-right flex justify-between items-center">
                178cm <span className="text-[10px]">▼</span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span>Weight</span>
              <button className="bg-transparent px-4 py-1 rounded-full border border-black/20 text-xs min-w-[60px] text-right flex justify-between items-center">
                65kg <span className="text-[10px]">▼</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scene Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-600 font-medium ml-1">Layer Scene</h3>
        <div className="bg-[#D4D4D4] border border-black/10 rounded-3xl p-5 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-black">Scene</h2>
          
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 rounded-full border border-black/30 text-xs font-medium flex items-center gap-1">
              Season <span className="text-[10px]">▼</span>
            </button>
            <button className="px-3 py-1.5 rounded-full border border-black/30 text-xs font-medium flex items-center gap-1">
              Weather Condition <span className="text-[10px]">▼</span>
            </button>
            <button className="px-3 py-1.5 rounded-full border border-black/30 text-xs font-medium flex items-center gap-1">
              Activities <span className="text-[10px]">▼</span>
            </button>
            <button className="px-3 py-1.5 rounded-full border border-black/30 text-xs font-medium flex items-center gap-1">
              Material <span className="text-[10px]">▼</span>
            </button>
            <button className="px-3 py-1.5 rounded-full border border-black/30 text-xs font-medium flex items-center gap-1">
              Style <span className="text-[10px]">▼</span>
            </button>
            <button className="px-3 py-1.5 rounded-full border border-black/30 text-xs font-medium flex items-center gap-1">
              Brand Preferences <span className="text-[10px]">▼</span>
            </button>
          </div>
        </div>
      </div>

      {/* Picture Upload Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-600 font-medium ml-1">Layer Pic Upload</h3>
        <div className="bg-[#D4D4D4] border border-black/10 rounded-3xl p-5 shadow-sm h-48 flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-black">Picture Upload</h2>
          
          <div className="flex-1 border-2 border-dotted border-black/30 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/5 transition-colors">
            <Upload size={24} className="text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Upload Picture</span>
          </div>
        </div>
      </div>

      {/* Go Back Button */}
      <div className="mt-auto pt-4">
        <h3 className="text-gray-600 font-medium ml-1 mb-2">Layer Go-Back Button</h3>
        <button className="w-full bg-[#2D6A62] text-white rounded-full py-3 font-medium shadow-lg hover:bg-[#245650] transition-colors">
          Go Back
        </button>
      </div>
    </div>
  );
}
