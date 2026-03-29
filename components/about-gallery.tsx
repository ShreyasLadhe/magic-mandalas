"use client";

import Image from "next/image";

const images = [
  { src: "/images/mandala1.jpeg", alt: "Mandala artwork 1" },
  { src: "/images/mandala2.jpeg", alt: "Mandala artwork 2" },
  { src: "/images/mandala3.jpeg", alt: "Mandala artwork 3" },
] as const;

export function AboutGallery() {
  return (
    <div className="w-full lg:pl-4">
      {/* 3 equal vertical strips */}
      <div className="flex gap-2 overflow-hidden rounded-2xl shadow-md" style={{ height: "420px" }}>
        {images.map((img, i) => (
          <div key={img.src} className="relative flex-1 overflow-hidden rounded-xl">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 30vw, 16vw"
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <p className="mt-2.5 text-xs text-muted text-center lg:text-left">
        Founder, Magic Mandalas
      </p>
    </div>
  );
}