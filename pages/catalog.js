import Header from "../components/Header"
const phones = [
  {id:1,name:"iPhone 14 Pro", price:"450 000 ₸", img:"/images/iphone.svg", desc:"48MP • A16 • 6.1\""},
  {id:2,name:"Samsung S23 Ultra", price:"380 000 ₸", img:"/images/s23.svg", desc:"200MP • Snapdragon 8 Gen 2"},
  {id:3,name:"Xiaomi 13 Pro", price:"290 000 ₸", img:"/images/xiaomi.svg", desc:"Leica • Snapdragon 8 Gen 2"},
  {id:4,name:"iPhone 12", price:"250 000 ₸", img:"/images/iphone.svg", desc:"12MP • A14"},
  {id:5,name:"Samsung A54", price:"150 000 ₸", img:"/images/s23.svg", desc:"Good value"},
]
export default function Catalog(){
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-primary to-accent py-6">
        <Header />
      </div>
      <main className="container mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Каталог — Барлық модельдер</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {phones.map(p=>(
            <div key={p.id} className="bg-white rounded-2xl p-6 shadow-xl hover:scale-105 transition cursor-pointer">
              <img src={p.img} className="w-full h-40 object-contain mb-4" />
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="text-gray-600">{p.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold">{p.price}</span>
                <a href="/details" className="px-4 py-2 bg-primary text-white rounded-lg">Көру</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
