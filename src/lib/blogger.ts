export interface BlogPost {
  id: string
  title: string
  content: string
  published: string
  updated: string
  url: string
  author: {
    displayName: string
    image?: {
      url: string
    }
  }
  images?: Array<{
    url: string
  }>
}

export interface BloggerResponse {
  items: BlogPost[]
  nextPageToken?: string
}

const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY

export async function fetchBlogPosts(blogId: string, maxResults: number = 10): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}&maxResults=${maxResults}&fields=items(id,title,content,published,updated,url,author,images)`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    
    const data: BloggerResponse = await response.json()
    return data.items || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export function extractExcerpt(content: string, maxLength: number = 150): string {
  const textContent = content.replace(/<[^>]*>/g, '')
  return textContent.length > maxLength 
    ? textContent.substring(0, maxLength) + '...'
    : textContent
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export async function fetchBlogPost(blogId: string, postId: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${API_KEY}&fields=id,title,content,published,updated,url,author,images`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog post')
    }
    
    const data: BlogPost = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}