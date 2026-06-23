import Link from "next/link";

const posts = [
  {
    slug: "a-day-in-my-life-bali",
    category: "LIFE",
    title: "A Day in My Life as a VA & Mom in Bali",
    date: "May 12, 2024",
    color: "from-amber-100 to-orange-100",
  },
  {
    slug: "5-tools-freelancer",
    category: "TIPS",
    title: "5 Tools I Can't Live Without as a Freelancer",
    date: "May 5, 2024",
    color: "from-green-50 to-emerald-100",
  },
  {
    slug: "how-i-stay-organised",
    category: "BTS",
    title: "How I Stay Organised (Most of the Time)",
    date: "April 28, 2024",
    color: "from-stone-100 to-amber-50",
  },
  {
    slug: "bali-cafe-guide",
    category: "BALI",
    title: "Bali Cafe Guide: My Favourite Work Spots",
    date: "April 20, 2024",
    color: "from-sky-50 to-blue-100",
  },
];

const categoryColours: Record<string, string> = {
  LIFE: "bg-sage text-cream",
  TIPS: "bg-gold text-white",
  BTS: "bg-brown text-cream",
  BALI: "bg-amber-600 text-white",
};

export default function BlogPreview() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <p className="text-xs uppercase tracking-widest text-gold font-semibold">
            From the Workday Diaries
          </p>
          <span className="text-gold/50 text-sm">~~~</span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border border-gold/20 hover:shadow-md hover:border-gold/40 transition-all bg-white"
            >
              {/* Cover placeholder */}
              <div className={`h-40 bg-gradient-to-br ${post.color} relative`}>
                <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${categoryColours[post.category]}`}>
                  {post.category}
                </span>
              </div>

              {/* Copy */}
              <div className="p-4">
                <h3 className="font-serif text-sm font-bold text-brown leading-snug mb-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-[11px] text-brown/40 uppercase tracking-wide">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="text-sm font-semibold text-brown uppercase tracking-widest border-b border-brown pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            Read all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
