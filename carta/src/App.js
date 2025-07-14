import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductosProvider } from './context/ProductosContext.js';
import { LanguageProvider } from "./context/LanguageContext.js"; // 👈 Importamos el contexto
import CartaPage from './pages/CartaPage.js';
import PreMenu from './components/PreMenu/PreMenu.jsx';
import Valoraciones from './pages/Valoraciones.js';
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { messages as enMessages } from "./locales/en/messages.js";
import { messages as esMessages } from "./locales/es/messages.js";
import { messages as frMessages } from "./locales/fr/messages.js"; // 👈 Agregar esto arriba
import { MesasProvider } from './context/MesasContext.js';
import Home from './pages/HomePage.js';
import Reservas from './pages/Reservas.js';
import { ComensalProvider } from './context/ComensalesContext.js';

const locales = {
  en: enMessages,
  es: esMessages,
  fr: frMessages, // 👈 Agregar esta línea
};

function App() {
  // Cargar idioma desde localStorage o usar "es" por defecto
  const storedLocale = localStorage.getItem("locale") || "es";
  const [locale] = useState(storedLocale);
  

  useEffect(() => {
    // Cargar mensajes y activar idioma
    i18n.load({ [locale]: locales[locale] });
    i18n.activate(locale);
  }, [locale]);

  return (
    <I18nProvider i18n={i18n}>
      <LanguageProvider>
        <Router>
          <MesasProvider>
            <ProductosProvider>
              <ComensalProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/carta" element={<CartaPage />} />
                  <Route path="/preMenu" element={<PreMenu />} />
                  <Route path="/valoraciones" element={<Valoraciones />} />
                  <Route path="/reservas" element={<Reservas />} />
                </Routes>
              </ComensalProvider>
            </ProductosProvider>
          </MesasProvider>
        </Router>
      </LanguageProvider>
    </I18nProvider >
  );
}

export default App;
