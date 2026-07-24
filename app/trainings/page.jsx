import { supabase } from "@/lib/supabaseClient"

export default async function TrainingsPage() {
  const { data: trainings } = await supabase
    .from("trainings")
    .select("id, title, date, is_online, price, url")

  return (
    <div style={{ padding: 40 }}>
      <h1>Eğitimler</h1>

      {trainings?.map(t => (
        <div key={t.id} style={{ marginBottom: 20 }}>
          <h3>{t.title}</h3>
          <p>Tarih: {t.date}</p>
          <p>Online: {t.is_online ? "Evet" : "Hayır"}</p>
          <p>Fiyat: {t.price || "Ücretsiz"}</p>
          <a href={t.url} target="_blank">Detay</a>
        </div>
      ))}
    </div>
  )
}
