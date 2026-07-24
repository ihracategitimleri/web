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

      {/* FILTER + TABLE SECTION */}
      <section className="px-8 py-16 bg-white border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center">🎓 Eğitimler</h2>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <select className="border rounded-lg px-4 py-2 bg-white shadow-sm">
            <option>Kurum Seç</option>
            <option>TOBB</option>
            <option>TİM</option>
            <option>DEİK</option>
          </select>

          <select className="border rounded-lg px-4 py-2 bg-white shadow-sm">
            <option>Konu Seç</option>
            <option>Dış Ticaret</option>
            <option>İhracat Finansmanı</option>
            <option>Pazar Araştırması</option>
          </select>

          <input
            type="date"
            className="border rounded-lg px-4 py-2 bg-white shadow-sm"
          />

          <input
            type="text"
            placeholder="Eğitmen adı"
            className="border rounded-lg px-4 py-2 bg-white shadow-sm"
          />
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-xl shadow-md">
            <thead className="bg-[#2563eb] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Kurum</th>
                <th className="py-3 px-4 text-left">Konu</th>
                <th className="py-3 px-4 text-left">Tarih</th>
                <th className="py-3 px-4 text-left">Eğitmen</th>
                <th className="py-3 px-4 text-left">Durum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">TOBB</td>
                <td className="py-3 px-4">Dış Ticaret Temelleri</td>
                <td className="py-3 px-4">12 Ağustos 2026</td>
                <td className="py-3 px-4">Ahmet Yılmaz</td>
                <td className="py-3 px-4 text-green-600 font-semibold">Açık</td>
              </tr>
              <tr className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">TİM</td>
                <td className="py-3 px-4">İhracat Finansmanı</td>
                <td className="py-3 px-4">15 Ağustos 2026</td>
                <td className="py-3 px-4">Selin Kaya</td>
                <td className="py-3 px-4 text-yellow-600 font-semibold">Yakında</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto py-6 px-8 bg-[#0f172a] text-gray-300 text-sm">
        © 2026 İhracat Eğitimleri — Türkiye’nin ihracat eğitim platformu.
      </footer>
    </div>
  )
}
