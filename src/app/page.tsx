import Hero from "@/components/home/Hero";
import AboutSnippet from "@/components/home/AboutSnippet";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTABanner from "@/components/home/CTABanner";
import BlogPreview from "@/components/home/BlogPreview";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <ServicesPreview />
      <CTABanner />
      <BlogPreview />
      <Newsletter />
    </>
  );
}
