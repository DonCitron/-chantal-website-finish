import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for authentication logic
    if (!username || !password) {
      setError('Bitte gib Benutzername und Passwort ein.');
      return;
    }
    setError('');
    if (isAdmin) {
      alert(`Als Admin angemeldet: ${username}`);
    } else {
      alert(`Als Benutzer angemeldet: ${username}`);
    }
  };

  const handlePremiumClick = () => {
    navigate('/premium');
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Anmeldung</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="username">Benutzername</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 4 }}
            autoComplete="username"
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="password">Passwort</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 4 }}
            autoComplete="current-password"
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="admin-checkbox">
            <input
              id="admin-checkbox"
              type="checkbox"
              checked={isAdmin}
              onChange={e => setIsAdmin(e.target.checked)}
              style={{ marginRight: 8 }}
            />
            Admin-Anmeldung
          </label>
        </div>
        {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
        <button type="submit" style={{ width: '100%', padding: 10, background: '#35424a', color: '#fff', border: 'none', borderRadius: 4 }}>
          Anmelden
        </button>
      </form>
      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <p>Möchtest du Premium-Inhalte freischalten?</p>
        <button onClick={handlePremiumClick} style={{ padding: 10, background: '#4A90E2', color: '#fff', border: 'none', borderRadius: 4 }}>
          Premium-Zugang kaufen
        </button>
      </div>
    </div>
  );
};

export default LoginPage; 