export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_80%_-10%,rgba(2,132,199,0.25),transparent_35%)]" />
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 relative">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Portofolio Aplikasi Kami
          </h2>
          <p className="mt-4 text-blue-200/90 text-lg">
            Kumpulan karya aplikasi yang telah kami bangun. Setiap proyek dilengkapi deskripsi, teknologi yang digunakan, dan tautan unduhan.
          </p>
        </div>
      </div>
    </section>
  )
}
