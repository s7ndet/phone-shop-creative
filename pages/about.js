import { useState } from "react";
import Header from "../components/Header";
import { FaShippingFast, FaCheckCircle, FaShieldAlt } from "react-icons/fa"; // Иконкалар

export default function About() {
  const [faqOpen, setFaqOpen] = useState(null);

  const faqList = [
    { question: "Кепілдік қанша?", answer: "Барлық смартфондарға 1 жыл кепілдік беріледі." },
    { question: "Жеткізу қанша уақыт алады?", answer: "Алматы ішінде 24 сағат, Қазақстан бойынша 3-5 күн." },
    { question: "Тауарды қалай тексеруге болады?", answer: "Біздің мамандар барлық смартфондарды тексеріп, сапасын растайды." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent py-6 shadow-lg">
        <Header />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-900">Біз туралы</h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
          PhoneShop — сенің телефоныңның сенімді серігі. Біз 2020 жылдан бері оригинал смартфондар ұсынамыз, кепілдік береміз және Алматы бойынша жеткіземіз.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 text-center">
            <FaShieldAlt className="mx-auto text-5xl text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2">Кепілдік</h3>
            <p className="text-gray-600">Барлық смартфондарға 1 жыл кепілдік.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 text-center">
            <FaCheckCircle className="mx-auto text-5xl text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2">Тексерілген тауар</h3>
            <p className="text-gray-600">Барлық смартфондар сапа бойынша тексеріледі.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 text-center">
            <FaShippingFast className="mx-auto text-5xl text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2">Тез жеткізу</h3>
            <p className="text-gray-600">Алматы ішінде 24 сағат жеткізу.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Жиі қойылатын сұрақтар</h2>
          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-primary font-bold">{faqOpen === index ? "-" : "+"}</span>
                </button>
                {faqOpen === index && (
                  <div className="p-4 border-t text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

