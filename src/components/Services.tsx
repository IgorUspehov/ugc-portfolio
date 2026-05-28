import { Check, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const plans = [
  {
    name: 'UGC Video',
    price: '€250',
    unit: 'per video',
    description: 'Authentic product video optimized for paid social and landing pages.',
    features: [
      '30–60 second product video',
      'English or Russian delivery',
      'Multiple aspect ratios',
      'Raw footage included',
      '2 revision rounds',
      '3-day turnaround',
    ],
    popular: false,
    cta: 'Get started',
  },
  {
    name: 'UGC + Demo Combo',
    price: '€750',
    unit: 'per package',
    description: 'Three UGC videos plus a custom landing page demo, built and deployed.',
    features: [
      '3 UGC product videos',
      'Custom demo landing page (Bolt)',
      'A/B-ready vs. your live page',
      'Script consulting included',
      'English or Russian',
      'Raw footage + source code',
    ],
    popular: true,
    cta: 'Book this package',
  },
  {
    name: 'Founder Story',
    price: '€1,200',
    unit: 'per package',
    description: 'Full-stack content production for pre-launch or growth-stage founders.',
    features: [
      '5 UGC product videos',
      'Demo landing page (Bolt)',
      'Script consulting + review',
      'Founder narrative framing',
      'Priority delivery (4 days)',
      'All raw assets + code',
    ],
    popular: false,
    cta: 'Book this package',
  },
];

export default function Services() {
  const ref = useScrollAnimation();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 px-6 bg-surface" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Services
          </span>
        </div>
        <div className="animate-on-scroll delay-100 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            What you get
          </h2>
          <p className="text-sm text-text-muted max-w-sm">
            Straightforward packages. No hidden fees, no agency overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${(i + 1) * 100} relative flex flex-col rounded-xl border p-6 transition-all duration-300 ${
                plan.popular
                  ? 'border-accent bg-accent-glow'
                  : 'border-border bg-background hover:border-border-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-background text-xs font-semibold">
                    <Zap size={10} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-text-primary">
                    {plan.price}
                  </span>
                  <span className="text-sm text-text-muted font-mono">
                    {plan.unit}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className={`shrink-0 mt-0.5 ${plan.popular ? 'text-accent' : 'text-text-muted'}`}
                    />
                    <span className="text-sm text-text-secondary">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                  plan.popular
                    ? 'bg-accent text-background hover:bg-accent-dim'
                    : 'bg-surface-2 text-text-primary border border-border hover:border-border-hover'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
