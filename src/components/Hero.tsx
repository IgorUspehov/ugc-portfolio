import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const trustSignals = [
  '3-day delivery',
  'Munich, Germany',
  'EN / RU / DE (learning)',
  'Available June 2026',
];

export default function Hero() {
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

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
    >
      <div className="max-w-4xl">
        {/* Label */}
        <div
          data-fade
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface mb-8 opacity-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono text-text-secondary tracking-wide">
            UGC Creator — AI & SaaS
          </span>
        </div>

        {/* Headline */}
        <h1
          data-fade
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-6 opacity-0"
        >
          UGC for{' '}
          <span className="text-accent">AI & SaaS</span>
          <br />
          brands.
        </h1>

        {/* Subheadline */}
        <p
          data-fade
          className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10 opacity-0"
        >
          I film authentic product videos{' '}
          <span className="text-text-primary">AND</span> build working demo
          pages. One creator, double leverage.
        </p>

        {/* CTAs */}
        <div data-fade className="flex flex-wrap items-center gap-4 mb-16 opacity-0">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold text-sm rounded-lg hover:bg-accent-dim transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a project
            <ArrowRight size={16} />
          </button>
          <button
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-medium text-sm rounded-lg hover:border-border-hover hover:bg-surface-2 transition-all duration-200"
          >
            <Play size={14} />
            See work
          </button>
        </div>

        {/* Trust signals */}
        <div
          data-fade
          className="flex flex-wrap items-center gap-x-6 gap-y-2 opacity-0"
        >
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
