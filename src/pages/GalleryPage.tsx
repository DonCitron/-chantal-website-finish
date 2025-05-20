import React from 'react';

const GalleryPage: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '40px auto', padding: 24, display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
    {/* Bilder mit automatischem Fallback-Mechanismus */}
    <img
      src="/portrait-collage.jpg"
      alt="Porträt Collage"
      style={{ width: '340px', borderRadius: 18, maxHeight: 420, objectFit: 'cover', boxShadow: '0 4px 24px rgba(156,116,98,0.13)' }}
    />
    <img
      src="/DA94D674-CA3B-42BF-A9F9-9797B1AA5426.jpg"
      alt="Kunstwerk 2"
      style={{ width: '260px', borderRadius: 16, maxHeight: 340, objectFit: 'cover', boxShadow: '0 2px 12px rgba(156,116,98,0.10)' }}
    />
    <img
      src="/IMG_5214.jpg"
      alt="Kunstwerk 3"
      style={{ width: '220px', borderRadius: 14, maxHeight: 320, objectFit: 'cover', boxShadow: '0 2px 12px rgba(156,116,98,0.10)' }}
    />
    <img
      src="/IMG_0717.jpg"
      alt="Kunstwerk 4"
      style={{ width: '320px', borderRadius: 16, maxHeight: 350, objectFit: 'cover', boxShadow: '0 2px 12px rgba(156,116,98,0.10)' }}
    />
    <img
      src="/IMG_6396.jpg"
      alt="Kunstwerk 5"
      style={{ width: '260px', borderRadius: 14, maxHeight: 320, objectFit: 'cover', boxShadow: '0 2px 12px rgba(156,116,98,0.10)' }}
    />
    <img
      src="/headerpicture.jpg"
      alt="Header Kunstwerk"
      style={{ width: '380px', borderRadius: 18, maxHeight: 420, objectFit: 'cover', boxShadow: '0 4px 24px rgba(156,116,98,0.13)' }}
    />
    <img
      src="/o_1iqqn5jphig91jntdk4b131h8cr.webp"
      alt="SELFLOVE – Journal Cover"
      style={{ width: '260px', borderRadius: 14, maxHeight: 320, objectFit: 'cover', boxShadow: '0 2px 12px rgba(156,116,98,0.10)' }}
                />
              </div>
);

export default GalleryPage;