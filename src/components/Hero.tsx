import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-fade]');
    items.forEach((item, i) => {
      (item as HTMLElement).style.animationDelay = `${i * 120}ms`;
      item.classList.add('animate-fade-up');
    });
  }, []);

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustSignals = [
    t('hero.trust_delivery'),
    t('hero.trust_location'),
    t('hero.trust_languages'),
    t('hero.trust_available'),
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto relative"
    >
      <div className="max-w-4xl">
        {/* Label */}
        <div
          data-fade
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface mb-8 opacity-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono text-text-secondary tracking-wide">
            {t('hero.label')}
          </span>
        </div>

        {/* Headline */}
        <h1
          data-fade
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-6 opacity-0"
        >
          {t('hero.headline_1')}{' '}
          <span className="text-accent">{t('hero.headline_2')}</span>
          <br />
          {t('hero.headline_3')}
        </h1>

        {/* Subheadline */}
        <p
          data-fade
          className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10 opacity-0"
          dangerouslySetInnerHTML={{ __html: t('hero.subheadline') }}
        />

        {/* CTAs */}
        <div data-fade className="flex flex-wrap items-center gap-4 mb-16 opacity-0">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold text-sm rounded-lg hover:bg-accent-dim transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            {t('hero.cta_primary')}
            <ArrowRight size={16} />
          </button>
          <button
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-medium text-sm rounded-lg hover:border-border-hover hover:bg-surface-2 transition-all duration-200"
          >
            <Play size={14} />
            {t('hero.cta_secondary')}
          </button>
        </div>

        {/* Trust signals */}
        <div data-fade className="flex flex-wrap items-center gap-x-6 gap-y-2 opacity-0">
          {trustSignals.map((signal, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              )}
              <span className="text-sm font-mono text-text-muted">{signal}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Decorative grid */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden opacity-[0.03]"
        aria-hidden
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(#00FF88 1px, transparent 1px), linear-gradient(90deg, #00FF88 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>
    </section>
  );
}
