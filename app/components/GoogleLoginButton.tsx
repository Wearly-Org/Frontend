"use client";

import { useEffect, useRef } from "react";
import handleGoogleCallback from "../lib/auth/googleCallback";

export default function GoogleLoginButton() {
  const googleDiv = useRef(null);

  useEffect(() => {
    if (window.google && googleDiv.current) {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        callback: handleGoogleCallback,
      });

      window.google.accounts.id.renderButton(googleDiv.current, {
        theme: "filled_blue",
        size: "medium",
        shape: "pill",
      });
    }
  }, []);

  return <div ref={googleDiv}></div>;
}
