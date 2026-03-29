import Link from "next/link";
import { Play, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto grid max-w-app gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 md:gap-8 lg:px-8 xl:gap-12">
        
        {/* Brand */}
        <div>
          <p className="font-display text-lg font-semibold text-primary">
            Magic Mandalas
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            Handmade mandalas, wall hangings, and mindful decor, rafted in small batches. 
          </p>
        </div>

        {/* Contact / Social */}
        <div>
          <p className="text-sm font-semibold text-foreground">Follow us on</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            
            {/* Location */}
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Bhubaneswar, Odisha, India</span>
            </li>

            {/* YouTube */}
            <li className="flex gap-2 items-center">
              <Play className="h-4 w-4 shrink-0 text-red-500" />
              <a
                href="https://www.youtube.com/@MagicMandalas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Magic Mandalas
              </a>
            </li>

            {/* Instagram */}
            <li className="flex gap-2 items-center">
              <FaInstagram className="h-4 w-4 text-pink-500" />
              <a
                href="https://www.instagram.com/magic_mandalas_art"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @magic_mandalas_art
              </a>
            </li>

          </ul>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-semibold text-foreground">Shop</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/shop" className="text-muted hover:text-primary transition-colors">
                All products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted hover:text-primary transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/80 bg-muted/30 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Magic Mandalas. All rights reserved.
      </div>
    </footer>
  );
}