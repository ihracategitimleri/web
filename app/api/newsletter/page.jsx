"use client"
import { useState } from "react"

export default function NewsletterPage() {
  const [form, setForm] = useState({})

  const submit = async () => {
    await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(form)
    })
    alert("Kaydedildi")
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Bülten Kaydı</h1>

      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Ad" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Soyad" onChange={e => setForm({ ...form, surname: e.target.value })} />
      <input placeholder="Firma" onChange={e => setForm({ ...form, company: e.target.value })} />
      <input placeholder="Görev" onChange={e => setForm({ ...form, role: e.target.value })} />
      <input placeholder="Şehir" onChange={e => setForm({ ...form, city: e.target.value })} />

      <input placeholder="Gün (Monday)" onChange={e => setForm({ ...form, send_day: e.target.value })} />
      <input placeholder="Saat (09:00)" onChange={e => setForm({ ...form, send_time: e.target.value })} />

      <button onClick={submit}>Kaydol</button>
    </div>
  )
}
