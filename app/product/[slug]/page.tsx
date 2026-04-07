import Image from "next/image";
import { notFound } from "next/navigation";

import { AddToCart } from "@/components/add-to-cart";
import { getProductBySlug, products } from "@/data/products";
import { formatInr } from "@/lib/format";
import { getProductImage } from "@/lib/images";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const src = getProductImage(product, 900, 1100);

  return (
    <div className="mx-auto w-full max-w-app px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xl shrink-0 overflow-hidden rounded-2xl border border-border bg-muted md:mx-0 md:max-w-md lg:sticky lg:top-24 lg:max-w-md xl:max-w-lg">
          <Image
            src={src}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col lg:pt-2 xl:max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            {product.category}
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold text-primary lg:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold tabular-nums text-foreground lg:text-3xl">
            {formatInr(product.price)}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCart product={product} />
          </div>

          <ul className="mt-10 space-y-2 border-t border-border pt-6 text-sm text-muted">
            <li>• Handcrafted to order — each piece is unique.</li>
            <li>• Dispatched within 3–5 working days.</li>
            <li>• Custom sizes available — DM us on Instagram.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}