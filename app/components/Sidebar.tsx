"use client";

import { Sparkles, Upload, X } from "lucide-react";
import { useState, useRef } from "react";
import SidebarDropdown from "./SidebarDropdown";
import Image from "next/image";

export default function Sidebar() {
  // Profile State
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("18");
  const [height, setHeight] = useState("178");
  const [weight, setWeight] = useState("65kg");

  // Scene State
  const [season, setSeason] = useState("Season");
  const [weather, setWeather] = useState("Weather");
  const [activity, setActivity] = useState("Activities");
  const [material, setMaterial] = useState("Material");
  const [style, setStyle] = useState("Style");
  const [brand, setBrand] = useState("Brand");

  // Upload State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Data Options
  const ages = Array.from({ length: 82 }, (_, i) => (i + 18).toString());
  const heights = Array.from({ length: 81 }, (_, i) => (i + 140).toString());
  const weights = Array.from({ length: 111 }, (_, i) => (i + 40).toString() + "kg");

  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
  const weathers = ["Sunny", "Cloudy", "Rainy", "Snowy", "Windy"];
  const activities = ["Casual", "Sport", "Formal", "Party", "Work", "Travel"];
  const materials = ["Cotton", "Wool", "Silk", "Denim", "Leather", "Linen"];
  const styles = ["Minimalist", "Streetwear", "Vintage", "Business", "Chic"];
  const brands = ["Nike", "Adidas", "Zara", "H&M", "Gucci", "LV"];

  return (
    <div className="w-80 bg-[#BDBDBD] h-full flex flex-col p-4 gap-3 overflow-y-auto border-r border-gray-400/20 font-sans scrollbar-thin">
      {/* Logo */}
      <div className="mb-1">
        <div className="bg-[#2D6A62] text-white rounded-full py-2.5 px-6 flex items-center justify-center gap-2 shadow-lg">
          <Sparkles size={18} className="text-yellow-400" />
          <span className="font-semibold text-lg tracking-wide">Wearly</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col gap-1">
        <div className="bg-[#D4D4D4] border border-black/10 rounded-2xl p-3 shadow-sm">
          <h2 className="text-lg font-bold mb-2 text-black">Profile</h2>

          <div className="space-y-2 text-xs font-medium text-gray-800">
            <div className="flex items-center justify-between">
              <span>Gender</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setGender("Male")}
                  className={`px-2 py-0.5 rounded-full border border-black/20 text-[10px] transition-colors ${gender === "Male" ? "bg-black/10" : "bg-transparent text-gray-500"}`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("Female")}
                  className={`px-2 py-0.5 rounded-full border border-black/20 text-[10px] transition-colors ${gender === "Female" ? "bg-black/10" : "bg-transparent text-gray-500"}`}
                >
                  Female
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-between gap-2">
                <span>Age</span>
                <SidebarDropdown label="Age" options={ages} value={age} onChange={setAge} width="w-14" />
              </div>

              <div className="flex items-center justify-between gap-2">
                <span>Height</span>
                <SidebarDropdown label="Height" options={heights} value={height} onChange={setHeight} width="w-16" />
              </div>

              <div className="flex items-center justify-between col-span-2 gap-2">
                <span>Weight</span>
                <SidebarDropdown label="Weight" options={weights} value={weight} onChange={setWeight} width="w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scene Section */}
      <div className="flex flex-col gap-1">
        <div className="bg-[#D4D4D4] border border-black/10 rounded-2xl p-3 shadow-sm">
          <h2 className="text-lg font-bold mb-2 text-black">Scene</h2>

          <div className="grid grid-cols-2 gap-2">
            <SidebarDropdown label="Season" options={seasons} value={season} onChange={setSeason} />
            <SidebarDropdown label="Weather" options={weathers} value={weather} onChange={setWeather} />
            <SidebarDropdown label="Activity" options={activities} value={activity} onChange={setActivity} />
            <SidebarDropdown label="Material" options={materials} value={material} onChange={setMaterial} />
            <SidebarDropdown label="Style" options={styles} value={style} onChange={setStyle} />
            <SidebarDropdown label="Brand" options={brands} value={brand} onChange={setBrand} />
          </div>
        </div>
      </div>

      {/* Picture Upload Section */}
      <div className="flex flex-col gap-1">
        <div className="bg-[#D4D4D4] border border-black/10 rounded-2xl p-3 shadow-sm h-28 flex flex-col">
          <h2 className="text-lg font-bold mb-2 text-black">Upload</h2>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 border-2 border-dotted border-black/30 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-black/5 transition-colors relative overflow-hidden"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />

            {selectedImage ? (
              <>
                <Image
                  src={selectedImage}
                  alt="Uploaded preview"
                  fill
                  className="object-cover"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-0.5 hover:bg-black/70 transition-colors"
                >
                  <X size={12} />
                </button>
              </>
            ) : (
              <>
                <Upload size={20} className="text-gray-700" />
                <span className="text-xs font-medium text-gray-700">Upload Picture</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Go Back Button */}
      <div className="mt-auto pt-2">
        <button className="w-full bg-[#2D6A62] text-white rounded-full py-2.5 font-medium shadow-lg hover:bg-[#245650] transition-colors text-sm">
          Go Back
        </button>
      </div>
    </div>
  );
}
