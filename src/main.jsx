import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './common/ThemeContext.jsx';
import { LanguageProvider } from './common/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
    
  </StrictMode>
);