import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — copy */}
        <div className="relative">
          {/* Decorative leaf */}
          <div className="absolute -left-8 top-0 text-6xl opacity-20 select-none rotate-[-30deg]">🌿</div>

          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-brown leading-tight mb-4 relative z-10">
            Freelance life.<br />
            <span className="text-gold italic">Real life.</span> ♡
          </h1>

          <p className="text-brown/70 text-base leading-relaxed max-w-sm mb-8">
            Balancing client work, motherhood, and coffee runs in Bali.
            Come for the work, stay for the real talk.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/about"
              className="bg-gold-light border border-gold text-brown text-sm font-medium px-6 py-3 rounded-full hover:bg-gold hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Hey, I&apos;m Gem →
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-brown uppercase tracking-widest border-b border-brown pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Browse Services
            </Link>
          </div>

          <p className="font-script text-xl text-sage/80">
            grab a coffee and stay awhile
          </p>

          {/* Decorative seashell */}
          <div className="absolute -bottom-4 left-10 text-4xl opacity-30 select-none">🐚</div>
          <div className="absolute bottom-8 -left-2 text-2xl opacity-20 select-none">🌸</div>
        </div>

        {/* Right — hero photo */}
        <div className="relative">
          {/* Main photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
            <Image
              src="/images/gem-about.png"
              alt="Gem working from a Bali beach cafe — laptop open, smiling, iced coffee beside her"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Behind the scenes label */}
          <div className="absolute -bottom-4 -right-2 md:right-[-1rem] bg-gold-light border border-gold/40 text-brown text-xs font-medium px-4 py-3 rounded shadow-sm rotate-[2deg] leading-snug">
            behind the scenes<br />
            of my everyday ♡
          </div>

          {/* Decorative starfish */}
          <div className="absolute -top-4 -right-4 text-3xl opacity-25 select-none">⭐</div>
        </div>
      </div>
    </section>
  );
}
