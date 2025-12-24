"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-1/2 right-3 -translate-y-1/2
        h-24 w-1 rounded-full
        bg-white/20
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0"}
        pointer-events-none
        z-50
      `}
    />
  );
}
