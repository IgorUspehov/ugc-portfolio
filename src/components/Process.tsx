import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    day: 'Day 1',
    name: 'Brief',
    description:
      'Kickoff call to align on brand voice, target audience, and key messaging. I take notes so you don\'t have to.',
    detail: 'Kickoff call · Brand voice alignment · Asset collection',
  },
  {
    day: 'Day 2',
    name: 'Script + Demo',
    description:
      'Scripts written and reviewed. Demo landing page built in Bolt with real product context, deployed and shareable.',
    detail: 'Script drafts · Demo page built · Review sync',
  },
  {
    day: 'Day 3',
    name: 'Filming',
    description:
      'Videos shot in 2–3 delivery styles: screen record, talking head, or product close-up. All in one session.',
    detail: 'Multi-style shooting · Natural lighting · Authentic tone',
  },
  {
    day: 'Day 4',
    name: 'Delivery',
    description:
      'Final cut + raw footage zipped. Demo page URL live. Everything labeled and ready for your team.',
    detail: 'Final files · Raw footage · Demo URL',
  },
];

export default function Process() {
  const ref = useScrollAnimation();

  return (
    <section id="process" className="py-24 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Process
          </span>
        </div>
        <div className="animate-on-scroll delay-100 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Four days. Done.
          </h2>
          <p className="text-sm text-text-muted max-w-sm">
            No long onboarding. No endless back-and-forth. Scoped, shipped, delivered.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-[26px] left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-px bg-border" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${(i + 1) * 100} flex flex-col items-start px-6 first:pl-0 last:pr-0`}
            >
              {/* Step indicator */}
              <div className="relative mb-6">
                <div className="w-[52px] h-[52px] rounded-full border border-border bg-background flex items-center justify-center relative z-10">
                  <span className="text-xs font-mono text-accent">{step.day}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {step.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                {step.description}
              </p>
              <p className="text-xs font-mono text-text-muted">{step.detail}</p>
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${(i + 1) * 100} flex gap-4 pb-10 last:pb-0 relative`}
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-border" />
              )}

              <div className="shrink-0 w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center z-10">
                <span className="text-xs font-mono text-accent leading-none text-center">
                  D{i + 1}
                </span>
              </div>

              <div className="pt-1">
                <h3 className="text-base font-semibold text-text-primary mb-1.5">
                  {step.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-2">
                  {step.description}
                </p>
                <p className="text-xs font-mono text-text-muted">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
