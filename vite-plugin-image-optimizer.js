// Image-Optimierungsplugin für Vite
import fs from 'fs';
import path from 'path';

/**
 * Ein einfaches Plugin zur Bildoptimierung für Vite
 */
function viteImageOptimizer() {
  return {
    name: 'vite-plugin-image-optimizer',
    enforce: 'pre',
    
    configResolved(config) {
      console.log('Öffentliches Verzeichnis: ', config.publicDir);
      
      // Überprüfen Sie, ob das öffentliche Verzeichnis existiert
      if (!fs.existsSync(config.publicDir)) {
        console.warn(`Warnung: Das öffentliche Verzeichnis ${config.publicDir} existiert nicht.`);
        return;
      }
      
      // Logge alle Bilderdateien im öffentlichen Verzeichnis
      console.log('Bilder im öffentlichen Verzeichnis:');
      fs.readdirSync(config.publicDir).forEach(file => {
        const filePath = path.join(config.publicDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp|svg|heic)$/i.test(file)) {
          console.log(`- ${file} (${(stat.size / 1024).toFixed(2)} KB)`);
        }
      });
    }
  };
}

export default viteImageOptimizer;
