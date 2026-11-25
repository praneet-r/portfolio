import { ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-5 text-xs text-[var(--ink-subtle)] sm:flex-row sm:items-center sm:px-8">
        <div className="space-y-1">
          <p className="font-medium text-[var(--ink-muted)]">
            {profile.name} · {profile.location} ({profile.availability})
          </p>
          <p className="font-mono text-[11px]">
            &copy; {year} · Built with React, TypeScript &amp; Tailwind CSS · Hosted on Cloudflare
            Pages
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
          >
            GitHub
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[11px] text-[var(--ink-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
          >
            Top
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
