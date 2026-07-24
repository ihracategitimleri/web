import { supabase } from "@/lib/supabaseClient"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const body = await req.json()

  const { email, name, surname, company, role, city, interests, send_day, send_time } = body

  await supabase.from("newsletter_subscribers").insert({
    email,
    name,
    surname,
    company,
    role,
    city,
    interests,
    send_day,
    send_time
  })

  await resend.emails.send({
    from: "newsletter@ihracat.com",
    to: email,
    subject: "Bültene Hoş Geldiniz",
    html: `<p>Merhaba ${name}, bültene başarıyla kaydoldun.</p>`
  })

  return Response.json({ ok: true })
}
