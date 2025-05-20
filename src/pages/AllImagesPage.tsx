import React from 'react';

const AllImagesPage: React.FC = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '40px auto', padding: 24 }}>
      <h1>Alle Bilder aus dem Public-Ordner</h1>
      <p>Diese Seite zeigt alle Bilder aus dem public-Ordner an.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, marginTop: 30 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="/DA94D674-CA3B-42BF-A9F9-9797B1AA5426.jpg" 
            alt="DA94D674-CA3B-42BF-A9F9-9797B1AA5426.jpg" 
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}
            onError={(e) => { console.error("Bild konnte nicht geladen werden"); e.currentTarget.style.border = '2px solid red'; }}
          />
          <span>DA94D674-CA3B-42BF-A9F9-9797B1AA5426.jpg</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="/IMG_0717.jpg" 
            alt="IMG_0717.jpg" 
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}
            onError={(e) => { console.error("Bild konnte nicht geladen werden"); e.currentTarget.style.border = '2px solid red'; }}
          />
          <span>IMG_0717.jpg</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="/IMG_5214.jpg" 
            alt="IMG_5214.jpg" 
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}
            onError={(e) => { console.error("Bild konnte nicht geladen werden"); e.currentTarget.style.border = '2px solid red'; }}
          />
          <span>IMG_5214.jpg</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="/IMG_6396.jpg" 
            alt="IMG_6396.jpg" 
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}
            onError={(e) => { console.error("Bild konnte nicht geladen werden"); e.currentTarget.style.border = '2px solid red'; }}
          />
          <span>IMG_6396.jpg</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="/headerpicture.jpg" 
            alt="headerpicture.jpg" 
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}
            onError={(e) => { console.error("Bild konnte nicht geladen werden"); e.currentTarget.style.border = '2px solid red'; }}
          />
          <span>headerpicture.jpg</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="/o_1iqqn5jphig91jntdk4b131h8cr.webp" 
            alt="o_1iqqn5jphig91jntdk4b131h8cr.webp" 
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}
            onError={(e) => { console.error("Bild konnte nicht geladen werden"); e.currentTarget.style.border = '2px solid red'; }}
          />
          <span>o_1iqqn5jphig91jntdk4b131h8cr.webp</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="/portrait-collage.jpg" 
            alt="portrait-collage.jpg" 
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}
            onError={(e) => { console.error("Bild konnte nicht geladen werden"); e.currentTarget.style.border = '2px solid red'; }}
          />
          <span>portrait-collage.jpg</span>
        </div>

        {/* HEIC-Versionen, die jedoch nicht direkt vom Browser angezeigt werden können */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', height: 300, background: '#f0f0f0', borderRadius: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>HEIC-Format wird nicht unterstützt</span>
          </div>
          <span>IMG_0717.HEIC (nicht direkt anzeigbar)</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', height: 300, background: '#f0f0f0', borderRadius: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>HEIC-Format wird nicht unterstützt</span>
          </div>
          <span>IMG_5214.HEIC (nicht direkt anzeigbar)</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', height: 300, background: '#f0f0f0', borderRadius: 10, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>HEIC-Format wird nicht unterstützt</span>
          </div>
          <span>IMG_6396.HEIC (nicht direkt anzeigbar)</span>
        </div>
      </div>
    </div>
  );
};

export default AllImagesPage;
