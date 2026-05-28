import { Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const projectKeys = [
  { key: 'writeai', brand: 'WriteAI', color: 'from-slate-800 to-slate-900', accent: '#00FF88' },
  { key: 'pipelinehq', brand: 'PipelineHQ', color: 'from-zinc-800 to-zinc-900', accent: '#00D4FF' },
  { key: 'focusflow', brand: 'FocusFlow', color: 'from-neutral-800 to-neutral-900', accent: '#00FF88' },
  { key: 'codereview', brand: 'CodeReview.ai', color: 'from-stone-800 to-stone-900', accent: '#00D4FF' },
  { key: 'docubot', brand: 'DocuBot', color: 'from-gray-800 to-gray-900', accent: '#00FF88' },
  { key: 'infrastack', brand: 'InfraStack', color: 'from-slate-900 to-zinc-900', accent: '#00D4FF' },
] as const;

export default function Work() {
  const { t } = useTranslation();
  const ref = useScrollAnimation();

  return (
    <section id="work" className="py-24 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            {t('work.label')}
          </span>
        </div>
        <div className="animate-on-scroll delay-100 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {t('work.heading')}
          </h2>
          <p className="text-sm text-text-muted max-w-sm">
            {t('work.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectKeys.map(({ key, brand, color, accent }, i) => (
            <div
              key={key}
              className={`animate-on-scroll delay-${Math.min((i + 1) * 100, 500)} group relative aspect-video rounded-xl overflow-hidden border border-border hover:border-border-hover transition-all duration-300 cursor-pointer`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} group-hover:scale-105 transition-transform duration-500`}
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 40%, ${accent}22 0%, transparent 60%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <Play size={16} className="text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-text-secondary mb-1">{brand}</p>
                    <p className="text-sm font-medium text-text-primary leading-tight">
                      {t(`work.projects.${key}.label`)}
                    </p>
                  </div>
                  <span
                    className="shrink-0 px-2 py-1 rounded text-xs font-mono border whitespace-nowrap"
                    style={{
                      color: accent,
                      borderColor: `${accent}44`,
                      backgroundColor: `${accent}11`,
                    }}
                  >
                    {t(`work.projects.${key}.type`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-10 flex justify-center">
          <p className="text-sm text-text-muted">
            {t('work.cta_text')}{' '}
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-text-secondary hover:text-accent underline underline-offset-4 transition-colors"
            >
              {t('work.cta_link')}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
