import { ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[var(--ink-muted)]">
        <p>
          &copy; {year} {profile.name} · {profile.location}
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-1 text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
        >
          Top
          <ArrowUp className="h-3 w-3" />
        </a>
      </div>
    </footer>
  );
}
