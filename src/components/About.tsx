import { Terminal, Video, Code2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { icon: Terminal, label: 'Linux / DevOps background' },
  { icon: Video, label: 'Authentic UGC video production' },
  { icon: Code2, label: 'Landing page & demo builds' },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6 bg-surface" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="animate-on-scroll mb-4">
              <span className="text-xs font-mono text-accent tracking-widest uppercase">
                About
              </span>
            </div>
            <h2 className="animate-on-scroll delay-100 text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-8">
              Engineer who learned to sell what he builds.
            </h2>

            <div className="animate-on-scroll delay-200 space-y-5 text-text-secondary leading-relaxed">
              <p>
                I'm Ihor. Linux engineer turned UGC creator, based in Munich. I spent years
                building software before realizing my edge: I can sell what I build, because
                I understand it.
              </p>
              <p>
                Most UGC creators can talk about your product. I can also build it. When you
                hire me, you get authentic video AND a working demo to A/B test against your
                live page. No middleman, no agency markup.
              </p>
            </div>

            {/* Skills */}
            <ul className="animate-on-scroll delay-300 mt-8 flex flex-col gap-3">
              {skills.map(({ icon: Icon, label }, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg border border-border bg-background flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-accent" />
                  </div>
                  <span className="text-sm text-text-secondary">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="animate-on-scroll delay-200">
            <div className="relative rounded-2xl border border-border bg-background overflow-hidden aspect-[4/3]">
              {/* Mock terminal */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="ml-4 text-xs font-mono text-text-muted">
                    ihor@munich ~ %
                  </span>
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
                    <p>
                      <span className="text-cyan">→</span> Linux / DevOps (8yr)
                    </p>
                    <p>
                      <span className="text-cyan">→</span> UGC video production
                    </p>
                    <p>
                      <span className="text-cyan">→</span> Landing page builds
                    </p>
                    <p>
                      <span className="text-cyan">→</span> EN / RU / DE
                    </p>
                  </div>
                  <p className="mt-3">
                    <span className="text-accent">$</span>{' '}
                    <span className="text-text-secondary">echo $LOCATION</span>
                  </p>
                  <p className="pl-4 text-text-primary">Munich, Germany 🇩🇪</p>
                  <p className="mt-3">
                    <span className="text-accent">$</span>{' '}
                    <span className="text-text-secondary">
                      echo $STATUS
                    </span>
                  </p>
                  <p className="pl-4">
                    <span className="text-accent animate-pulse">▌</span>
                    <span className="text-accent"> AVAILABLE</span>
                  </p>
                </div>
              </div>

              {/* Subtle glow */}
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
