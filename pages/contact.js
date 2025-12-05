import Header from "../components/Header"
export default function Contact(){
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-primary to-accent py-6">
        <Header />
      </div>
      <main className="container mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Байланыс</h1>
        <p className="text-gray-700">Телефон: +7 777 777 77 77</p>
        <p className="text-gray-700">Email: phoneshop@gmail.com</p>
        <form className="mt-6 max-w-md">
          <input className="w-full p-3 border rounded mb-4" placeholder="Атыңыз" />
          <input className="w-full p-3 border rounded mb-4" placeholder="Email" />
          <textarea className="w-full p-3 border rounded mb-4" placeholder="Хабарлама"></textarea>
          <button className="px-5 py-3 bg-primary text-white rounded">Жіберу</button>
        </form>
      </main>
    </div>
  )
}
