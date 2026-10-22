import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'wild-stories-theme';
const THEME_COLORS = { light: '#faf8ff', dark: '#0b0716' };

export default function ThemeToggle() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(STORAGE_KEY, theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
  }, [theme, isDark]);

  return (
    <button type="button" onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={t('theme.label')} aria-pressed={isDark}
      className="grid size-8 cursor-pointer place-items-center rounded-full border border-violet-200 text-slate-500 transition hover:bg-violet-100 hover:text-mauve focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-violet-300">
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
