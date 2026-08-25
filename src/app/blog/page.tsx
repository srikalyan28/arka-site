import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blog | ARKA ABROAD",
  description: "Insights, guides, and news about studying abroad.",
};

export default function BlogPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">Latest Insights</h1>
          <p className="text-lg text-[var(--muted)]">
            Expert advice, country guides, and student tips to help you on your international education journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="relative h-56 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--primary)]/5 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-[var(--primary)] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center text-[var(--accent)] font-semibold text-sm">
                  Read Article
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
