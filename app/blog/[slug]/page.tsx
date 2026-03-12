import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPostBySlug } from '@/lib/mdx'
import { mdxComponents } from '@/components/mdx-components'

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Articol negăsit | CriptoCalculator',
    }
  }

  return {
    title: `${post.title} | Blog CriptoCalculator`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  // Format date for display
  const formattedDate = new Date(post.date).toLocaleDateString('ro-RO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-20 -left-20" />
        <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl top-1/2 -right-20" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/5 backdrop-blur-md sticky top-0 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-xl">
                🧮
              </div>
              <span className="text-xl font-bold text-white">CriptoCalculator</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
                Unelte
              </Link>
              <Link href="/blog" className="text-sm text-blue-400">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="w-full h-48 md:h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 text-3xl mb-4">
              📰
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-8 -mt-12 relative z-10">
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{post.readingTime} min citire</span>
            </div>
          </div>

          {/* MDX Content */}
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Calculează-ți Taxele Crypto Acum
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Folosește calculatorul nostru gratuit pentru a afla exact cât ai de plătit la ANAF în 2026.
            </p>
            <Link
              href="/anaf/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-xl font-semibold text-white hover:bg-blue-700 transition-all"
            >
              Deschide Calculatorul →
            </Link>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            ← Înapoi la toate articolele
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-12 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>© 2026 CriptoCalculator. Toate drepturile rezervate.</p>
          <p className="mt-2">Nu este sfat financiar. Criptomonedele sunt volatile.</p>
        </div>
      </footer>
    </main>
  )
}
