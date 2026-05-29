import { useEffect } from 'react'

export function JsonLd({ id, schema }: { id: string; schema: object }) {
  useEffect(() => {
    const existing = document.getElementById(`jsonld-${id}`)
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = `jsonld-${id}`
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => { script.remove() }
  }, [id])

  return null
}
