import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import './core/i18n/config';
import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
