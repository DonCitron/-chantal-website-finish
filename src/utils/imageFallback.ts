/**
 * Hilfsfunktion zum Laden von Bildern mit Fallback
 * 
 * @param originalSrc Die ursprüngliche Bildquelle
 * @param fallbackSrc Die Fallback-Bildquelle (optional)
 * @returns Ein Objekt mit src und onError-Funktionen
 */
export const getImageWithFallback = (originalSrc: string, fallbackSrc?: string) => {
  return {
    src: originalSrc,
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      console.error(`Bild konnte nicht geladen werden: ${originalSrc}`);
      
      // Wenn eine Fallback-Quelle vorhanden ist, versuche, diese zu laden
      if (fallbackSrc) {
        console.log(`Versuche Fallback-Bild: ${fallbackSrc}`);
        e.currentTarget.src = fallbackSrc;
      } else {
        // Andernfalls blende das Bild aus
        e.currentTarget.style.display = 'none';
      }
    }
  };
};

/**
 * Hilfsfunktion zum Laden von Bildern mit automatischen Pfadkorrekturen
 * 
 * @param imageName Der Bildname (ohne Pfad)
 * @returns Ein Objekt mit src und onError-Funktionen
 */
export const getImageWithPathFallback = (imageName: string) => {
  return {
    src: imageName,
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      console.error(`Bild konnte nicht geladen werden: ${imageName}`);
      e.currentTarget.style.display = 'none';
    }
  };
};
