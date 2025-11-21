"use client";

interface ProductCardProps {
    title: string;
    sex: string;
    stock: string;
    price: string;
    imageSrc?: string; // Placeholder for now
}

export default function ProductCard({ title, sex, stock, price, imageSrc }: ProductCardProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 w-[320px] items-center">
            {/* Image Placeholder */}
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                {imageSrc ? (
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                )}
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1 flex-1">
                <div className="text-xs font-medium text-gray-900">
                    <p>Product: {title}</p>
                    <p>Sex: {sex}</p>
                    <p>Stock: {stock}</p>
                </div>

                <p className="text-xs font-medium text-gray-900 mt-1">Price: {price}</p>

                <button className="bg-[#2D6A62] text-white text-[10px] font-medium py-1.5 px-4 rounded-full mt-2 self-start hover:bg-[#245650] transition-colors">
                    Go to Shop
                </button>
            </div>
        </div>
    );
}
