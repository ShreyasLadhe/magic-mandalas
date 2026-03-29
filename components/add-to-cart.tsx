"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";

import type { Product } from "@/data/products";
import { useCartStore } from "@/store/cart-store";

type Props = {
  product: Product;
};

export function AddToCart({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        addItem(product, 1);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95 sm:w-auto sm:min-w-[220px]"
    >
      {added ? (
        <>
          <Check className="h-4 w-4" strokeWidth={2} />
          Added to bag
        </>
      ) : (
        <>
          <ShoppingBag className="h-4 w-4" strokeWidth={2} />
          Add to bag
        </>
      )}
    </button>
  );
}
