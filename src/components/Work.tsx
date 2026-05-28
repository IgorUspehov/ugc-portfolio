import { Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    brand: 'WriteAI',
    type: 'Demo Video',
    label: 'AI Writing Tool — Demo Video',
    color: 'from-slate-800 to-slate-900',
    accent: '#00FF88',
  },
  {
    brand: 'PipelineHQ',
    type: 'Founder Testimonial',
    label: 'DevOps SaaS — Founder Testimonial',
    color: 'from-zinc-800 to-zinc-900',
    accent: '#00D4FF',
  },
  {
    brand: 'FocusFlow',
    type: 'Tutorial',
    label: 'Productivity App — Tutorial',
    color: 'from-neutral-800 to-neutral-900',
    accent: '#00FF88',
  },
  {
    brand: 'CodeReview.ai',
    type: 'Product Walkthrough',
    label: 'Developer Tool — Product Walkthrough',
    color: 'from-stone-800 to-stone-900',
    accent: '#00D4FF',
  },
  {
    brand: 'DocuBot',
    type: 'Explainer',
    label: 'B2B SaaS — Explainer Video',
    color: 'from-gray-800 to-gray-900',
    accent: '#00FF88',
  },
  {
    brand: 'InfraStack',
    type: 'Onboarding',
    label: 'Cloud SaaS — Onboarding Flow',
    color: 'from-slate-900 to-zinc-900',
    accent: '#00D4FF',
  },
];

export default function Work() {
  const ref = useScrollAnimation();

  return (
    <section id="work" className="py-24 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="animate-on-scroll mb-4">
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Portfolio
          </span>
        </div>
        <div className="animate-on-scroll delay-100 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Recent work
          </h2>
          <p className="text-sm text-text-muted max-w-sm">
            Authentic product videos for AI tools and SaaS platforms. Each
            project includes a working demo page.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${Math.min((i + 1) * 100, 500)} group relative aspect-video rounded-xl overflow-hidden border border-border hover:border-border-hover transition-all duration-300 cursor-pointer`}
            >
              {/* Thumbnail placeholder */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} group-hover:scale-105 transition-transform duration-500`}
              />

              {/* Subtle noise texture */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 40%, ${project.accent}22 0%, transparent 60%)`,
                }}
              />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <Play size={16} className="text-white ml-0.5" />
                </div>
              </div>

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-mono text-text-secondary mb-1">
                      {project.brand}
                    </p>
                    <p className="text-sm font-medium text-text-primary leading-tight">
                      {project.label}
                    </p>
                  </div>
                  <span
                    className="shrink-0 ml-3 px-2 py-1 rounded text-xs font-mono border"
                    style={{
                      color: project.accent,
                      borderColor: `${project.accent}44`,
                      backgroundColor: `${project.accent}11`,
                    }}
                  >
                    {project.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below grid */}
        <div className="animate-on-scroll mt-10 flex justify-center">
          <p className="text-sm text-text-muted">
            All videos include raw files + working demo page URL.{' '}
            <button
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-text-secondary hover:text-accent underline underline-offset-4 transition-colors"
            >
              Let's build yours.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
