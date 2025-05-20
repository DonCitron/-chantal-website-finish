import React from 'react';

const products = [
  { id: 1, name: 'Kunstdruck', description: 'Hochwertiger Druck eines Originalkunstwerks.', price: 29.99 },
  { id: 2, name: 'Leinwand', description: 'Premium-Leinwand mit brillanten Farben.', price: 59.99 },
  { id: 3, name: 'Digitaler Download', description: 'Sofortiger Download des digitalen Kunstwerks.', price: 9.99 },
];

const ProductPage: React.FC = () => {
  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 24 }}>
      <h2>Produkte</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0 }}>{product.name}</h3>
              <p style={{ margin: '8px 0' }}>{product.description}</p>
              <strong>{product.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</strong>
            </div>
            <button disabled style={{ padding: 10, background: '#aaa', color: '#fff', border: 'none', borderRadius: 4, fontSize: 16, cursor: 'not-allowed' }}>
              Kaufen (Zahlungsintegration folgt bald)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage; 