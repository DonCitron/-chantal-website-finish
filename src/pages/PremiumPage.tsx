import React from 'react';

const PremiumPage: React.FC = () => {
  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Premium-Zugang</h2>
      <p>Schalte exklusive Inhalte und Funktionen frei, die nur Premium-Mitgliedern zur Verfügung stehen!</p>
      <button disabled style={{ marginTop: 24, padding: 12, background: '#aaa', color: '#fff', border: 'none', borderRadius: 4, fontSize: 18, cursor: 'not-allowed' }}>
        Jetzt kaufen (Zahlungsintegration folgt bald)
      </button>
    </div>
  );
};

export default PremiumPage; 