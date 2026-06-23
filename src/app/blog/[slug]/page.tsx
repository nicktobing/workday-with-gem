export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-brown-light">Post: {params.slug} — coming in Phase 5.</p>
    </div>
  );
}
