import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Importar el archivo de exportación para WordPress
import './wordpress-export'

createRoot(document.getElementById("root")!).render(<App />);
