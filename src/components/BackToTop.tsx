"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#B41448]/30 bg-[#B41448] text-[#FFFFFF] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E3A526] hover:bg-[#E3A526] hover:text-[#FFFFFF] hover:shadow-xl"
          aria-label="Back to top"
        >
          <ArrowUp
            size={20}
            className="transition-transform duration-300 hover:-translate-y-0.5"
          />
        </button>
      )}
    </>
  );
}
