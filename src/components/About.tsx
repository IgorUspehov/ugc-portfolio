import { Terminal, Video, Code2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const skillIcons = [Terminal, Video, Code2];

export default function About() {
  const { t } = useTranslation();
  const ref = useScrollAnimation();

  const skills = t('about.skills', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 px-6 bg-surface" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="animate-on-scroll mb-4">
              <span className="text-xs font-mono text-accent tracking-widest uppercase">
                {t('about.label')}
              </span>
            </div>
            <h2 className="animate-on-scroll delay-100 text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-8">
              {t('about.heading')}
            </h2>

            <div className="animate-on-scroll delay-200 space-y-5 text-text-secondary leading-relaxed">
              <p>{t('about.para1')}</p>
              <p>{t('about.para2')}</p>
            </div>

            <ul className="animate-on-scroll delay-300 mt-8 flex flex-col gap-3">
              {skills.map((label, i) => {
                const Icon = skillIcons[i];
                return (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-border bg-background flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-accent" />
                    </div>
                    <span className="text-sm text-text-secondary">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Terminal visual */}
          <div className="animate-on-scroll delay-200">
            <div className="relative rounded-2xl border border-border bg-background overflow-hidden aspect-[4/3]">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="ml-4 text-xs font-mono text-text-muted">ihor@munich ~ %</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p>
                    <span className="text-accent">$</span>{' '}
                    <span className="text-text-secondary">whoami</span>
                  </p>
                  <p className="text-text-primary pl-4">ihor_uspekhov</p>
                  <p className="mt-3">
                    <span className="text-accent">$</span>{' '}
                    <span className="text-text-secondary">cat skills.txt</span>
                  </p>
                  <div className="pl-4 text-text-secondary space-y-1">
                    <p><span className="text-cyan">→</span> Linux / DevOps (8yr)</p>
                    <p><span className="text-cyan">→</span> UGC video production</p>
                    <p><span className="text-cyan">→</span> Landing page builds</p>
                    <p><span className="text-cyan">→</span> EN / RU / DE</p>
                  </div>
                  <p className="mt-3">
                    <span className="text-accent">$</span>{' '}
                    <span className="text-text-secondary">echo $LOCATION</span>
                  </p>
                  <p className="pl-4 text-text-primary">{t('about.terminal.location_value')}</p>
                  <p className="mt-3">
                    <span className="text-accent">$</span>{' '}
                    <span className="text-text-secondary">echo $STATUS</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-accent animate-pulse">▌</span>
                    <span className="text-accent"> {t('about.terminal.status_value')}</span>
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 80% 20%, rgba(0,255,136,0.05) 0%, transparent 60%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
