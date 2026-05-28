import { Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-text-muted">
          © {new Date().getFullYear()} {t('footer.copyright')}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/IgorUspehov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
