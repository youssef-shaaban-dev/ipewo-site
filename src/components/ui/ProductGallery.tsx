"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductGallery({ images, title }: { images?: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevImages, setPrevImages] = useState(images);

  // If images array changes, reset index during render (React recommended pattern)
  if (images !== prevImages) {
    setPrevImages(images);
    setCurrentIndex(0);
  }

  const hasImages = images && images.length > 0;
  const currentImage = hasImages ? images[currentIndex] : null;

  const nextImage = () => {
    if (images && images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images && images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-100 group">
        {currentImage ? (
          <>
            <Image
              src={currentImage}
              alt={title}
              fill
              className="object-contain p-4 transition-all duration-300"
              priority
            />
            {images && images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentIndex === idx ? 'bg-blue-600 w-5' : 'bg-slate-400 hover:bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/ipewo-logo.webp" alt="IPEWO Logo" width={200} height={100} className="opacity-20 grayscale" />
          </div>
        )}
      </div>
      
      {images && images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden shadow-sm border-2 transition-all cursor-pointer ${
                currentIndex === idx ? 'border-blue-600 opacity-100 scale-105' : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-blue-400'
              }`}
            >
              <Image src={img} alt={`${title} thumbnail ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
