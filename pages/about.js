import Header from "../components/Header"
export default function About(){
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-primary to-accent py-6">
        <Header />
      </div>
      <main className="container mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Біз туралы</h1>
        <p className="text-gray-700 mb-6">PhoneShop — сенің телефоныңның сенімді серігі. Біз 2020 жылдан бері оригинал смартфондар ұсынамыз, кепілдік береміз және Алматы бойынша жеткіземіз.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">Кепілдік</div>
          <div className="p-6 bg-white rounded-xl shadow">Тексерілген тауар</div>
          <div className="p-6 bg-white rounded-xl shadow">Тез жеткізу</div>
        </div>
      </main>
    </div>
  )
}
