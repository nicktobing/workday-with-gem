import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-800/60 via-orange-700/40 to-amber-900/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-stone-300 via-amber-200 to-orange-300 opacity-60" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left — CTA card */}
        <div className="bg-sand/90 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 shadow-lg max-w-sm">
          <p className="font-script text-3xl text-brown mb-3">
            Let&apos;s work together! ♡
          </p>
          <p className="text-sm text-brown/70 leading-relaxed mb-6">
            I&apos;m here to make your workday easier so you can focus on the big things.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-sage text-cream text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-sage-light transition-colors"
          >
            Get in touch →
          </Link>

          {/* Palm tree */}
          <div className="mt-4 text-2xl opacity-30 select-none">🌴</div>
        </div>

        {/* Right — quote */}
        <div className="text-brown">
          <div className="text-6xl font-serif text-brown/30 leading-none mb-2 select-none">&ldquo;</div>
          <p className="font-serif text-2xl lg:text-3xl font-bold leading-snug text-brown">
            You don&apos;t have to do it all.<br />
            You just have to do what matters.<br />
            I&apos;ll handle the rest.
          </p>
          <p className="mt-4 text-brown/60 text-lg">♡</p>
        </div>
      </div>
    </section>
  );
}
