"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
            aria-label="Close menu"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,320px)] flex-col bg-card shadow-xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-display text-lg font-semibold text-primary">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
