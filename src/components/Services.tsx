import { Check, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const planKeys = ['video', 'combo', 'founder'] as const;
const prices = { video: '€250', combo: '€750', founder: '€1,200' };
const popular = { video: false, combo: true, founder: false };

export default function Services() {
  const { t } = useTranslation();
  const ref = useScrollAnimation();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 px-6 bg-surface" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            {t('services.label')}
          </span>
        </div>
        <div className="animate-on-scroll delay-100 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {t('services.heading')}
          </h2>
          <p className="text-sm text-text-muted max-w-sm">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {planKeys.map((key, i) => {
            const isPopular = popular[key];
            const features = t(`services.plans.${key}.features`, { returnObjects: true }) as string[];

            return (
              <div
                key={key}
                className={`animate-on-scroll delay-${(i + 1) * 100} relative flex flex-col rounded-xl border p-6 transition-all duration-300 ${
                  isPopular
                    ? 'border-accent bg-accent-glow'
                    : 'border-border bg-background hover:border-border-hover'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-background text-xs font-semibold">
                      <Zap size={10} />
                      {t('services.popular_badge')}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {t(`services.plans.${key}.name`)}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold text-text-primary">{prices[key]}</span>
                    <span className="text-sm text-text-muted font-mono">
                      {t(`services.plans.${key}.unit`)}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(`services.plans.${key}.description`)}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className={`shrink-0 mt-0.5 ${isPopular ? 'text-accent' : 'text-text-muted'}`}
                      />
                      <span className="text-sm text-text-secondary">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                    isPopular
                      ? 'bg-accent text-background hover:bg-accent-dim'
                      : 'bg-surface-2 text-text-primary border border-border hover:border-border-hover'
                  }`}
                >
                  {isPopular ? t('services.cta_popular') : t('services.cta')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
