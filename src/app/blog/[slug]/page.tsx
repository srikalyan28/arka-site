import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import { blogs } from "@/data/blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find(b => b.slug === slug);
  
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | ARKA ABROAD Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find(b => b.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts (just first two for demo)
  const relatedPosts = blogs.filter(b => b.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--primary)] transition-colors mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to all articles
        </Link>
        
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-blue-50 text-[var(--primary)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-500 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="w-full max-w-5xl mx-auto h-[400px] md:h-[500px] bg-gray-200 mb-16">
        {/* Placeholder for blog hero image */}
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Blog Content */}
        <div 
          className="prose prose-lg md:prose-xl max-w-none prose-headings:text-[var(--primary)] prose-a:text-[var(--accent)] mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share & CTA */}
        <div className="border-t border-b border-gray-100 py-8 my-12 text-center bg-[var(--background)] rounded-2xl">
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Ready to start your journey?</h3>
          <p className="text-gray-600 mb-6">Our experts are here to help you navigate the process.</p>
          <Link href="/book-consultation" className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-md font-semibold hover:bg-[var(--secondary)] transition-colors">
            Book a Free Consultation
          </Link>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-8">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block">
                  <div className="h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden relative">
                     <div className="absolute inset-0 bg-[var(--primary)]/5 group-hover:bg-transparent transition-colors z-10" />
                  </div>
                  <h4 className="font-bold text-lg text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors line-clamp-2 mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
