"use client";
import { useState } from "react";

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.83a8.17 8.17 0 004.77 1.52V6.9a4.85 4.85 0 01-1-.21z" />
    </svg>
  );
}
function IconPinterest() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to Kit / ConvertKit API
    setSubmitted(true);
  };

  return (
    <section className="bg-sand/60 border-t border-gold/20 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — blog preview thumbnails (decorative grid) */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { color: "from-amber-100 to-orange-100", label: "LIFE" },
            { color: "from-sky-50 to-blue-100", label: "BALI" },
            { color: "from-green-50 to-emerald-100", label: "TIPS" },
            { color: "from-stone-100 to-amber-50", label: "BTS" },
          ].map((t) => (
            <div
              key={t.label}
              className={`h-24 rounded-xl bg-gradient-to-br ${t.color} flex items-end p-2`}
            >
              <span className="text-[10px] font-bold text-brown/50 uppercase tracking-wider">{t.label}</span>
            </div>
          ))}
        </div>

        {/* Right — signup */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gold font-semibold mb-2">
            Real Talk & Workday Diaries
          </p>

          <h2 className="font-serif text-3xl font-bold text-brown mb-1">
            Straight to your inbox.
          </h2>
          <p className="text-gold/70 text-sm mb-4">~~~</p>

          <p className="text-sm text-brown/60 leading-relaxed mb-6">
            Tips, behind-the-scenes, and a little real talk — no spam, I promise.
          </p>

          {submitted ? (
            <div className="bg-sage/10 border border-sage/30 rounded-xl p-4 text-sm text-sage font-medium">
              You&apos;re in! ♡ Check your inbox for a welcome note.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 text-sm px-4 py-3 rounded-full border border-gold/40 bg-cream focus:outline-none focus:border-gold text-brown placeholder:text-brown/30"
              />
              <button
                type="submit"
                className="bg-gold-light border border-gold text-brown text-sm font-semibold px-5 py-3 rounded-full hover:bg-gold hover:text-white transition-colors whitespace-nowrap"
              >
                I&apos;m in! →
              </button>
            </form>
          )}

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-6 text-brown/40">
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><IconInstagram /></a>
            <a href="#" aria-label="TikTok" className="hover:text-gold transition-colors"><IconTikTok /></a>
            <a href="#" aria-label="Pinterest" className="hover:text-gold transition-colors"><IconPinterest /></a>
            <a href="mailto:hello@workdaywithgem.com" aria-label="Email" className="hover:text-gold transition-colors"><IconMail /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
