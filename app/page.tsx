import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">

      {/* HEADER */}
      <header className="w-full py-4 px-8 flex items-center justify-between border-b border-gray-200 bg-white">
        <div className="text-2xl font-bold tracking-tight">
          İhracat Eğitimleri
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 gap-12">
        
        {/* LEFT TEXT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Türkiye’nin En Güncel<br />İhracat Eğitim Platformu
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            TOBB, TİM, DEİK, Bakanlık ve tüm odaların eğitimlerini tek bir yerde topluyoruz.
          </p>

          {/* NEWSLETTER */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-md">
            <h3 className="text-xl font-semibold mb-3">Bültene Abone Ol</h3>
            <p className="text-sm text-gray-500 mb-4">
              Yeni eğitimleri ve ihracat gündemini haftalık olarak al.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="E-posta adresin"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <button
                type="submit"
                className="bg-[#2563eb] text-white py-2 rounded-lg font-medium hover:bg-[#1d4ed8]"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/container.png"
            alt="Konteyner"
            width={500}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* TRAININGS LIST */}
      <section className="px-8 py-12 bg-white border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-6">Güncel Eğitimler</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Placeholder eğitim kartları */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">TOBB – Dış Ticaret Eğitimi</h3>
            <p className="text-sm text-gray-600 mb-3">Online • Ücretsiz</p>
            <button className="text-[#2563eb] font-medium">Detaylar →</button>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">TİM – İhracatçı Eğitim Serisi</h3>
            <p className="text-sm text-gray-600 mb-3">İstanbul • Ücretli</p>
            <button className="text-[#2563eb] font-medium">Detaylar →</button>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">DEİK – Afrika Pazarına Giriş</h3>
            <p className="text-sm text-gray-600 mb-3">Online • Ücretsiz</p>
            <button className="text-[#2563eb] font-medium">Detaylar →</button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto py-6 px-8 bg-[#0f172a] text-gray-300 text-sm">
        © 2026 İhracat Eğitimleri — Türkiye’nin ihracat eğitim platformu.
      </footer>
    </div>
  )
}
