"use client";

import { useEffect } from "react";

export default function FontScaler() {


  useEffect(() => {
    const minWidth = 1920; 
    const minFontSize = 62.25; // 56.2 <-- Base padrão
    const maxFontSize = 375;

    const updateFontSize = () => {
      const width = window.innerWidth;
      let newFontSize;

      if (width <= minWidth) {
        newFontSize = minFontSize;
      } else {
        newFontSize = (width / minWidth) * minFontSize;
        newFontSize = Math.min(newFontSize, maxFontSize);
      }

      document.documentElement.style.fontSize = `${newFontSize}%`;
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return null;
}