import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { categories, getProductsByCategory } from "@/data/products";
import { cn } from "@/lib/utils";

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const active = category && categories.includes(category as (typeof categories)[number])
    ? category
    : "All";
  const list = getProductsByCategory(active === "All" ? undefined : active);

  return (
    <div className="mx-auto w-full max-w-app px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <header className="mb-8 lg:mb-10">
        <h1 className="font-display text-3xl font-semibold text-primary lg:text-4xl">
          Shop
        </h1>
        <p className="mt-2 max-w-md text-sm text-muted">
          Tap a category to filter. Product data is static for now — replace with
          your API or database when you connect the backend.
        </p>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => {
          const href = c === "All" ? "/shop" : `/shop?category=${encodeURIComponent(c)}`;
          const isActive = c === active;
          return (
            <Link
              key={c}
              href={href}
              scroll={false}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted hover:border-primary/40 hover:text-primary",
              )}
            >
              {c}
            </Link>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-[11px] sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
        {list.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted">
          Nothing in this category yet.
        </p>
      ) : null}
    </div>
  );
}
