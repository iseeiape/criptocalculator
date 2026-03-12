import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-20 -left-20" />
        <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl top-1/3 -right-20" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/5 backdrop-blur-md border-b border-white/10">
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

      {/* Hero */}
      <section className="relative z-10 px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-500/20 text-4xl mb-6">
            📚
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog CriptoCalculator
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ghiduri complete despre crypto, taxe ANAF, trading și investiții în România
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-white mb-2">Nu există articole încă</h2>
              <p className="text-gray-400">Revino mai târziu pentru conținut nou.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const formattedDate = new Date(post.date).toLocaleDateString('ro-RO', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all"
                  >
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{formattedDate}</span>
                        <span>{post.readingTime} min</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Calculează-ți Taxele Crypto Acum
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Folosește calculatorul nostru gratuit pentru a afla exact cât ai de plătit la ANAF în 2026. Calcul automat FIFO, suport pentru multiple criptomonede.
            </p>
            <Link
              href="/anaf/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-xl font-semibold text-white hover:bg-blue-700 transition-all"
            >
              Deschide Calculatorul →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>© 2026 CriptoCalculator. Toate drepturile rezervate.</p>
          <p className="mt-2">Nu este sfat financiar. Criptomonedele sunt volatile.</p>
        </div>
      </footer>
    </main>
  )
}
