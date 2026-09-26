"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { assetPath } from "@/lib/assets";

interface ProductCarouselProps {
  images: string[];
  productName: string;
}

function ProductCarousel({ images, productName }: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const previous = () => {
    setDirection(-1);

    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const next = () => {
    setDirection(1);

    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <>
      {/* Compact product carousel */}
      <div className="mx-auto w-full max-w-4xl">
        <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/[0.08] bg-[#F3F5F6] shadow-[0_18px_50px_rgba(0,0,0,0.07)] dark:border-white/[0.08] dark:bg-[#111318] dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 30 : -30,
                scale: 0.99,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -30 : 30,
                scale: 0.99,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <img
                src={assetPath(images[activeIndex])}
                alt={`${productName} interface`}
                className="h-full w-full object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle bottom gradient */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Previous */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous image"
            className="absolute top-1/2 left-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:scale-105 hover:bg-black/50"
          >
            <ChevronLeft size={19} strokeWidth={1.8} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute top-1/2 right-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:scale-105 hover:bg-black/50"
          >
            <ChevronRight size={19} strokeWidth={1.8} />
          </button>

          {/* Fullscreen */}
          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            aria-label="View image fullscreen"
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-black/50"
          >
            <Maximize2 size={15} strokeWidth={1.7} />
          </button>

          {/* Minimal progress indicator */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                aria-label={`View product image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-[116px] bottom-0 z-[80] flex items-center justify-center bg-black/90 p-5 backdrop-blur-xl"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-full w-full items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Image */}
              <img
                src={assetPath(images[activeIndex])}
                alt={`${productName} interface`}
                className="max-h-[calc(100vh-156px)] max-w-[92vw] object-contain"
              />

              {/* Close */}
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                aria-label="Close fullscreen image"
                className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                ×
              </button>

              {/* Previous */}
              <button
                type="button"
                onClick={previous}
                aria-label="Previous image"
                className="absolute top-1/2 left-3 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute top-1/2 right-3 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <ChevronRight size={20} />
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    aria-label={`View image ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductCarousel;
