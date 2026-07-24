<section className="px-8 py-16 bg-gray-50 border-t border-gray-200">
  <h2 className="text-3xl font-bold mb-8 text-center">🎓 Eğitimler</h2>

  {/* Filtre alanı */}
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

  {/* Eğitim tablosu */}
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
