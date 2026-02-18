import Link from 'next/link'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

function parseFrontMatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return null
  
  const frontMatter = match[1]
  const body = match[2]
  
  const meta: any = {}
  frontMatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length) {
      let value = valueParts.join(':').trim()
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/"/g, ''))
      }
      meta[key.trim()] = value
    }
  })
  
  return { meta, body }
}

export default function BlogPage() {
  // In static export, we can't read files at runtime
  // So we'll hardcode the posts for now
  const posts: BlogPost[] = [
    {
      slug: 'cum-declar-crypto-anaf-2026',
      title: 'Cum Declar Crypto la ANAF 2026 - Ghid Complet Pas cu Pas',
      description: 'Ghid complet pentru declararea criptomonedelor la ANAF în 2026. Află cât plătești impozit, cum funcționează metoda FIFO și cum completezi Declarația Unică.',
      date: '2026-02-18',
      tags: ['ANAF', 'taxe crypto', 'declarație unică', 'impozit bitcoin', 'FIFO']
    }
  ]

  return (
    <main className="min-h-screen bg-crypto-dark px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-crypto-accent hover:underline">
            ← Înapoi la site
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-white">Blog CriptoCalculator</h1>
          <p className="mt-2 text-gray-400">
            Articole educative despre taxe crypto, trading și reglementări în România
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl bg-crypto-card p-6 border border-gray-800 transition hover:border-crypto-accent"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-crypto-accent/20 text-crypto-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-bold text-white hover:text-crypto-accent transition">
                  {post.title}
                </h2>
              </Link>
              
              <p className="mt-2 text-gray-400">{post.description}</p>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-crypto-accent hover:underline font-medium"
                >
                  Citește mai mult →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 rounded-xl bg-crypto-card/50 p-6 border border-gray-800 text-center">
          <p className="text-gray-400">
            Mai multe articole în curând...  
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Urmărește-ne pentru ghiduri noi despre taxe crypto, trading și reglementări
          </p>
        </div>
      </div>
    </main>
  )
}