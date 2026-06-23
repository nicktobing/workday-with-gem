import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-sand border-t border-gold-light mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & tagline */}
        <div>
          <p className="font-serif text-xl font-bold text-brown">
            workday with gem ✦
          </p>
          <p className="text-sm text-brown-light mt-1">Bali workdays & real life ♡</p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs uppercase tracking-widest text-sage mb-3">Quick links</p>
          <div className="grid grid-cols-2 gap-1">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-brown hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="text-xs uppercase tracking-widest text-sage mb-3">Find me online</p>
          <div className="flex gap-4 text-brown-light">
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors text-xl">ig</a>
            <a href="#" aria-label="TikTok" className="hover:text-gold transition-colors text-xl">tk</a>
            <a href="#" aria-label="Pinterest" className="hover:text-gold transition-colors text-xl">pt</a>
            <a href="mailto:hello@workdaywithgem.com" aria-label="Email" className="hover:text-gold transition-colors text-xl">✉</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-light text-center py-4 text-xs text-brown-light">
        made with coffee & good intentions ♡ © {new Date().getFullYear()} Workday with Gem
      </div>
    </footer>
  );
}
