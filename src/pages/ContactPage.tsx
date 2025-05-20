import React from 'react';

const ContactPage: React.FC = () => (
  <div style={{ maxWidth: 700, margin: '40px auto', padding: 24 }}>
    <img
      src="https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&w=700"
      alt="Friendly support"
      style={{ width: '100%', borderRadius: 12, marginBottom: 24, maxHeight: 300, objectFit: 'cover' }}
    />
    <h2>Kontakt</h2>
    <p>
      Du hast Fragen zum Shift Room, zum Buch oder Kurs? Brauchst Unterstützung oder möchtest kooperieren? Fülle das Formular aus und wir melden uns schnellstmöglich bei dir.
    </p>
    <form style={{ marginTop: 24 }}>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="name">Name</label><br />
        <input id="name" name="name" type="text" style={{ width: '100%', padding: 8 }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="email">E-Mail</label><br />
        <input id="email" name="email" type="email" style={{ width: '100%', padding: 8 }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="message">Nachricht</label><br />
        <textarea id="message" name="message" rows={5} style={{ width: '100%', padding: 8 }} />
      </div>
      <button type="submit" style={{ padding: 10, background: '#4A90E2', color: '#fff', border: 'none', borderRadius: 4 }}>
        Nachricht senden
      </button>
    </form>
    <img
      src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=700"
      alt="Connection placeholder"
      style={{ width: '100%', borderRadius: 12, margin: '24px 0', maxHeight: 300, objectFit: 'cover' }}
    />
  </div>
);

export default ContactPage;