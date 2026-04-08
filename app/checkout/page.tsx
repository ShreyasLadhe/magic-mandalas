"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft, Sparkles, MapPin, User, Phone,
  ShoppingBag, CheckCircle2, MessageCircle, Package, Send,
  ChevronDown, Search, Check,
} from "lucide-react";

import { formatInr } from "@/lib/format";
import { getProductImage } from "@/lib/images";
import { products } from "@/data/products";
import { cartLineTotal, cartTotal, useCartStore } from "@/store/cart-store";

const SELLER_WA = "917683834319";

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh",
  "Assam", "Bihar", "Chandigarh", "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand",
  "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal",
];

const HOW_IT_WORKS = [
  { icon: <ShoppingBag size={16} strokeWidth={2} />, label: "Fill your details", desc: "Name, phone & delivery address." },
  { icon: <Send size={16} strokeWidth={2} />, label: "Send via WhatsApp", desc: "Your order opens in WhatsApp, pre-filled and ready." },
  { icon: <MessageCircle size={16} strokeWidth={2} />, label: "Seller confirms", desc: "We reply within a few hours to confirm your order." },
  { icon: <Package size={16} strokeWidth={2} />, label: "Packed & dispatched", desc: "Handcrafted and shipped within 3-5 working days." },
];

/* ─────────────────────────────────────────────
   Custom State Picker
───────────────────────────────────────────── */
function StatePicker({
  value, onChange, error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = INDIAN_STATES.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); setQuery(""); }
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, []);

  // Focus search when opened
  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={[
          "flex w-full items-center justify-between rounded-xl border px-3.5 py-2.5 text-sm outline-none transition",
          "focus:ring-2 focus:ring-[#b05c34]/10",
          open
            ? "border-[#b05c34]/60 bg-white ring-2 ring-[#b05c34]/10"
            : error
            ? "border-red-300 bg-red-50/30"
            : "border-[#e8e0d5] bg-[#faf8f5]",
          value ? "text-primary" : "text-muted/60",
        ].join(" ")}
      >
        <span className="truncate">{value || "Select state / UT"}</span>
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={`shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-2xl border border-[#e8e0d5] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)]">
          {/* Header */}
          <div className="border-b border-[#f0e8e0] bg-gradient-to-br from-[#eed3ca]/30 to-white px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b05c34]">
              Select State / UT
            </p>
          </div>

          {/* Search box */}
          <div className="border-b border-[#f0e8e0] px-3 py-2">
            <div className="flex items-center gap-2 rounded-lg border border-[#e8e0d5] bg-[#faf8f5] px-2.5 py-1.5 focus-within:border-[#b05c34]/50 focus-within:ring-1 focus-within:ring-[#b05c34]/10 transition">
              <Search size={13} className="shrink-0 text-muted" />
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search states..."
                className="w-full bg-transparent text-sm text-primary outline-none placeholder:text-muted/50"
              />
            </div>
          </div>

          {/* List */}
          <ul className="max-h-52 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-sm text-muted">No states found.</li>
            ) : (
              filtered.map((s) => {
                const selected = s === value;
                return (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(s);
                        setOpen(false);
                        setQuery("");
                      }}
                      className={[
                        "flex w-full items-center justify-between px-4 py-2 text-left text-sm transition",
                        selected
                          ? "bg-[#f5ede5] font-semibold text-[#8a4520]"
                          : "text-primary hover:bg-[#faf8f5]",
                      ].join(" ")}
                    >
                      <span>{s}</span>
                      {selected && (
                        <Check size={13} strokeWidth={2.5} className="shrink-0 text-[#b05c34]" />
                      )}
                    </button>
                  </li>
                );
              })
            )}
          </ul>

          {/* Footer hint */}
          <div className="border-t border-[#f0e8e0] bg-[#faf8f5] px-3 py-2">
            <p className="text-[10px] text-muted">
              {filtered.length} state{filtered.length !== 1 ? "s" : ""} · India
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function CheckoutPage() {
  const lines = useCartStore((s) => s.lines);
  const removeItem = useCartStore((s) => s.removeItem);
  const total = cartTotal(lines);

  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "",
    address: "", city: "", pincode: "", state: "", note: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sentLines, setSentLines] = useState(lines);
  const [sentTotal, setSentTotal] = useState(0);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!form.pincode.trim()) e.pincode = "Required";
    if (!form.state) e.state = "Please select a state";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function buildMessage() {
    const divider = "--------------------------------";
    const items = lines
      .map((l) => `${l.name} x${l.quantity}  =  ${formatInr(cartLineTotal(l))}`)
      .join("\n");
    return [
      "NEW ORDER - Magic Mandalas", divider,
      "CUSTOMER",
      `Name: ${form.firstName} ${form.lastName}`,
      `Phone: ${form.phone}`, divider,
      "DELIVERY ADDRESS",
      form.address,
      `${form.city} - ${form.pincode}`,
      form.state, divider,
      "ORDER ITEMS", items, divider,
      `TOTAL: ${formatInr(total)}`,
      ...(form.note ? [divider, `NOTE: ${form.note}`] : []),
      divider, "Placed via Magic Mandalas website",
    ].join("\n");
  }

  function handlePlaceOrder() {
    if (!validate()) return;
    setSentLines([...lines]);
    setSentTotal(total);
    window.open(`https://wa.me/${SELLER_WA}?text=${encodeURIComponent(buildMessage())}`, "_blank");
    lines.forEach((l) => removeItem(l.productId));
    setSent(true);
  }

  if (lines.length === 0 && !sent) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5 px-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5ede5]">
          <ShoppingBag size={26} strokeWidth={1.5} className="text-[#b05c34]" />
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-primary">Your bag is empty</p>
          <p className="mt-1 text-sm text-muted">Add some pieces before checking out.</p>
        </div>
        <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
          Browse collection
        </Link>
      </div>
    );
  }

  if (sent) {
    return (
      <div className="mx-auto w-full max-w-app px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="relative flex h-28 w-28 items-center justify-center">
            <div className="absolute h-28 w-28 rounded-full border border-[#d4a898]/25" />
            <div className="absolute h-20 w-20 rounded-full border border-[#d4a898]/35" />
            <div className="absolute h-12 w-12 rounded-full border border-[#d4a898]/50" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ede5]">
              <CheckCircle2 size={20} strokeWidth={1.8} className="text-[#b05c34]" />
            </div>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold text-primary">Order sent!</p>
            <p className="mt-2 text-sm text-muted">Your order has opened in WhatsApp — just hit Send.<br />We'll confirm once we receive your message.</p>
          </div>
          <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-[#e8e0d5] bg-[#faf8f5] text-left">
            <div className="border-b border-[#e8e0d5] bg-gradient-to-br from-[#eed3ca]/40 via-[#faf8f5] to-[#faf8f5] px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b05c34]">Your order</p>
            </div>
            <ul className="divide-y divide-[#f0e8e0] px-4">
              {sentLines.map((line) => (
                <li key={line.productId} className="flex justify-between py-2.5 text-xs">
                  <span className="text-primary">{line.name} <span className="text-muted">×{line.quantity}</span></span>
                  <span className="font-semibold tabular-nums text-primary">{formatInr(cartLineTotal(line))}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between border-t border-[#e8e0d5] px-4 py-3">
              <span className="text-xs text-muted">Total</span>
              <span className="font-display text-base font-semibold tabular-nums text-primary">{formatInr(sentTotal)}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-muted/60">Back to home</Link>
            <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Keep shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-app px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mb-8">
        <Link href="/" className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted transition hover:text-primary">
          <ArrowLeft size={13} strokeWidth={2} /> Back to shop
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b05c34]">Almost there</p>
        <h1 className="font-display mt-1 text-3xl font-semibold text-primary lg:text-4xl">Complete your order</h1>
        <svg className="mt-2" width="72" height="8" viewBox="0 0 72 8" fill="none">
          <path d="M1 5C6 1.5 11 7 17 4S28 1 33 4.5 44 8 50 4.5 61 1 71 5" stroke="#b05c34" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
        <div className="flex flex-col gap-6">

          {/* How it works */}
          <div className="relative overflow-hidden rounded-2xl border border-[#e8e0d5] bg-gradient-to-br from-[#eed3ca]/40 via-[#faf8f5] to-[#faf8f5] p-5">
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#d4a898]/25" />
            <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full border border-[#d4a898]/15" />
            <div className="mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-[#b05c34]" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b05c34]">How this works</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={step.label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b05c34]/10 text-[#b05c34]">{step.icon}</div>
                    {i < HOW_IT_WORKS.length - 1 && <div className="hidden h-px flex-1 bg-[#e8e0d5] sm:block" />}
                  </div>
                  <p className="text-xs font-semibold text-primary">{step.label}</p>
                  <p className="text-[11px] leading-relaxed text-muted">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 border-t border-[#e8e0d5] pt-3 text-[11px] leading-relaxed text-muted">
              <span className="font-semibold text-[#b05c34]">Transparent &amp; simple:</span> We use WhatsApp so you always have a record of your order. No payment is taken until we confirm availability and you approve the order via chat.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-[#e8e0d5] bg-white p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5ede5]">
                <User size={14} className="text-[#b05c34]" />
              </div>
              <p className="text-sm font-semibold text-primary">Your details</p>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <Field label="First name" error={errors.firstName}>
                  <input value={form.firstName} onChange={set("firstName")} placeholder="Priya" className={inputCls(errors.firstName)} />
                </Field>
                <Field label="Last name" error={errors.lastName}>
                  <input value={form.lastName} onChange={set("lastName")} placeholder="Sharma" className={inputCls(errors.lastName)} />
                </Field>
              </div>

              <Field label="WhatsApp / phone number" error={errors.phone}>
                <div className="relative">
                  <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                  <input value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" className={`${inputCls(errors.phone)} pl-9`} />
                </div>
              </Field>

              <Field label="Street address" error={errors.address}>
                <div className="relative">
                  <MapPin size={14} className="absolute left-3 top-3.5 text-muted" />
                  <textarea value={form.address} onChange={set("address")} placeholder="Flat 4B, Sunrise Apartments, MG Road" rows={2} className={`${inputCls(errors.address)} resize-none pl-9 pt-3`} />
                </div>
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="City" error={errors.city}>
                  <input value={form.city} onChange={set("city")} placeholder="Bhubaneswar" className={inputCls(errors.city)} />
                </Field>
                <Field label="Pincode" error={errors.pincode}>
                  <input value={form.pincode} onChange={set("pincode")} placeholder="751001" className={inputCls(errors.pincode)} />
                </Field>
              </div>

              {/* Custom state picker */}
              <Field label="State" error={errors.state}>
                <StatePicker
                  value={form.state}
                  onChange={(v) => {
                    setForm((f) => ({ ...f, state: v }));
                    setErrors((e) => ({ ...e, state: "" }));
                  }}
                  error={errors.state}
                />
              </Field>

              <Field label="Order note (optional)" error="">
                <textarea value={form.note} onChange={set("note")} placeholder="Colour preference, gift message, special instructions..." rows={2} className={`${inputCls("")} resize-none`} />
              </Field>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d5] bg-[#faf8f5]">
            <div className="relative overflow-hidden border-b border-[#e8e0d5] bg-gradient-to-br from-[#eed3ca]/50 via-[#faf8f5] to-[#faf8f5] px-5 py-4">
              <div className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 rounded-full border border-[#d4a898]/20" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b05c34]">Order summary</p>
              <p className="mt-0.5 text-[11px] text-muted">{lines.reduce((n, l) => n + l.quantity, 0)} items</p>
            </div>
            <ul className="flex flex-col divide-y divide-[#f0e8e0] px-4 py-2">
              {lines.map((line) => (
                <li key={line.productId} className="flex items-center gap-3 py-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[#f5ede5]">
                    <Image src={getProductImage(
                      products.find((p) => p.id === line.productId) ?? { imageUrl: undefined, imageSeed: line.imageSeed },
                      120, 120
                    )} alt="" fill className="object-cover" sizes="48px" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-1 text-xs font-semibold text-primary">{line.name}</p>
                    <p className="text-[11px] text-muted">{formatInr(line.price)} × {line.quantity}</p>
                  </div>
                  <span className="shrink-0 text-xs font-bold tabular-nums text-primary">{formatInr(cartLineTotal(line))}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-[#e8e0d5] bg-white px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Subtotal</span>
                <span className="font-display text-2xl font-semibold tabular-nums text-primary">{formatInr(total)}</span>
              </div>
              <p className="mt-0.5 text-[11px] text-muted">Shipping discussed over WhatsApp.</p>
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d] active:scale-[0.98]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.549 4.107 1.51 5.836L.057 23.215a.75.75 0 0 0 .922.922l5.379-1.453A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 0 1-5.001-1.368l-.359-.213-3.719 1.004 1.004-3.719-.213-.359A9.806 9.806 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Place order via WhatsApp
              </button>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-muted">
                Opens WhatsApp with your order pre-filled. No payment until we confirm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function inputCls(error?: string) {
  return [
    "w-full rounded-xl border bg-[#faf8f5] px-3.5 py-2.5 text-sm text-primary outline-none transition placeholder:text-muted/60",
    "focus:border-[#b05c34]/60 focus:bg-white focus:ring-2 focus:ring-[#b05c34]/10",
    error ? "border-red-300 bg-red-50/30" : "border-[#e8e0d5]",
  ].join(" ");
}

function Field({ label, error, children }: { label: string; error: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-primary/80">{label}</label>
      {children}
      {error && <p className="text-[11px] text-red-500">{error}</p>}
    </div>
  );
}