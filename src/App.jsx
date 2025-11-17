import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/projects`)
        if (!res.ok) throw new Error('Gagal memuat data')
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filtered = projects.filter(p => filter === 'all' || (p.tags || []).includes(filter))
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags || [])))

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />

      <main className="relative">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button onClick={() => setFilter('all')} className={`px-3 py-1.5 rounded-full text-sm border ${filter==='all'?'bg-blue-600 text-white border-blue-500':'text-blue-200/90 border-blue-400/30 hover:border-blue-400/60'}`}>Semua</button>
            {allTags.map(tag => (
              <button key={tag} onClick={() => setFilter(tag)} className={`px-3 py-1.5 rounded-full text-sm border ${filter===tag?'bg-blue-600 text-white border-blue-500':'text-blue-200/90 border-blue-400/30 hover:border-blue-400/60'}`}>{tag}</button>
            ))}
          </div>

          {loading && (
            <p className="text-blue-200">Memuat proyek...</p>
          )}
          {error && (
            <p className="text-red-400">{error}</p>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}

          {/* Contact / CTA */}
          <section id="contact" className="mt-16 border-t border-slate-800 pt-8">
            <h3 className="text-xl font-semibold text-white mb-2">Butuh aplikasi custom?</h3>
            <p className="text-blue-200/90 mb-4">Hubungi kami untuk kolaborasi atau pembuatan aplikasi sesuai kebutuhan bisnis Anda.</p>
            <a href="mailto:you@example.com" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-md">Kirim Email</a>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
