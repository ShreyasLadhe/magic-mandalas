"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Truck, Search, MapPin, Check } from "lucide-react";
import { useState } from "react";

import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

const heroImage = "/images/hero-mandala.png";
const PHONE = "+91 98765 43210"; // ← replace with your real number

function CopyPhone() {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(PHONE.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handle}
      className="mt-auto inline-flex items-center gap-2 rounded-full border border-[#e0c4b0] bg-[#f5ede5] px-3 py-1.5 text-[11px] font-semibold text-[#8a4520] transition hover:bg-[#eeddd3] active:scale-95"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b05c34] opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b05c34]" />
      </span>
      {copied ? "Copied! 🎉" : `${PHONE} · tap to copy`}
    </button>
  );
}

const trustCards = [
  {
    icon: <Truck size={20} strokeWidth={1.8} className="text-[#b05c34]" />,
    title: "Pan-India Shipping",
    desc: "Every piece packed with care, delivered to your door.",
    cta: (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#b05c34]">
        <Check size={10} strokeWidth={2.5} />
        All states covered
      </span>
    ),
  },
  {
    icon: <Search size={20} strokeWidth={1.8} className="text-[#b05c34]" />,
    title: "Browse the Collection",
    desc: "Mandalas, wall hangings, and soft décor — all in one place.",
    cta: (
      <Link
        href="/shop"
        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#b05c34] hover:underline"
      >
        Explore all pieces
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
      </Link>
    ),
  },
  {
    icon: <MapPin size={20} strokeWidth={1.8} className="text-[#b05c34]" />,
    title: "Custom Orders Welcome",
    desc: "Have a vision? Let's make it. Every order can be personalised.",
    cta: <CopyPhone />,
  },
];

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-[#eed3ca]/90 via-background to-[#e8eaf6]/80">
        <div className="relative mx-auto max-w-app px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:py-16 xl:py-20">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">

            <div className="relative z-10 flex w-full max-w-xl flex-col gap-5 lg:max-w-none">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                Small-batch · Handmade · Soulful
              </p>
              <div>
                <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl xl:text-[3.25rem] xl:leading-tight">
                  Sacred patterns<br />
                  <span className="text-accent">for peaceful</span><br />
                  spaces.
                </h1>
                <svg className="mt-2" width="84" height="9" viewBox="0 0 84 9" fill="none">
                  <path d="M1 6C7 2 13 8 21 5S34 2 41 5.5 54 9 61 5.5 72 2 83 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent opacity-50" />
                </svg>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base lg:text-[1.05rem]">
                Handcrafted mandalas, wall hangings, and mindful décor —
                designed to bring{" "}
                <span className="font-medium text-primary">balance, warmth, and quiet beauty</span>{" "}
                into your everyday spaces.
              </p>
              <div className="flex flex-wrap gap-2">
                {["✦ Macramé art", "✦ Wall décor", "✦ Custom orders", "✦ Gift-ready"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 lg:px-6 lg:py-3">
                  Shop collection <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link href="/about" className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-muted/60 lg:px-6 lg:py-3">
                  Our story
                </Link>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[min(100%,20rem)] overflow-hidden rounded-[20px] border border-border bg-[#f5f0e8] shadow-lg sm:max-w-sm lg:mx-0 lg:max-w-md lg:justify-self-end xl:max-w-lg">
              <Image src={heroImage} alt="Magic Mandalas — ornate mandala emblem" fill priority className="object-contain p-2 sm:p-3" sizes="(max-width: 1024px) 80vw, (max-width: 1280px) 40vw, 512px" />
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST STRIP — card grid ── */}
      <section className="border-b border-border bg-background py-8">
        <div className="mx-auto max-w-app px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {trustCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-5 transition hover:border-border hover:shadow-sm"
              >
                {/* icon bubble */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5ede5]">
                  {card.icon}
                </div>
                {/* text */}
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-primary">{card.title}</p>
                  <p className="text-xs leading-relaxed text-muted">{card.desc}</p>
                </div>
                {/* cta */}
                <div className="mt-auto pt-1">{card.cta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="mx-auto w-full max-w-app px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Handpicked for you</p>
            <h2 className="font-display text-2xl font-semibold text-primary lg:text-3xl">Featured pieces</h2>
          </div>
          <Link href="/shop" className="shrink-0 text-sm font-semibold text-accent hover:underline">View all →</Link>
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