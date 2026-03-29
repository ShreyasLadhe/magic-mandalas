import type { Metadata } from "next";
import { AboutGallery } from "@/components/about-gallery";

export const metadata: Metadata = {
  title: "Magic Mandalas",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-app px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">

      {/* Layout wrapper */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">

        {/* ── TEXT COLUMN ── */}
        <div className="flex flex-col gap-8">

          {/* Heading block */}
          <div>
            {/* little label above */}
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Handcrafted with love
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-primary lg:text-5xl">
              Magic<br />Mandalas
            </h1>
            {/* decorative squiggle line */}
            <svg className="mt-3" width="72" height="8" viewBox="0 0 72 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.5 C6 1.5 11 7.5 17 4 S28 1 33 4.5 S44 8 50 4.5 S61 1 71 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent opacity-60"/>
            </svg>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2">
            {["Macramé", "Wall Décor", "Handmade", "Small Batches", "Mindful Living"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Story blocks — each paragraph as its own card-like section */}
          <div className="space-y-5">

            <div className="border-l-2 border-accent/40 pl-4">
              <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem] lg:text-base">
                Magic Mandalas is a small handmade brand rooted in{" "}
                <span className="font-medium text-primary">creativity, calm, and intentional design.</span>{" "}
                Each piece is thoughtfully crafted using macramé and soft décor techniques,
                blending traditional artistry with modern aesthetic sensibilities.
              </p>
            </div>

            <div className="border-l-2 border-accent/20 pl-4">
              <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem] lg:text-base">
                Every creation is made in small batches, focusing on detail, texture, and the
                soothing presence these pieces bring into a home — from intricate mandalas to
                minimal wall décor, each design feels{" "}
                <span className="font-medium text-primary">personal, warm, and timeless.</span>
              </p>
            </div>

          </div>

          {/* Social proof / community note */}
          <div className="rounded-2xl bg-accent/8 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Community</p>
            <p className="text-sm leading-relaxed text-muted lg:text-[0.95rem]">
              Through YouTube and Instagram, Magic Mandalas shares not just finished pieces,
              but the creative journey behind them — building a community around{" "}
              <span className="font-medium text-primary">slow, meaningful craftsmanship.</span>
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href="https://www.youtube.com/@MagicMandalas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-background border border-border px-3 py-1.5 text-xs font-medium text-muted hover:text-primary hover:border-primary/40 transition"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-2.75 12.41 12.41 0 0 0-8.45.2 4.82 4.82 0 0 1-3.77 2.75A48.11 48.11 0 0 0 3 12a48.11 48.11 0 0 0 .6 5.31 4.83 4.83 0 0 1 3.77 2.75 12.41 12.41 0 0 0 8.45-.2 4.82 4.82 0 0 1 3.77-2.75A48.11 48.11 0 0 0 21 12a48.11 48.11 0 0 0-.41-5.31zM10 15V9l5 3z"/></svg>
                YouTube
              </a>
              <a
                href="https://www.instagram.com/magic_mandalas_art"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-background border border-border px-3 py-1.5 text-xs font-medium text-muted hover:text-primary hover:border-primary/40 transition"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* ── IMAGE GALLERY ── */}
        <AboutGallery />

      </div>
    </div>
  );
}