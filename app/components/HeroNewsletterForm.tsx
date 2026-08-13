"use client"

import { useState, type FormEvent } from "react"

export default function HeroNewsletterForm({ monoClassName }: { monoClassName: string }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("İstek başarısız")
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ornek@sirket.com"
          className="flex-1 bg-white border border-[#0E1A2B]/15 rounded-lg px-4 py-3 text-sm text-[#0E1A2B] focus:outline-none focus:border-[#0E2A47] placeholder:text-[#0E1A2B]/35"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#0E2A47] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#123354] transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "Gönderiliyor..." : "Mail listesine katıl"}
        </button>
      </form>
      <p
        className={`${monoClassName} mt-3 text-[11px] uppercase tracking-[0.1em] ${
          status === "success"
            ? "text-emerald-700"
            : status === "error"
              ? "text-red-700"
              : "text-transparent"
        }`}
      >
        {status === "success"
          ? "Kaydınız alındı, teşekkürler."
          : status === "error"
            ? "Bir şeyler ters gitti, tekrar dener misin?"
            : "."}
      </p>
    </div>
  )
}
