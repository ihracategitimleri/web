import { supabase } from "./supabaseClient"

export async function getTrainings() {
  const { data, error } = await supabase
    .from("trainings")
    .select(`
      id,
      title,
      date,
      is_online,
      price,
      url,
      image_url,
      members_only,
      institutions(name),
      categories(name)
    `)
    .order("date", { ascending: true })

  if (error) {
    console.error("Supabase error:", error)
    return []
  }

  return data
}
