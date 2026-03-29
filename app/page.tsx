import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Truck } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

const heroImage = "/images/hero-mandala.png";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-[#eed3ca]/90 via-background to-[#e8eaf6]/80">
        <div className="relative mx-auto max-w-app px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:py-16 xl:py-20">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <div className="relative z-10 w-full max-w-xl lg:max-w-none">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                Small-batch handmade
              </p>
              <h1 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-tight">
                Sacred patterns for peaceful spaces
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              Handcrafted mandalas, wall hangings, and mindful decor 
                designed to bring balance, warmth, and quiet beauty into your everyday spaces.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95 lg:px-6 lg:py-3"
                >
                  Shop collection
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-muted/60 lg:px-6 lg:py-3"
                >
                  Our story
                </Link>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[min(100%,20rem)] overflow-hidden rounded-[20px] border border-border bg-[#f5f0e8] shadow-lg sm:max-w-sm lg:mx-0 lg:max-w-md lg:justify-self-end xl:max-w-lg">
              <Image
                src={heroImage}
                alt="M&amp;M mandala emblem — ornate gold and cream circular artwork"
                fill
                priority
                className="object-contain p-2 sm:p-3"
                sizes="(max-width: 1024px) 80vw, (max-width: 1280px) 40vw, 512px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-4">
        <div className="mx-auto flex max-w-app flex-col items-center gap-3 px-4 text-xs font-medium text-muted sm:flex-row sm:flex-wrap sm:justify-between sm:gap-6 sm:px-6 md:flex-nowrap md:gap-8 lg:px-8">
          <span className="inline-flex items-center gap-2">
            <Truck className="h-4 w-4 text-accent" strokeWidth={2} />
            Pan-India shipping (placeholder)
          </span>
          <span className="hidden h-4 w-px bg-border md:block" />
          <span className="text-center md:text-left">Secure checkout coming soon</span>
          <span className="hidden h-4 w-px bg-border md:block" />
          <span className="text-center md:text-left">DM to customise — placeholder</span>
        </div>
      </section>

      <section className="mx-auto w-full max-w-app px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-primary lg:text-3xl">
              Featured
            </h2>
            <p className="mt-1 max-w-lg text-sm text-muted lg:text-base">
              Placeholder pricing — wire up your database when you are ready.
            </p>
          </div>
          <Link
            href="/shop"
            className="shrink-0 text-sm font-semibold text-accent hover:underline sm:mt-0"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-[11px] sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
