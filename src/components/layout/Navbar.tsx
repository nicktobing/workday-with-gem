"use client";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <nav className="bg-cream border-b border-sand px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold text-brown leading-tight">
          workday<br />
          <span className="text-gold">with gem</span> ✦
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brown hover:text-gold transition-colors uppercase tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="border border-gold text-brown text-sm px-5 py-2 rounded-full hover:bg-gold-light transition-colors"
          >
            Let&apos;s work together ♡
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brown"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-brown uppercase tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-gold text-brown text-sm px-5 py-2 rounded-full text-center"
          >
            Let&apos;s work together ♡
          </Link>
        </div>
      )}
    </nav>
  );
}
