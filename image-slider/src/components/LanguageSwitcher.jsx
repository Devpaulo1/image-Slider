import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1" role="group" aria-label={t('language.label')}>
      {languages.map(({ code, label }) => (
        <button key={code} type="button" onClick={() => i18n.changeLanguage(code)}
          lang={code} aria-pressed={i18n.resolvedLanguage === code}
          className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-bold tracking-widest transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve ${i18n.resolvedLanguage === code ? 'bg-mauve text-white shadow-sm' : 'text-slate-400 hover:bg-violet-100 hover:text-mauve'}`}>
          {label}
        </button>
      ))}
    </div>
  );
}
