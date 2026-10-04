"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images, title }: { images?: string[], title: string }) {
  const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : null);

  return (
    <div className="space-y-6 sticky top-24">
      <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-100 p-4">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-contain p-4"
            priority
          />
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
              onClick={() => setMainImage(img)}
              className={`relative aspect-square rounded-xl overflow-hidden shadow-sm border-2 transition-all cursor-pointer ${
                mainImage === img ? 'border-blue-600 opacity-100 scale-105' : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-blue-400'
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
