"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "@/data/products";

export type CartLine = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  imageSeed: string;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.lines.find((l) => l.productId === product.id);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.productId === product.id
                  ? { ...l, quantity: l.quantity + quantity }
                  : l,
              ),
            };
          }
          return {
            lines: [
              ...state.lines,
              {
                productId: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                quantity,
                imageSeed: product.imageSeed,
              },
            ],
          };
        });
        get().setOpen(true);
      },
      removeItem: (productId) =>
        set((state) => ({
          lines: state.lines.filter((l) => l.productId !== productId),
        })),
      setQuantity: (productId, quantity) => {
        if (quantity < 1) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          lines: state.lines.map((l) =>
            l.productId === productId ? { ...l, quantity } : l,
          ),
        }));
      },
      clear: () => set({ lines: [] }),
      setOpen: (open) => set({ isOpen: open }),
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "knots-cart",
      partialize: (state) => ({ lines: state.lines }),
    },
  ),
);

export function cartLineTotal(line: CartLine) {
  return line.price * line.quantity;
}

export function cartTotal(lines: CartLine[]) {
  return lines.reduce((sum, l) => sum + cartLineTotal(l), 0);
}

export function cartCount(lines: CartLine[]) {
  return lines.reduce((sum, l) => sum + l.quantity, 0);
}
