import React, { useEffect, useState } from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  coverImage: string | null
  publishedAt: string
  author: { name: string }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    if (!api) { setLoading(false); return }

    fetch(`${api}/api/v1/public/blog`)
      .then((r) => r.json())
      .then((data: BlogPost[]) => { setPosts(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />

      {/* Hero */}
      <div
        className="relative pt-32 pb-20 sm:pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001F3F 0%, #000D1F 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">Our Blog</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Insights, strategies, and stories to help you build a stronger brand and grow your business.
          </p>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Blog</span>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-2xl bg-gray-100 animate-pulse h-80" />
              ))}
            </div>
          )}

          {!loading && posts.length === 0 && (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✍️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">No posts yet</h2>
              <p className="text-gray-500 max-w-md mx-auto">We&apos;re working on some great content. Check back soon!</p>
            </div>
          )}

          {!loading && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <a key={post.id} href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="h-48 relative overflow-hidden flex-shrink-0">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="h-full bg-gradient-to-br from-[#001f3f] to-[#003366] flex items-center justify-center">
                          <span className="text-white/60 font-semibold text-lg">Idariji Concept</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {formatDate(post.publishedAt)}
                          </div>
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            {post.author.name}
                          </div>
                        </div>
                        <span className="text-orange-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  )
}
