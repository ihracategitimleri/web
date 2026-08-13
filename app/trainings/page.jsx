import { supabase } from "@/lib/supabaseClient"

export const dynamic = 'force-dynamic'

export default async function TrainingsPage() {
  const { data: trainings } = await supabase
    .from("trainings")
    .select("id, kurum, egitim, tarih, saat, egitmen, ucret, link")
    .order("tarih", { ascending: true })

  return (
    <div style={{ padding: 40 }}>
      <h1>Eğitimler</h1>

      {trainings?.map(t => (
        <div key={t.id} style={{ marginBottom: 20 }}>
          <h3>{t.egitim}</h3>
          <p>Kurum: {t.kurum}</p>
          <p>Tarih: {t.tarih}{t.saat ? ` ${t.saat}` : ""}</p>
          <p>Eğitmen: {t.egitmen}</p>
          <p>Ücret: {t.ucret && t.ucret.trim() !== "0" ? t.ucret : "Ücretsiz"}</p>
          <a href={t.link} target="_blank">Detay</a>
        </div>
      ))}
    </div>
  )
}
