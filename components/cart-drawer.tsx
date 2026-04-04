"use client";

import Image from "next/image";
import Link from "next/link";
import { Drawer } from "vaul";
import { Minus, Plus, Trash2, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";

import { formatInr } from "@/lib/format";
import { productImageUrl } from "@/lib/images";
import { cartLineTotal, cartTotal, useCartStore } from "@/store/cart-store";

export function CartDrawer() {
  const lines = useCartStore((s) => s.lines);
  const isOpen = useCartStore((s) => s.isOpen);
  const setOpen = useCartStore((s) => s.setOpen);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  const total = cartTotal(lines);
  const itemCount = lines.reduce((n, l) => n + l.quantity, 0);

  return (
    <Drawer.Root open={isOpen} onOpenChange={setOpen} direction="right">
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-[2px]" />

        <Drawer.Content className="fixed bottom-0 right-0 z-[100] flex h-full w-[min(100%,400px)] flex-col bg-[#faf8f5] outline-none">

          {/* ── Header ── */}
          <div className="relative overflow-hidden border-b border-[#e8e0d5] bg-gradient-to-br from-[#eed3ca]/60 via-[#faf8f5] to-[#faf8f5] px-5 py-5">
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-[#d4a898]/30" />
            <div className="pointer-events-none absolute -right-3 -top-3 h-14 w-14 rounded-full border border-[#d4a898]/20" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b05c34]/10">
                  <ShoppingBag size={16} strokeWidth={2} className="text-[#b05c34]" />
                </div>
                <div>
                  <Drawer.Title className="font-display text-lg font-semibold leading-none text-primary">
                    Your bag
                  </Drawer.Title>
                  {itemCount > 0 && (
                    <p className="mt-0.5 text-[11px] text-[#b05c34]">
                      {itemCount} {itemCount === 1 ? "item" : "items"} · handpicked
                    </p>
                  )}
                </div>
              </div>

              <Drawer.Close className="rounded-full border border-[#e8e0d5] bg-white px-3.5 py-1.5 text-xs font-medium text-muted transition hover:border-[#d4c4b8] hover:text-primary">
                Close
              </Drawer.Close>
            </div>
          </div>

          {/* ── Body ── */}
          <div className="flex-1 overflow-y-auto px-4 py-5">
            {lines.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5ede5]">
                  <ShoppingBag size={26} strokeWidth={1.5} className="text-[#b05c34]" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-primary">Your bag is empty</p>
                  <p className="mt-1 text-sm text-muted">Every mandala finds its home.</p>
                </div>
                <Link
                  href="/shop"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Browse collection <ArrowRight size={14} strokeWidth={2} />
                </Link>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted">
                  <Sparkles size={11} className="text-[#b05c34]" />
                  Handcrafted · Small-batch · Soulful
                </div>
              </div>
            ) : (
              <ul className="flex flex-col gap-3">
                {lines.map((line) => (
                  <li
                    key={line.productId}
                    className="group relative overflow-hidden rounded-2xl border border-[#e8e0d5] bg-white p-3 transition hover:border-[#d4c4b8] hover:shadow-sm"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-[#e8a98a] to-[#c4714d]" />
                    <div className="flex gap-3 pl-2">
                      <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl bg-[#f5ede5]">
                        <Image
                          src={productImageUrl(line.imageSeed, 200, 200)}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="72px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/product/${line.slug}`}
                          className="line-clamp-2 text-sm font-semibold leading-snug text-primary hover:text-[#b05c34]"
                          onClick={() => setOpen(false)}
                        >
                          {line.name}
                        </Link>
                        <p className="mt-0.5 text-xs text-muted">{formatInr(line.price)} each</p>
                        <div className="mt-2.5 flex items-center justify-between">
                          <div className="inline-flex items-center overflow-hidden rounded-full border border-[#e8e0d5] bg-[#faf8f5]">
                            <button type="button" aria-label="Decrease" onClick={() => setQuantity(line.productId, line.quantity - 1)} className="flex h-7 w-7 items-center justify-center text-muted transition hover:bg-[#f5ede5] hover:text-[#b05c34]">
                              <Minus size={12} strokeWidth={2.5} />
                            </button>
                            <span className="min-w-[1.75rem] text-center text-xs font-semibold tabular-nums text-primary">{line.quantity}</span>
                            <button type="button" aria-label="Increase" onClick={() => setQuantity(line.productId, line.quantity + 1)} className="flex h-7 w-7 items-center justify-center text-muted transition hover:bg-[#f5ede5] hover:text-[#b05c34]">
                              <Plus size={12} strokeWidth={2.5} />
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold tabular-nums text-primary">{formatInr(cartLineTotal(line))}</span>
                            <button type="button" aria-label="Remove" onClick={() => removeItem(line.productId)} className="flex h-7 w-7 items-center justify-center rounded-full text-muted transition hover:bg-red-50 hover:text-red-500">
                              <Trash2 size={13} strokeWidth={2} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ── Footer ── */}
          {lines.length > 0 && (
            <div className="border-t border-[#e8e0d5] bg-white px-5 py-5">
              <div className="mb-4 flex items-start gap-2 rounded-xl bg-[#f5ede5] px-3 py-2.5">
                <Sparkles size={13} className="mt-0.5 shrink-0 text-[#b05c34]" />
                <p className="text-[11px] leading-relaxed text-[#8a4520]">
                  Each piece is handcrafted to order. Dispatch in 3–5 working days.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted">Subtotal</span>
                <span className="font-display text-xl font-semibold tabular-nums text-primary">{formatInr(total)}</span>
              </div>
              <p className="mt-0.5 text-[11px] text-muted">Shipping discussed at checkout.</p>

              {/* ← Link to checkout page instead of a plain button */}
              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Proceed to checkout
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          )}

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}