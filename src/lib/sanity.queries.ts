// GROQ queries for Sanity CMS

export const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "mainImage": mainImage.asset->url,
  "authorName": author.name
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "mainImage": mainImage.asset->url,
  "authorName": author.name,
  body
}`

export const ALL_SLUGS_QUERY = `*[_type == "post"] { "slug": slug.current }`
