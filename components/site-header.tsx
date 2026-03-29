"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import { cartCount, useCartStore } from "@/store/cart-store";

import { MobileNav } from "@/components/mobile-nav";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lines = useCartStore((s) => s.lines);
  const setOpen = useCartStore((s) => s.setOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  const count = mounted ? cartCount(lines) : 0;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-16 max-w-app items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-primary sm:text-xl"
          >
            Magic Mandalas
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition hover:bg-muted/60"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
              {count > 0 ? (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                  {count > 9 ? "9+" : count}
                </span>
              ) : null}
            </button>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
