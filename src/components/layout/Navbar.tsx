"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="bg-cream border-b border-sand px-6 py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-serif text-xl font-bold text-brown leading-snug shrink-0">
          workday<br />
          <span>with gem</span>
          <span className="text-gold ml-1">✦</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={[
                "text-xs font-semibold uppercase tracking-widest transition-colors pb-0.5",
                isActive(l.href)
                  ? "text-brown border-b-2 border-brown"
                  : "text-brown/70 hover:text-brown border-b-2 border-transparent",
              ].join(" ")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="border border-gold text-brown text-sm px-5 py-2 rounded-full hover:bg-gold-light transition-colors"
          >
            Let&apos;s work together ♡
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brown p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-4 border-t border-sand pt-4 flex flex-col gap-3 pb-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={[
                "text-xs font-semibold uppercase tracking-widest px-1 py-1 transition-colors",
                isActive(l.href) ? "text-brown" : "text-brown/60 hover:text-brown",
              ].join(" ")}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 border border-gold text-brown text-sm px-5 py-2 rounded-full text-center hover:bg-gold-light transition-colors"
          >
            Let&apos;s work together ♡
          </Link>
        </div>
      )}
    </nav>
  );
}
