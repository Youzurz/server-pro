// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Permet au serveur Vite d'écouter sur toutes les interfaces
    port: 5177,       // Le port doit rester 5177 pour correspondre à votre configuration Docker
    strictPort: true  // Le port sera strictement utilisé (aucun fallback si occupé)
  }
});
