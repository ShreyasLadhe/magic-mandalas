"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Product } from "@/data/products";
import { formatInr } from "@/lib/format";
import { productImageUrl } from "@/lib/images";

type Props = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: Props) {
  const src = productImageUrl(product.imageSeed, 600, 750);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
    >
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 320px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="sr-only">{product.name}</span>
      </Link>
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
        <p className="mt-auto pt-2 font-semibold tabular-nums text-foreground">
          {formatInr(product.price)}
        </p>
      </div>
    </motion.article>
  );
}
