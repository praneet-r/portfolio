import { useState } from 'react';
import { ArrowUpRight, Check, Copy, FileText, Mail } from 'lucide-react';
import { motion } from 'motion/react';
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
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback: open mail client if clipboard is restricted
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
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="editorial-card relative overflow-hidden rounded-3xl p-7 sm:p-12"
        >
          {/* Subtle top-right wash */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, var(--hero-glow) 0%, transparent 70%)' }}
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                04 / Get in Touch
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-[1.08] tracking-tight text-[var(--ink)] sm:text-5xl">
                Building something thoughtful? <span className="italic">Let&apos;s talk.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                I&apos;m currently open to{' '}
                <strong className="font-semibold text-[var(--ink)]">
                  Full-Stack Developer, Product Engineer, and Software Developer
                </strong>{' '}
                roles—especially with remote-first startups, early-stage product teams, ed-tech,
                dev-tools, and human-centric companies.
              </p>

              {/* Target Teams Chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.targetTeams.map((team) => (
                  <span
                    key={team}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)]/75 px-3 py-1 font-mono text-[11px] text-[var(--ink-muted)]"
                  >
                    {team}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5">
              {/* Primary Email Box */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/60 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-subtle)]">
                    Direct Email
                  </span>
                  {profile.emailIsPlaceholder && (
                    <span className="font-mono text-[10px] text-[var(--ink-subtle)]">
                      placeholder
                    </span>
                  )}
                </div>

                <p className="mt-1.5 truncate font-mono text-sm font-medium text-[var(--ink)]">
                  {profile.email}
                </p>

                <div className="mt-3.5 flex flex-wrap gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[#FAF8F5] transition-colors hover:bg-[var(--accent-hover)] dark:text-[#121210]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Send Email
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
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

              {/* GitHub & Resume Row (Zero LinkedIn) */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-xs font-semibold text-[var(--ink)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)]"
                >
                  GitHub ({profile.githubHandle})
                  <ArrowUpRight className="h-3.5 w-3.5 text-[var(--ink-subtle)]" />
                </a>

                <a
                  href={profile.resumeUrl ?? '#contact'}
                  target={profile.resumeReady ? '_blank' : undefined}
                  rel={profile.resumeReady ? 'noopener noreferrer' : undefined}
                  onClick={handleResumeClick}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-xs font-semibold text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <FileText className="h-3.5 w-3.5 text-[var(--accent)]" />
                  {profile.resumeReady ? 'Resume PDF' : 'Resume (Soon)'}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
