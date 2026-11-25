import { useState } from 'react';
import { ArrowUpRight, Check, Copy, FileText, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';

interface ContactSectionProps {
  onResumePlaceholderClick: () => void;
}

export function ContactSection({ onResumePlaceholderClick }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!profile.resumeReady || !profile.resumeUrl) {
      e.preventDefault();
      onResumePlaceholderClick();
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-[var(--border)] py-14 lg:py-16">
      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-muted)]">
        Contact
      </h2>

      <div className="mt-5 max-w-2xl space-y-3 text-[15px] leading-[1.7] text-[var(--ink-secondary)]">
        <p>
          I&apos;m open to{' '}
          <span className="font-medium text-[var(--ink)]">{profile.targetRoles.join(', ')}</span>{' '}
          roles at remote-first startups, early-stage product teams, ed-tech, dev-tools, and
          human-centric or wellness tech companies.
        </p>
      </div>

      {/* Structured Contact Rows (Zero LinkedIn) */}
      <div className="mt-6 divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-[var(--bg-subtle)]">
        {/* Email Row */}
        <div className="flex flex-col justify-between gap-3 px-4 py-3.5 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--ink-muted)]">
              Email {profile.emailIsPlaceholder ? '(placeholder)' : ''}
            </span>
            <p className="mt-0.5 font-mono text-sm text-[var(--ink)]">{profile.email}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-[#0D0F12]"
            >
              <Mail className="h-3.5 w-3.5" />
              Send Email
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* GitHub Row */}
        <div className="flex items-center justify-between gap-3 px-4 py-3.5">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--ink-muted)]">
              GitHub
            </span>
            <p className="mt-0.5 font-mono text-sm text-[var(--ink)]">
              github.com/{profile.githubHandle}
            </p>
          </div>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[var(--accent)] underline decoration-[var(--accent-border)] underline-offset-4 hover:decoration-[var(--accent)]"
          >
            Open profile
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Resume Row */}
        <div className="flex items-center justify-between gap-3 px-4 py-3.5">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--ink-muted)]">
              Resume
            </span>
            <p className="mt-0.5 font-mono text-sm text-[var(--ink)]">
              {profile.resumeReady ? 'Praneet_R_Resume.pdf' : 'PDF link pending'}
            </p>
          </div>
          <a
            href={profile.resumeUrl ?? '#contact'}
            target={profile.resumeReady ? '_blank' : undefined}
            rel={profile.resumeReady ? 'noopener noreferrer' : undefined}
            onClick={handleResumeClick}
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FileText className="h-3.5 w-3.5" />
            {profile.resumeReady ? 'Download PDF' : 'Placeholder'}
          </a>
        </div>
      </div>
    </section>
  );
}
