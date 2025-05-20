import React from 'react';

const AboutPage: React.FC = () => (
  <div style={{ maxWidth: 700, margin: '40px auto', padding: 24 }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, color: 'var(--earth-rose)' }}>About Self-Care Journey</h2>
    <img
      src="/IMG_0717.jpg"
      alt="Meditation und Achtsamkeit"
      style={{ width: '100%', borderRadius: 12, margin: '24px 0', maxHeight: 300, objectFit: 'cover' }}
      onError={(e) => { console.error("Bild konnte nicht geladen werden"); e.currentTarget.style.display = 'none'; }}
    />
    <p style={{ fontSize: 16, color: 'var(--text-color)', marginBottom: 16 }}>
      Self-Care Journey is dedicated to empowering individuals to prioritize their well-being and personal growth. Our book and course are designed to guide you through practical steps, reflective exercises, and proven strategies for building a sustainable self-care routine.
    </p>
    <p style={{ fontSize: 16, color: 'var(--text-color)', marginBottom: 16 }}>
      Founded by passionate advocates for mental health and holistic wellness, Self-Care Journey aims to make self-care accessible, actionable, and transformative for everyone. Whether you are just starting or looking to deepen your self-care practice, our resources are here to support you every step of the way.
    </p>
    <img
      src="/IMG_5214.jpg"
      alt="Community support"
      style={{ width: '100%', borderRadius: 12, margin: '24px 0', maxHeight: 300, objectFit: 'cover' }}
      onError={(e) => { console.error("Bild konnte nicht geladen werden"); e.currentTarget.style.display = 'none'; }}
              />
            </div>
  );

export default AboutPage;