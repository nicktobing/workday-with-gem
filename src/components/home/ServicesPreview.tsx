const services = [
  {
    title: "General VA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    description: "Inbox & calendar management, admin tasks, and everything in between.",
  },
  {
    title: "Social Media Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
    description: "Content scheduling, engagement, and helping your brand show up online.",
  },
  {
    title: "Content Creation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    description: "Captions, graphics, reels ideas, and content that connects with your audience.",
  },
  {
    title: "Project Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      </svg>
    ),
    description: "Organising projects, workflows, and deadlines so nothing falls through.",
  },
  {
    title: "Custom Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    description: "Need something specific? Let's build a package that fits your needs.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">
            How I can help
          </p>
          <h2 className="font-serif text-4xl font-bold text-brown leading-snug">
            Services for your business,<br />
            <span className="italic">so you can breathe.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-sand/60 border border-gold/20 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md hover:border-gold/40 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center text-brown mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="font-serif text-sm font-bold text-brown uppercase tracking-wide mb-3 leading-tight">
                {s.title}
              </h3>
              <p className="text-xs text-brown/60 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-8 gap-6 text-2xl opacity-20 select-none">
          <span>🐚</span><span>⭐</span><span>🐚</span>
        </div>
      </div>
    </section>
  );
}
