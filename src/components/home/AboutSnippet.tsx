import Link from "next/link";

const facts = [
  { icon: "☕", text: "Coffee runs fuel everything" },
  { icon: "🌊", text: "Bali life is the best backdrop" },
  { icon: "💻", text: "Remote work is my jam" },
  { icon: "♡", text: "Family first, always" },
];

export default function AboutSnippet() {
  return (
    <section className="bg-sand/50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* Left — photo + badge */}
        <div className="relative flex justify-center">
          {/* Circular photo */}
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-stone-200 flex items-center justify-center shadow-md">
            <p className="text-brown/30 text-xs text-center px-4">
              📸 Profile photo<br />
              <span className="text-[10px]">Replace with headshot</span>
            </p>
          </div>

          {/* Circular badge */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-sage flex items-center justify-center shadow-md">
            <p className="text-cream text-[9px] font-semibold text-center leading-tight px-2">
              BALI BASED<br />VIRTUAL<br />ASSISTANT<br />&amp; SOCIAL<br />MEDIA<br />SUPPORT ♡
            </p>
          </div>

          {/* Decorative */}
          <div className="absolute -bottom-6 right-8 text-3xl opacity-25 select-none">🌟</div>
        </div>

        {/* Centre — copy */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">
            Hi, I&apos;m Gem!
          </p>
          <h2 className="font-serif text-3xl font-bold text-brown leading-snug mb-5">
            VA. Mom. Coffee Lover.<br />
            Problem Solver. Overthinker.<br />
            Trying my best over here. <span className="text-gold">✦</span>
          </h2>
          <p className="text-brown/70 text-sm leading-relaxed mb-6">
            I help female entrepreneurs and creatives stay organised,
            show up online, and get things done — while I juggle mom
            life, tropical living, and the occasional existential crisis.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-gold bg-gold-light text-brown text-sm font-medium px-6 py-3 rounded-full hover:bg-gold hover:text-white transition-colors"
          >
            More About Me →
          </Link>
        </div>

        {/* Right — fun facts */}
        <div className="relative grid grid-cols-1 gap-4">
          {facts.map((f) => (
            <div key={f.text} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center text-lg shrink-0">
                {f.icon}
              </div>
              <p className="text-sm text-brown/80 leading-snug">{f.text}</p>
            </div>
          ))}
          {/* Decorative starfish */}
          <div className="absolute -right-4 bottom-0 text-3xl opacity-20 select-none">🦀</div>
        </div>
      </div>
    </section>
  );
}
