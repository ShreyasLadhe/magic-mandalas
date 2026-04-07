"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";

import type { Product } from "@/data/products";
import { formatInr } from "@/lib/format";
import { getProductImage } from "@/lib/images";
import { useCartStore } from "@/store/cart-store";

type Props = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: Props) {
  const src = getProductImage(product, 600, 750);
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (added) return;
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
    >
      {/* ── Image ── */}
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-muted"
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 320px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        {/* ── Add to bag overlay ── */}
        <div
          className={[
            "absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 py-3.5 px-4",
            "translate-y-full transition-transform duration-300 ease-out",
            "group-hover:translate-y-0",
            added
              ? "bg-[#2d8c4e]"
              : "bg-[#1c2b3a]/85 backdrop-blur-sm",
          ].join(" ")}
          onClick={handleAdd}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleAdd(e as unknown as React.MouseEvent)}
          aria-label={added ? "Added to bag" : "Add to bag"}
        >
          {added ? (
            <>
              <Check size={15} strokeWidth={2.5} className="text-white" />
              <span className="text-xs font-semibold tracking-wide text-white">
                Added to bag!
              </span>
            </>
          ) : (
            <>
              <ShoppingBag size={15} strokeWidth={2} className="text-white/80" />
              <span className="text-xs font-semibold tracking-wide text-white">
                Add to bag
              </span>
            </>
          )}
        </div>

        <span className="sr-only">{product.name}</span>
      </Link>

      {/* ── Info ── */}
      <div className="flex flex-1 flex-col gap-1 p-3 sm:p-4">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted">
          {product.category}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="line-clamp-2 font-medium text-primary transition hover:text-accent"
        >
          {product.name}
        </Link>
        <p className="line-clamp-2 text-sm text-muted">{product.shortDescription}</p>

        {/* price + quick-add row */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="font-semibold tabular-nums text-foreground">
            {formatInr(product.price)}
          </p>

          {/* small icon button — always visible on mobile, complements the hover bar on desktop */}
          <button
            type="button"
            onClick={handleAdd}
            aria-label={added ? "Added to bag" : "Add to bag"}
            className={[
              "flex h-8 w-8 items-center justify-center rounded-full border transition",
              added
                ? "border-[#2d8c4e]/40 bg-[#edf7f1] text-[#2d8c4e]"
                : "border-border bg-background text-muted hover:border-[#b05c34]/40 hover:bg-[#f5ede5] hover:text-[#b05c34]",
            ].join(" ")}
          >
            {added
              ? <Check size={14} strokeWidth={2.5} />
              : <ShoppingBag size={14} strokeWidth={2} />
            }
          </button>
        </div>
      </div>
    </motion.article>
  );
}