import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
  ogImage?: string
}

const DEFAULT_OG_IMAGE = 'https://idarijiconcept.ng/og-image.svg'

function setMeta(selector: string, attr: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    const [key, val] = attr.split('=')
    el.setAttribute(key, val)
    document.head.appendChild(el)
  }
  el.content = content
}

export function usePageMeta({ title, description, ogImage = DEFAULT_OG_IMAGE }: PageMeta) {
  useEffect(() => {
    const url = window.location.href
    document.title = title

    setMeta('meta[name="description"]', 'name=description', description)

    setMeta('meta[property="og:title"]', 'property=og:title', title)
    setMeta('meta[property="og:description"]', 'property=og:description', description)
    setMeta('meta[property="og:url"]', 'property=og:url', url)
    setMeta('meta[property="og:image"]', 'property=og:image', ogImage)

    setMeta('meta[name="twitter:title"]', 'name=twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name=twitter:image', ogImage)
  }, [title, description, ogImage])
}
