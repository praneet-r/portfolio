import { ArrowUpRight, FileText, Moon, Sun } from 'lucide-react';
import { profile } from '../data/portfolio';
import type { Theme } from '../hooks/useTheme';

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'background', label: 'Background' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

interface SidebarProps {
  activeSection: string;
  theme: Theme;
  onToggleTheme: () => void;
  onResumePlaceholderClick: () => void;
}

export function Sidebar({
  activeSection,
  theme,
  onToggleTheme,
  onResumePlaceholderClick,
}: SidebarProps) {
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!profile.resumeReady || !profile.resumeUrl) {
      e.preventDefault();
      onResumePlaceholderClick();
    }
  };

  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:border-r lg:border-[var(--border)] lg:py-14 lg:pr-10">
      <div>
        {/* Identity */}
        <div>
          <a
            href="#about"
            className="inline-block text-[25px] font-semibold tracking-[-0.025em] text-[var(--ink)]"
          >
            {profile.name}
          </a>
          <p className="mt-1 text-sm font-medium text-[var(--ink-secondary)]">{profile.role}</p>
          <div className="mt-3 space-y-1 font-mono text-xs text-[var(--ink-muted)]">
            <p>{profile.location}</p>
            <p className="inline-flex items-center gap-2 text-[var(--ink-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              {profile.availability}
            </p>
          </div>
          <p className="mt-5 text-[13.5px] leading-relaxed text-[var(--ink-muted)]">
            {profile.shortBio}
          </p>
        </div>

        {/* Vertical Index Navigation */}
        <nav aria-label="Section navigation" className="mt-10 border-l border-[var(--border)]">
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                      isActive
                        ? 'border-[var(--accent)] font-medium text-[var(--ink)]'
                        : 'border-transparent text-[var(--ink-muted)] hover:border-[var(--border-strong)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom Utility Links & Theme Toggle */}
      <div className="space-y-4 border-t border-[var(--border)] pt-6">
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between text-[var(--ink-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            <span className="font-mono text-xs">github.com/{profile.githubHandle}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <a
            href={profile.resumeUrl ?? '#contact'}
            target={profile.resumeReady ? '_blank' : undefined}
            rel={profile.resumeReady ? 'noopener noreferrer' : undefined}
            onClick={handleResumeClick}
            className="inline-flex items-center justify-between text-[var(--ink-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs">
              <FileText className="h-3.5 w-3.5" />
              {profile.resumeReady ? 'Resume (PDF)' : 'Resume (placeholder)'}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          className="inline-flex w-full cursor-pointer items-center justify-between rounded-md border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-2 font-mono text-xs text-[var(--ink-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
        >
          <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
          {theme === 'light' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
        </button>
      </div>
    </aside>
  );
}
