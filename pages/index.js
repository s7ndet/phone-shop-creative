import Header from "../components/Header"

export default function Home(){
  const featured = [
    {name: "iPhone 14 Pro", price: "450 000 ₸", img: "/images/iphone.svg"},
    {name: "Samsung S23 Ultra", price: "380 000 ₸", img: "/images/s23.svg"},
    {name: "Xiaomi 13 Pro", price: "290 000 ₸", img: "/images/xiaomi.svg"}
  ]
  return (
    <div className="min-h-screen hero-gradient text-white">
      <Header />
      <main className="container mx-auto px-8 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-4">PhoneShop — Сапалы смартфондар</h1>
            <p className="text-lg mb-6 text-white/90">Сенгенің қалады: оригинал, кепілдік, тез жеткізу. Қолдануға оңай фильтрлар, әдемі карточкалар, жылдам сатып алу.</p>
            <div className="flex gap-4">
              <a href="/catalog" className="px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-lg">Каталог</a>
              <a href="/contact" className="px-6 py-3 border border-white/30 rounded-xl">Байланыс</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {featured.map(p=>(
              <div key={p.name} className="card-glass p-5 rounded-2xl shadow-xl transform hover:-translate-y-2 transition">
                <div className="flex items-center gap-4">
                  <img src={p.img} className="w-24 h-24" />
                  <div>
                    <h3 className="text-2xl font-semibold">{p.name}</h3>
                    <p className="text-white/80">{p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
