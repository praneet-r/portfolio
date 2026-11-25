import { useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data/portfolio';
import type { Theme } from '../hooks/useTheme';
import { navItems } from './Sidebar';

interface MobileHeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  onResumePlaceholderClick: () => void;
}

export function MobileHeader({
  theme,
  onToggleTheme,
  onResumePlaceholderClick,
}: MobileHeaderProps) {
  const [open, setOpen] = useState(false);

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!profile.resumeReady || !profile.resumeUrl) {
      e.preventDefault();
      setOpen(false);
      onResumePlaceholderClick();
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm lg:hidden">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-5 sm:px-8">
        <a
          href="#about"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--ink)]"
        >
          <span>{profile.name}</span>
          <span className="font-mono text-[11px] font-normal text-[var(--ink-muted)]">
            / Full-Stack Dev
          </span>
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--ink-secondary)]"
          >
            {theme === 'light' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--ink-secondary)]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile section navigation"
          className="border-t border-[var(--border)] bg-[var(--bg)] px-5 py-3 sm:px-8"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm text-[var(--ink-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--ink)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex items-center gap-4 border-t border-[var(--border)] pt-3 font-mono text-xs">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--accent)]"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.resumeUrl ?? '#contact'}
              target={profile.resumeReady ? '_blank' : undefined}
              rel={profile.resumeReady ? 'noopener noreferrer' : undefined}
              onClick={handleResumeClick}
              className="inline-flex items-center gap-1 text-[var(--ink-secondary)]"
            >
              {profile.resumeReady ? 'Resume PDF' : 'Resume (placeholder)'}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
