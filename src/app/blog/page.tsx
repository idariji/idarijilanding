import React from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'
import { fallbackBlogPosts } from '../../lib/blogData'
import { formatDate, extractExcerpt } from '../../lib/blogger'
import { getSanityClient, isSanityConfigured } from '../../lib/sanity'
import { ALL_POSTS_QUERY } from '../../lib/sanity.queries'

interface SanityPost {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  mainImage?: string
  authorName?: string
}

interface DisplayPost {
  id: string
  title: string
  excerpt: string
  published: string
  authorName: string
  imageUrl: string | null
  href: string
}

export default async function BlogPage() {
  const posts: DisplayPost[] = []

  if (isSanityConfigured()) {
    try {
      const sanityPosts = await getSanityClient().fetch<SanityPost[]>(ALL_POSTS_QUERY)
      if (sanityPosts?.length > 0) {
        sanityPosts.forEach((p) =>
          posts.push({
            id: p.slug,
            title: p.title,
            excerpt: p.excerpt || '',
            published: p.publishedAt,
            authorName: p.authorName || 'Idariji Concept Team',
            imageUrl: p.mainImage || null,
            href: `/blog/${p.slug}`,
          })
        )
      }
    } catch (e) {
      console.error('Sanity fetch error:', e)
    }
  }

  // Fall back to static posts if Sanity has no content or isn't configured
  if (posts.length === 0) {
    fallbackBlogPosts.forEach((p) =>
      posts.push({
        id: p.id,
        title: p.title,
        excerpt: extractExcerpt(p.content),
        published: p.published,
        authorName: p.author.displayName,
        imageUrl: p.images?.[0]?.url || null,
        href: `/blog/${p.id}`,
      })
    )
  }

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <a key={post.id} href={post.href} className="block group">
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="h-48 relative overflow-hidden flex-shrink-0">
                    {post.imageUrl ? (
                      <img
                        src={post.imageUrl}
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
                          {formatDate(post.published)}
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {post.authorName}
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
        </div>
      </div>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  )
}
