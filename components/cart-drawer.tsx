"use client";

import Image from "next/image";
import Link from "next/link";
import { Drawer } from "vaul";
import { Minus, Plus, Trash2 } from "lucide-react";

import { formatInr } from "@/lib/format";
import { productImageUrl } from "@/lib/images";
import {
  cartLineTotal,
  cartTotal,
  useCartStore,
} from "@/store/cart-store";

export function CartDrawer() {
  const lines = useCartStore((s) => s.lines);
  const isOpen = useCartStore((s) => s.isOpen);
  const setOpen = useCartStore((s) => s.setOpen);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  const total = cartTotal(lines);

  return (
    <Drawer.Root open={isOpen} onOpenChange={setOpen} direction="right">
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[90] bg-black/40" />
        <Drawer.Content className="fixed bottom-0 right-0 z-[100] mt-24 flex h-full w-[min(100%,420px)] flex-col rounded-none border-l border-border bg-background outline-none">
          <div className="flex items-center justify-between border-b border-border px-4 py-4">
            <Drawer.Title className="font-display text-lg font-semibold text-primary">
              Your bag
            </Drawer.Title>
            <Drawer.Close className="rounded-full px-3 py-1.5 text-sm font-medium text-muted hover:bg-muted">
              Close
            </Drawer.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {lines.length === 0 ? (
              <p className="text-sm text-muted">
                Your bag is empty. Browse the{" "}
                <Link
                  href="/shop"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                  onClick={() => setOpen(false)}
                >
                  shop
                </Link>{" "}
                to add items.
              </p>
            ) : (
              <ul className="flex flex-col gap-4">
                {lines.map((line) => (
                  <li
                    key={line.productId}
                    className="flex gap-3 rounded-xl border border-border bg-card p-3"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={productImageUrl(line.imageSeed, 200, 200)}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/product/${line.slug}`}
                        className="line-clamp-2 text-sm font-medium text-primary hover:text-accent"
                        onClick={() => setOpen(false)}
                      >
                        {line.name}
                      </Link>
                      <p className="mt-1 text-sm tabular-nums text-muted">
                        {formatInr(line.price)} each
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="inline-flex items-center rounded-full border border-border bg-background">
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center hover:bg-muted"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              setQuantity(line.productId, line.quantity - 1)
                            }
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm tabular-nums">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center hover:bg-muted"
                            aria-label="Increase quantity"
                            onClick={() =>
                              setQuantity(line.productId, line.quantity + 1)
                            }
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-muted hover:text-destructive"
                          aria-label="Remove item"
                          onClick={() => removeItem(line.productId)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-2 text-sm font-semibold tabular-nums">
                        {formatInr(cartLineTotal(line))}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {lines.length > 0 ? (
            <div className="border-t border-border bg-card px-4 py-4">
              <div className="flex items-center justify-between text-base font-semibold">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatInr(total)}</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                Shipping &amp; taxes calculated at checkout (placeholder).
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                Checkout
              </button>
            </div>
          ) : null}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
