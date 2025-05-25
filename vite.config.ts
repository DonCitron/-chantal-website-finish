import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './', // Relative Pfade für Webbereitstellung
  server: {
    port: 5176, // Unique port for this project
    allowedHosts: [
      'localhost',
      '37e1-2003-f5-cf15-3000-e8a0-6e42-2ace-38e7.ngrok-free.app',
      'aef5-2003-f5-cf15-3000-e8a0-6e42-2ace-38e7.ngrok-free.app',
      'dc54-2003-f5-cf01-b000-d0fd-5753-4e3e-c80d.ngrok-free.app',
      'thin-zebras-worry.loca.lt'
    ]
  },
  publicDir: 'public', // Stellt sicher, dass das public-Verzeichnis korrekt eingebunden wird
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0, // Verhindert Inlining von Bildern als Base64
  }
});
