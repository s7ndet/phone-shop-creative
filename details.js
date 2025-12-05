import React from 'react';
import Link from 'next/link';

const phoneDetails = [
  { name: "iPhone 15", brand: "Apple", price: "$999", description: "A17 чип, керемет камера" },
  { name: "Samsung Galaxy S23", brand: "Samsung", price: "$899", description: "AMOLED дисплей, ұзақ батарея" },
  { name: "Xiaomi 14", brand: "Xiaomi", price: "$699", description: "Қолжетімді бағамен жоғары сапалы камера" }
];

const DetailsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Phone Details</h1>
      {phoneDetails.map((phone, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
          <h2>{phone.name}</h2>
          <p><strong>Brand:</strong> {phone.brand}</p>
          <p><strong>Price:</strong> {phone.price}</p>
          <p>{phone.description}</p>
        </div>
      ))}
      <Link href="/catalog">
        <a style={{ color: 'blue', textDecoration: 'underline' }}>Back to Catalog</a>
      </Link>
    </div>
  );
};

export default DetailsPage;