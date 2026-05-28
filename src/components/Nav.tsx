import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGS = ['EN', 'DE', 'RU'] as const;
type Lang = typeof LANGS[number];

const langMap: Record<Lang, string> = { EN: 'en', DE: 'de', RU: 'ru' };
const reverseLangMap: Record<string, Lang> = { en: 'EN', de: 'DE', ru: 'RU' };

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLang: Lang = reverseLangMap[i18n.language] ?? 'EN';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const switchLang = (lang: Lang) => {
    i18n.changeLanguage(langMap[lang]);
  };

  const links = [
    { label: t('nav.work'), href: '#work' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.process'), href: '#process' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const LangSwitcher = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-1 font-mono text-xs ${className}`}>
      {LANGS.map((lang, i) => (
        <span key={lang} className="flex items-center gap-1">
          {i > 0 && <span className="text-border select-none">|</span>}
          <button
            onClick={() => switchLang(lang)}
            className={`transition-colors ${
              activeLang === lang
                ? 'text-emerald-400 font-semibold'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {lang}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLink('#hero'); }}
          className="font-mono font-semibold text-lg tracking-widest text-text-primary hover:text-accent transition-colors"
        >
          IHOR
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          <LangSwitcher className="pl-4 border-l border-border" />

          <div className="flex items-center gap-2 pl-4 border-l border-border">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow shrink-0" />
            <span className="text-xs font-mono text-text-secondary whitespace-nowrap">
              {t('nav.available')}
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-text-primary transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-text-primary transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-text-primary transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
              <span className="text-xs font-mono text-text-secondary">{t('nav.available')}</span>
            </div>
            <LangSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
