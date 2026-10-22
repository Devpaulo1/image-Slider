import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('document.title');
  }, [i18n.language, t]);

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-ink dark:text-slate-100">
      <Background />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <header className="flex items-center justify-between border-b border-violet-100 py-8 dark:border-white/10">
          <a href="#" className="text-lg font-black tracking-[.28em] text-ink dark:text-white">
            WILD <span className="text-violet-600 dark:text-violet-400">/</span> STORIES
          </a>
          <div className="flex items-center gap-6">
            <nav aria-label={t('nav.explore')} className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
              {t('nav.explore')} · {t('nav.about')}
            </nav>
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </header>
        <main className="grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
          <section aria-label={t('hero.eyebrow')} className="space-y-7">
            <p className="text-xs font-bold tracking-[.2em] text-violet-600 dark:text-violet-400">
              {t('hero.eyebrow')}
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-slate-500 dark:text-slate-400">
              {t('hero.subtitle')}
            </p>
          </section>
          <ImageSlider />
        </main>
        <footer className="py-10 text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500">
          {t('footer.credits')}
        </footer>
      </div>
    </div>
  );
}
