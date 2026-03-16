import React from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Newsletter from '../../../components/Newsletter'
import CTA from '../../../components/CTA'
import WhatsAppButton from '../../../components/WhatsAppButton'
import { fallbackBlogPosts } from '../../../lib/blogData'
import { formatDate, extractExcerpt } from '../../../lib/blogger'
import { getSanityClient, isSanityConfigured } from '../../../lib/sanity'
import { POST_BY_SLUG_QUERY, ALL_SLUGS_QUERY } from '../../../lib/sanity.queries'

interface SanityPost {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  mainImage?: string
  authorName?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[]
}

export async function generateStaticParams() {
  const params: { id: string }[] = fallbackBlogPosts.map((p) => ({ id: p.id }))

  if (isSanityConfigured()) {
    try {
      const slugs = await getSanityClient().fetch<{ slug: string }[]>(ALL_SLUGS_QUERY)
      slugs.forEach(({ slug }) => {
        if (!params.find((p) => p.id === slug)) {
          params.push({ id: slug })
        }
      })
    } catch (e) {
      console.error('Sanity slugs fetch error:', e)
    }
  }

  return params
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params

  // Check if this is a numeric fallback ID
  const isNumericId = /^\d+$/.test(id)
  const fallbackPost = fallbackBlogPosts.find((p) => p.id === id) || null

  // Fetch from Sanity if it's not a pure numeric fallback ID
  let sanityPost: SanityPost | null = null
  if (isSanityConfigured() && !isNumericId) {
    try {
      sanityPost = await getSanityClient().fetch<SanityPost>(POST_BY_SLUG_QUERY, { slug: id })
    } catch (e) {
      console.error('Sanity post fetch error:', e)
    }
  }

  // Determine which post to show
  const isSanityContent = Boolean(sanityPost)
  const post = sanityPost
    ? {
        title: sanityPost.title,
        published: sanityPost.publishedAt,
        authorName: sanityPost.authorName || 'Idariji Concept Team',
        imageUrl: sanityPost.mainImage || null,
        content: null,
        body: sanityPost.body || null,
        excerpt: sanityPost.excerpt || '',
      }
    : fallbackPost
    ? {
        title: fallbackPost.title,
        published: fallbackPost.published,
        authorName: fallbackPost.author.displayName,
        imageUrl: fallbackPost.images?.[0]?.url || null,
        content: fallbackPost.content,
        body: null,
        excerpt: extractExcerpt(fallbackPost.content),
      }
    : {
        title: fallbackBlogPosts[0].title,
        published: fallbackBlogPosts[0].published,
        authorName: fallbackBlogPosts[0].author.displayName,
        imageUrl: fallbackBlogPosts[0].images?.[0]?.url || null,
        content: fallbackBlogPosts[0].content,
        body: null,
        excerpt: extractExcerpt(fallbackBlogPosts[0].content),
      }

  // Related posts: 3 from fallback, or could be extended to Sanity posts
  const relatedPosts = fallbackBlogPosts.filter((p) => p.id !== id).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#ff8c00] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(post.published)}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              {post.authorName}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.imageUrl && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSanityContent && post.body ? (
            <div className="prose prose-lg max-w-none prose-headings:text-[#001f3f] prose-headings:font-bold prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-700">
              <PortableText value={post.body} />
            </div>
          ) : (
            <div
              className="prose prose-lg max-w-none prose-headings:text-[#001f3f] prose-headings:font-bold prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
            />
          )}

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to All Posts
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.id}`} className="block group">
                  <article className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-[#001f3f] to-[#003366] flex items-center justify-center overflow-hidden">
                      {related.images?.[0]?.url ? (
                        <img
                          src={related.images[0].url}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-white/60 text-sm font-medium">Idariji Concept</span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{extractExcerpt(related.content, 100)}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  )
}
