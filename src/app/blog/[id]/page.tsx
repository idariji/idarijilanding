import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Newsletter from '../../../components/Newsletter'
import CTA from '../../../components/CTA'
import WhatsAppButton from '../../../components/WhatsAppButton'

interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  coverImage: string | null
  publishedAt: string
  author: { name: string }
  tags?: string[]
  category?: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function unwrap<T>(data: unknown): T | null {
  if (!data) return null
  if (typeof data === 'object' && data !== null && 'data' in data) {
    return (data as { data: T }).data ?? null
  }
  return data as T
}

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [related, setRelated] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    if (!api || !id) { setLoading(false); return }

    Promise.all([
      fetch(`${api}/api/v1/public/blog/${id}`).then(r => r.ok ? r.json() : null).catch(() => null),
      fetch(`${api}/api/v1/public/blog`).then(r => r.ok ? r.json() : []).catch(() => []),
    ]).then(([postData, listData]) => {
      const p = unwrap<Post>(postData) ?? (postData as Post | null)
      setPost(p)
      const list: Post[] = Array.isArray(listData) ? listData : (unwrap<Post[]>(listData) ?? [])
      setRelated(list.filter((x: Post) => x.slug !== id).slice(0, 3))
      setLoading(false)
    })
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#FF6B00] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <WhatsAppButton />
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📝</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Post not found</h1>
          <p className="text-gray-500 mb-8 max-w-md">This article may have been moved or removed.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
            <ArrowLeft size={18} /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#ff8c00] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </div>

          {post.category && (
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 bg-white/10 text-white/70 border border-white/15">
              {post.category}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              {post.author.name}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.coverImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#001f3f] prose-headings:font-bold prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-700 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content || post.excerpt || '' }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-gray-100">
              <Tag size={14} className="text-gray-400" />
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to All Posts
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="block group">
                  <article className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      {r.coverImage ? (
                        <img
                          src={r.coverImage}
                          alt={r.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#001f3f] to-[#003366] flex items-center justify-center">
                          <span className="text-white/60 text-sm font-medium">Idariji Concept</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2 line-clamp-2">
                        {r.title}
                      </h3>
                      {r.excerpt && (
                        <p className="text-sm text-gray-500 line-clamp-2">{r.excerpt}</p>
                      )}
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
