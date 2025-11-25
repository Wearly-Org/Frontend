"use client";

import { useEffect, useRef } from "react";
import { ShoppingCart, CircleUserRound, ChevronDown } from "lucide-react";

export default function Navbar() {
    const googleDiv = useRef(null);
    type GoogleCredentialResponse = {
      credential: string;
      select_by: string;
      // you can add more fields if you need later
    };
    
    function handleGoogleCallback(res: GoogleCredentialResponse) {
      console.log("Google response:", res);
    }

    useEffect(() => {
      if (window.google && googleDiv.current) {
        window.google.accounts.id.initialize({
          client_id: "401549091502-6da8e0kgo3pqbe2i1tm14tj1aem7id2b.apps.googleusercontent.com",
          callback: handleGoogleCallback,
        });
        window.google.accounts.id.renderButton(googleDiv.current, {
          theme: "filled_blue",
          size: "medium",
          shape: "pill",
        });
      }
    }, []);

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
                <div ref={googleDiv}></div>
                {/* <button className="bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200 flex items-center gap-2 font-medium hover:bg-gray-50">
                    Login
                </button> */}

                <button className="bg-white rounded-full p-3 shadow-sm border border-gray-200 hover:bg-gray-50 text-[#2D6A62]">
                    <ShoppingCart size={20} />
                </button>
            </div>
        </div>
    );
}
