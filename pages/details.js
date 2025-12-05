import Header from "../components/Header"
export default function Details(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="bg-gradient-to-r from-primary to-accent py-6">
        <Header />
      </div>
      <main className="container mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Телефон сипаттамалары</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">iPhone 14 Pro</h2>
            <ul className="list-disc ml-6 text-white/80">
              <li>48MP Pro камера</li>
              <li>A16 Bionic</li>
              <li>6.1\" OLED Super Retina</li>
              <li>450 000 ₸</li>
            </ul>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Samsung S23 Ultra</h2>
            <ul className="list-disc ml-6 text-white/80">
              <li>200MP камера</li>
              <li>Snapdragon 8 Gen 2</li>
              <li>6.8\" Dynamic AMOLED</li>
              <li>380 000 ₸</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
