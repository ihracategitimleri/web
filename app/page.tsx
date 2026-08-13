import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google"
import { getTrainings } from "@/lib/getTrainings"

export const dynamic = 'force-dynamic'

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
})

const aylar = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"]

function formatTarih(tarih: string, saat: string | null) {
  const [y, m, d] = tarih.split("-").map(Number)
  const tarihStr = `${d} ${aylar[m - 1]} ${y}`
  return saat ? `${tarihStr} · ${saat.slice(0, 5)}` : tarihStr
}

function ucretMetni(ucret: string | null) {
  const deger = ucret?.trim()
  return !deger || deger === "0" ? "ÜCRETSİZ" : deger
}

export default async function Home() {
  const egitimler = await getTrainings()

  const kurumSayisi = new Set(egitimler.map((e) => e.kurum)).size
  const aktifEgitimSayisi = egitimler.length
  const now = new Date()
  const buAyPlanlanan = egitimler.filter((e) => {
    const [y, m] = e.tarih.split("-").map(Number)
    return y === now.getFullYear() && m === now.getMonth() + 1
  }).length

  return (
    <div className={`${body.className} min-h-screen flex flex-col bg-[#EEF1EC] text-[#0E1A2B]`}>
      <style>{`
        @keyframes seal-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .seal-ring {
          animation: seal-spin 40s linear infinite;
          transform-origin: 50% 50%;
        }
        @media (prefers-reduced-motion: reduce) {
          .seal-ring { animation: none; }
        }
      `}</style>

      {/* HEADER */}
      <header className="w-full px-6 md:px-10 py-4 flex items-center justify-between bg-[#0E2A47] text-white">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full border-2 border-dashed border-white/70 flex items-center justify-center text-[10px] font-semibold tracking-widest">
            İE
          </span>
          <span className={`${display.className} text-lg font-semibold tracking-tight`}>
            İhracat Eğitimleri
          </span>
        </div>
        <nav className={`${mono.className} hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em] text-white/70`}>
          <a href="#egitimler" className="hover:text-white transition-colors">Eğitimler</a>
          <a href="#kurumlar" className="hover:text-white transition-colors">Kurumlar</a>
          <a href="#bulten" className="hover:text-white transition-colors">Bülten</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-6 md:px-10 pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">

          {/* LEFT */}
          <div>
            <span className={`${mono.className} inline-block text-[11px] uppercase tracking-[0.2em] text-[#B5490C] border border-[#B5490C]/40 rounded-full px-3 py-1 mb-6`}>
              Tek çatı · Tüm kurumlar
            </span>
            <h1 className={`${display.className} text-4xl md:text-[3.25rem] leading-[1.08] font-semibold mb-6`}>
              Türkiye'nin ihracat
              <br />
              eğitim manifestosu
            </h1>
            <p className="text-base md:text-lg text-[#0E1A2B]/70 max-w-md mb-10">
              TOBB, TİM, DEİK, Ticaret Bakanlığı ve odaların eğitimlerini
              tek listede topluyor, kuruma göre değil ihtiyacına göre
              filtrelemene yardımcı oluyoruz.
            </p>

            {/* STAT LEDGER */}
            <div className={`${mono.className} flex flex-wrap gap-x-8 gap-y-3 text-sm border-t border-b border-[#0E1A2B]/10 py-4 max-w-lg`}>
              <div>
                <span className="text-xl font-medium">{kurumSayisi}</span>
                <span className="block text-[10px] uppercase tracking-widest text-[#0E1A2B]/50 mt-1">Kurum</span>
              </div>
              <div>
                <span className="text-xl font-medium">{aktifEgitimSayisi}</span>
                <span className="block text-[10px] uppercase tracking-widest text-[#0E1A2B]/50 mt-1">Aktif eğitim</span>
              </div>
              <div>
                <span className="text-xl font-medium">{buAyPlanlanan}</span>
                <span className="block text-[10px] uppercase tracking-widest text-[#0E1A2B]/50 mt-1">Bu ay planlanan eğitim</span>
              </div>
            </div>
          </div>

          {/* RIGHT — SEAL ILLUSTRATION */}
          <div className="flex justify-center md:justify-end">
            <svg viewBox="0 0 320 320" className="w-64 h-64 md:w-80 md:h-80">
              <g className="seal-ring">
                <circle cx="160" cy="160" r="150" fill="none" stroke="#0E2A47" strokeWidth="1.5" strokeDasharray="2 6" />
                <path id="ringPath" d="M 160,160 m -128,0 a 128,128 0 1,1 256,0 a 128,128 0 1,1 -256,0" fill="none" />
                <text className={mono.className} fontSize="11" letterSpacing="3" fill="#0E2A47">
                  <textPath href="#ringPath" startOffset="0%">
                    TÜRKİYE İHRACAT AĞI • TOBB • TİM • DEİK • TİCARET BAKANLIĞI •
                  </textPath>
                </text>
              </g>
              <circle cx="160" cy="160" r="96" fill="none" stroke="#0E2A47" strokeWidth="1.5" />
              {/* crate icon */}
              <g stroke="#B5490C" strokeWidth="3" fill="none" strokeLinejoin="round">
                <rect x="115" y="130" width="90" height="66" />
                <line x1="115" y1="152" x2="205" y2="152" />
                <line x1="160" y1="130" x2="160" y2="196" />
              </g>
              <text
                x="160"
                y="228"
                textAnchor="middle"
                className={mono.className}
                fontSize="10"
                letterSpacing="2"
                fill="#0E1A2B"
              >
                EST. 2026
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* MAIN: FILTERS + TABLE */}
      <section id="egitimler" className="px-6 md:px-10 py-16 bg-white border-y border-[#0E1A2B]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-[#0E1A2B]/45`}>
                Manifesto No. 2026-08
              </span>
              <h2 className={`${display.className} text-2xl md:text-3xl font-semibold mt-1`}>
                Eğitim listesi
              </h2>
            </div>
          </div>

          {/* FILTER TOOLBAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10 pb-6 border-b border-[#0E1A2B]/10">
            {[
              { label: "Kurum", type: "select", options: ["Tümü", "TOBB", "TİM", "DEİK", "Tic. Bakanlığı", "İTO"] },
              { label: "Konu", type: "select", options: ["Tümü", "Dış Ticaret", "Finansman", "Pazar Araştırması", "Gümrük"] },
              { label: "Tarih", type: "date" },
              { label: "Eğitmen", type: "text", placeholder: "İsim ara..." },
            ].map((f) => (
              <label key={f.label} className="block">
                <span className={`${mono.className} block text-[10px] uppercase tracking-[0.15em] text-[#0E1A2B]/45 mb-2`}>
                  {f.label}
                </span>
                {f.type === "select" ? (
                  <select className="w-full bg-transparent border-b border-[#0E1A2B]/25 pb-2 text-sm focus:outline-none focus:border-[#0E2A47]">
                    {f.options!.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border-b border-[#0E1A2B]/25 pb-2 text-sm focus:outline-none focus:border-[#0E2A47] placeholder:text-[#0E1A2B]/30"
                  />
                )}
              </label>
            ))}
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className={`${mono.className} text-[10px] uppercase tracking-[0.15em] text-[#0E1A2B]/45 border-b border-[#0E1A2B]/15`}>
                  <th className="py-3 pr-4 text-left font-medium">Kurum</th>
                  <th className="py-3 pr-4 text-left font-medium">Konu</th>
                  <th className="py-3 pr-4 text-left font-medium">Tarih</th>
                  <th className="py-3 pr-4 text-left font-medium">Eğitmen</th>
                  <th className="py-3 pr-4 text-left font-medium">Ücret</th>
                </tr>
              </thead>
              <tbody>
                {egitimler.map((e) => {
                  const ucretsiz = ucretMetni(e.ucret) === "ÜCRETSİZ"
                  return (
                    <tr key={e.id} className="border-b border-[#0E1A2B]/8 hover:bg-[#EEF1EC]/50 transition-colors">
                      <td className="py-4 pr-4">
                        <span className={`${mono.className} inline-block text-[11px] bg-[#0E2A47] text-white rounded px-2 py-1`}>
                          {e.kurum}
                        </span>
                      </td>
                      <td className="py-4 pr-4 text-sm">{e.egitim}</td>
                      <td className={`${mono.className} py-4 pr-4 text-sm text-[#0E1A2B]/70`}>{formatTarih(e.tarih, e.saat)}</td>
                      <td className="py-4 pr-4 text-sm">{e.egitmen}</td>
                      <td className="py-4 pr-4">
                        <span
                          className={`${mono.className} inline-block text-[10px] uppercase tracking-widest border-2 border-dashed rounded-full px-3 py-1 -rotate-3 ${
                            ucretsiz ? "border-emerald-600 text-emerald-700" : "border-[#B5490C] text-[#B5490C]"
                          }`}
                        >
                          {ucretMetni(e.ucret)}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="bulten" className="px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-10 items-center">
          <div>
            <span className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-[#0E1A2B]/45`}>
              Haftalık bülten
            </span>
            <h3 className={`${display.className} text-2xl md:text-3xl font-semibold mt-2 mb-3`}>
              Yeni eğitimler kayıt açılır açılmaz haber ver
            </h3>
            <p className="text-sm text-[#0E1A2B]/60 max-w-sm">
              Haftada bir e-posta, gereksiz gürültü yok — sadece yeni
              eğitimler ve ihracat gündemi.
            </p>
          </div>
          <form className="bg-white border border-[#0E1A2B]/10 rounded-2xl p-6 flex flex-col gap-3 max-w-md md:justify-self-end w-full">
            <label className={`${mono.className} text-[10px] uppercase tracking-[0.15em] text-[#0E1A2B]/45`}>
              E-posta adresi
            </label>
            <input
              type="email"
              placeholder="ornek@sirket.com"
              className="border border-[#0E1A2B]/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0E2A47]"
            />
            <button
              type="submit"
              className="bg-[#0E2A47] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-[#123354] transition-colors"
            >
              Bültene abone ol
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${mono.className} mt-auto py-6 px-6 md:px-10 bg-[#0E2A47] text-white/50 text-[11px] tracking-wide`}>
        © 2026 İhracat Eğitimleri — Türkiye'nin ihracat eğitim ağı.
      </footer>
    </div>
  )
}
