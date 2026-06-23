import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.83a8.17 8.17 0 004.77 1.52V6.9a4.85 4.85 0 01-1-.21z" />
    </svg>
  );
}

function IconPinterest() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

const socials = [
  { icon: <IconInstagram />, href: "#", label: "Instagram" },
  { icon: <IconTikTok />, href: "#", label: "TikTok" },
  { icon: <IconPinterest />, href: "#", label: "Pinterest" },
  { icon: <IconMail />, href: "mailto:hello@workdaywithgem.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-sand border-t border-gold-light">

      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Logo block */}
        <div className="flex items-start gap-4">
          {/* WG monogram */}
          <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center shrink-0 mt-0.5">
            <span className="font-serif text-sm font-bold text-cream">wg</span>
          </div>
          <div>
            <p className="font-serif text-lg font-bold text-brown leading-tight">
              workday with gem ✦
            </p>
            <p className="text-xs text-brown/60 mt-1 font-script text-sm">
              Bali workdays & real life ♡
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-sage font-semibold mb-4">
            Quick links
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-wider text-brown/70 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social + tagline */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-sage font-semibold mb-4">
            Find me online
          </p>
          <div className="flex items-center gap-4 text-brown/60">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="hover:text-gold transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gold-light">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brown/50">
          <span>© {new Date().getFullYear()} Workday with Gem</span>
          <span className="font-script text-sm text-brown/60">
            made with coffee & good intentions ♡
          </span>
        </div>
      </div>
    </footer>
  );
}
