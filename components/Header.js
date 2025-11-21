export default function Header(){return(
  <header className="w-full py-6 px-8 flex justify-between items-center">
    <a href="/" className="text-white text-2xl font-extrabold">PhoneShop</a>
    <nav className="space-x-4">
      <a href="/catalog" className="text-white/90 hover:text-white">Каталог</a>
      <a href="/details" className="text-white/90 hover:text-white">Сипаттама</a>
      <a href="/about" className="text-white/90 hover:text-white">Біз туралы</a>
      <a href="/contact" className="text-white/90 hover:text-white">Байланыс</a>
    </nav>
  </header>
)}