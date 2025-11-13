import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    cors: true,
    hmr: {
      host: "localhost",
    },
    // Permitir acceso desde WordPress
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuración para desarrollo
  build: {
    sourcemap: true,
    // Desactivar minificación en desarrollo
    minify: mode === 'production',
  },
}));
