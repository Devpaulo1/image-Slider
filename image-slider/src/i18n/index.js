import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from '../locales/pt.json';
import en from '../locales/en.json';
import es from '../locales/es.json';

const STORAGE_KEY = 'wild-stories-lang';
const LANGUAGES = ['pt', 'en', 'es'];

function detectLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (LANGUAGES.includes(saved)) return saved;
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return LANGUAGES.includes(browser) ? browser : 'pt';
}

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es },
  },
  lng: detectLanguage(),
  fallbackLng: 'pt',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
});

export default i18n;
