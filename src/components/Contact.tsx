import { useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projectTypes = [
  'UGC Video (€250)',
  'UGC + Demo Combo (€750)',
  'Founder Story Package (€1,200)',
  'Custom / Not sure yet',
];

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Contact
          </span>
        </div>
        <div className="animate-on-scroll delay-100 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Let's build something
          </h2>
          <a
            href="mailto:uspeh.polimer2022@gmail.com"
            className="group inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm font-mono"
          >
            uspeh.polimer2022@gmail.com
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll delay-200">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full min-h-[320px] rounded-xl border border-border bg-surface p-8">
                <div className="w-12 h-12 rounded-full border border-accent/30 bg-accent-glow flex items-center justify-center mb-5">
                  <Send size={18} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Message received.
                </h3>
                <p className="text-text-secondary text-sm">
                  I'll get back to you within 24 hours. Talk soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-surface p-6 flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-text-muted">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-text-muted">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-text-muted">
                    Project type
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a package
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-text-muted">
                    Tell me about your product
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="What does it do? Who is it for? What do you want the video to achieve?"
                    className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="self-start inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold text-sm rounded-lg hover:bg-accent-dim transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Email CTA */}
            <div className="animate-on-scroll delay-300 rounded-xl border border-border bg-surface p-6">
              <div className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center mb-4">
                <Send size={16} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">
                Prefer email?
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Drop me a line directly. I respond within 24 hours.
              </p>
              <a
                href="mailto:uspeh.polimer2022@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-background text-text-primary text-sm font-medium rounded-lg hover:border-border-hover hover:bg-surface-2 transition-all"
              >
                Email me
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Direct email */}
            <div className="animate-on-scroll delay-400 rounded-xl border border-border bg-surface p-6">
              <p className="text-xs font-mono text-text-muted mb-3 uppercase tracking-widest">
                Direct email
              </p>
              <a
                href="mailto:uspeh.polimer2022@gmail.com"
                className="group text-xl font-semibold text-text-primary hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                uspeh.polimer2022@gmail.com
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
              <p className="text-sm text-text-muted mt-2">
                Response within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
