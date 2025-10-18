import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogMetadata } from "../metadata";

export const metadata = blogMetadata;

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "N's Wellness Diary – My Journey from Obese Teen to Wellness Coach",
    excerpt: "From moot courts to workout floors, my journey has been far from ordinary. I was never a health-conscious person...",
    date: "October 16, 2025",
    slug: "journey-from-obese-teen-to-wellness-coach",
    thumbnail: "/blog/one.png"
  },
  {
    id: 2,
    title: "Start Small, Stay Consistent: My Guide to Begin Your Wellness Journey",
    excerpt: "After I shared my own transformation, one question I get all the time is — 'Where do I start?' And my answer is always the same...",
    date: "October 18, 2025",
    slug: "start-small-stay-consistent",
    thumbnail: "/blog/two.png" 
  },
  {
    id: 3,
    title: "5 Effective Ways to Improve Gut Health Naturally",
    excerpt: "Your gut does so much more than just digest food — it affects your mood, energy, immunity, and even your skin...",
    date: "October 20, 2025",
    slug: "improve-gut-health-naturally",
    thumbnail: "/blog/three.png" // Using existing image as placeholder
  }
  // Add more blog posts here as they are created
];

export default function BlogPage() {
  return (
    <div className="min-h-screen font-inter-display bg-soft-beige">
      <Header />
      <main className="md:pt-40 md:pb-40 pt-32 pb-20 ">
        <div className="container mx-auto px-4 md:px-6  ">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-green mb-4">
              Wellness Blog
            </h1>
            <p className="text-muted-grey text-lg max-w-2xl mx-auto">
              Insights, tips, and personal stories about health, fitness, and holistic well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.id}
                className="group transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-card h-full flex flex-col blog-card">
                  <div className="relative h-60 w-full">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-sm text-muted-grey mb-2">{post.date}</div>
                    <h2 className="text-xl font-bold text-primary-green mb-3 group-hover:text-primary-green/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-dark-text/80 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="text-primary-green font-medium group-hover:underline">
                      Read more
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
