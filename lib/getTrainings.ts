import { supabase } from "./supabaseClient"

export async function getTrainings() {
  const { data, error } = await supabase
    .from("trainings")
    .select("id, kurum, egitim, tarih, oturum, saat, yer, egitmen, ucret, link")
    .order("tarih", { ascending: true })

  if (error) {
    console.error("Supabase error:", error)
    return []
  }

  return data
}
