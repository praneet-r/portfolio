import { useCallback, useState } from 'react';
import { ArrowUpRight, Check, Copy, Info, Moon, Sun, X } from 'lucide-react';
import { profile, projects, skillGroups, type ProjectItem } from './data/portfolio';
import { useTheme } from './hooks/useTheme';

function StatusLabel({ project }: { project: ProjectItem }) {
  const dotColor =
    project.statusTone === 'completed'
      ? 'var(--status-done)'
      : project.statusTone === 'wip'
        ? 'var(--status-wip)'
        : 'var(--ink-muted)';

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--ink-muted)]">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: dotColor }}
        aria-hidden="true"
      />
      {project.status}
    </span>
  );
}

function WorkflowNote({ project }: { project: ProjectItem }) {
  const workflows = project.workflows ?? [];
  const [activeId, setActiveId] = useState(workflows[0]?.id ?? '');
  const active = workflows.find((w) => w.id === activeId) ?? workflows[0];

  if (!active) return null;

  return (
    <div className="mt-4 border-l-2 border-[var(--border)] pl-4">
      <div
        role="tablist"
        aria-label="Application workflows"
        className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs"
      >
        <span className="font-mono text-[11px] text-[var(--ink-muted)]">Workflow:</span>
        {workflows.map((wf) => {
          const selected = wf.id === active.id;
          return (
            <button
              key={wf.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(wf.id)}
              className={`cursor-pointer pb-0.5 font-medium transition-colors ${
                selected
                  ? 'border-b border-[var(--accent)] text-[var(--accent)]'
                  : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
              }`}
            >
              {wf.label}
            </button>
          );
        })}
      </div>

      <ol className="mt-3 space-y-1.5 text-[13.5px] leading-relaxed text-[var(--ink-secondary)]">
        {active.steps.map((row) => (
          <li key={row.step} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="font-mono text-[11px] text-[var(--ink-muted)]">{row.step}.</span>
            <span>{row.action}</span>
            <span className="font-mono text-[11px] text-[var(--ink-muted)]">({row.layer})</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [resumeToastOpen, setResumeToastOpen] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }, []);

  const handleResumeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!profile.resumeReady || !profile.resumeUrl) {
      e.preventDefault();
      setResumeToastOpen(true);
      window.setTimeout(() => setResumeToastOpen(false), 4500);
    }
  }, []);

  const year = new Date().getFullYear();

  return (
    <div id="top" className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <div className="mx-auto max-w-[660px] px-6 py-12 sm:py-20">
        {/* Minimal Single-Row Header */}
        <header className="flex items-center justify-between gap-4 pb-12 sm:pb-16">
          <a
            href="#top"
            className="text-[15px] font-semibold tracking-[-0.015em] text-[var(--ink)]"
          >
            {profile.name}
          </a>

          <div className="flex items-center gap-5">
            <nav aria-label="Primary navigation" className="flex items-center gap-4 text-sm">
              <a
                href="#projects"
                className="text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
              >
                Contact
              </a>
            </nav>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-[var(--ink-muted)] transition-colors hover:bg-[var(--bg-subtle)] hover:text-[var(--ink)]"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          </div>
        </header>

        <main className="space-y-16 sm:space-y-20">
          {/* Plainspoken Opening Intro */}
          <section aria-label="Introduction">
            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
              {profile.role}
            </h1>
            <p className="mt-1.5 inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              {profile.location} · {profile.availability}
            </p>

            <div className="mt-6 space-y-4 text-[15.5px] leading-[1.75] text-[var(--ink-secondary)]">
              <p>
                Hi, I&apos;m <span className="font-medium text-[var(--ink)]">{profile.name}</span>.
                I build full-stack web applications using{' '}
                <span className="font-medium text-[var(--ink)]">
                  Python (Flask, FastAPI), JavaScript, React, SQL, and REST APIs
                </span>
                . I also integrate LLM APIs into products where structured outputs, matching, or
                summarization directly remove user friction.
              </p>

              <p>
                I care a lot about human psychology and clean UX—building calm, practical tools that
                respect the user&apos;s attention rather than bloated corporate software. I graduated
                from <span className="font-medium text-[var(--ink)]">IIT Madras</span> with a B.S.
                in Data Science and Applications (Sept 2026, CGPA 8.06/10), and on the side I make
                small 2D games in Godot Engine and JavaScript.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link inline-flex items-center gap-1 font-medium"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a href="#contact" className="prose-link font-medium">
                Email
              </a>

              <a
                href={profile.resumeUrl ?? '#contact'}
                target={profile.resumeReady ? '_blank' : undefined}
                rel={profile.resumeReady ? 'noopener noreferrer' : undefined}
                onClick={handleResumeClick}
                className="prose-link font-medium"
              >
                {profile.resumeReady ? 'Resume (PDF)' : 'Resume'}
              </a>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-12">
            <h2 className="text-sm font-medium text-[var(--ink-muted)]">Projects</h2>

            <div className="mt-6 space-y-12">
              {projects.map((project) => (
                <article key={project.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[16.5px] font-semibold tracking-[-0.015em] text-[var(--ink)]">
                      {project.title}
                    </h3>
                    <StatusLabel project={project} />
                  </div>

                  <p className="mt-2.5 text-[15px] leading-[1.72] text-[var(--ink-secondary)]">
                    {project.summary}
                  </p>

                  <ul className="mt-3.5 space-y-1.5 text-[14px] leading-relaxed text-[var(--ink-secondary)]">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <span
                          className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--border-strong)]"
                          aria-hidden="true"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {project.workflows && <WorkflowNote project={project} />}

                  <p className="mt-3.5 font-mono text-xs text-[var(--ink-muted)]">
                    {project.stack.join(' · ')}
                  </p>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs">
                    {project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accent-link inline-flex items-center gap-1 font-mono"
                      >
                        Live demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span
                        className="font-mono text-[var(--ink-muted)]"
                        title="Update liveDemoUrl in src/data/portfolio.ts when ready"
                      >
                        Demo: {project.liveDemoNote ?? 'Coming soon'}
                      </span>
                    )}

                    {project.sourceUrl ? (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prose-link inline-flex items-center gap-1 font-mono"
                      >
                        Source
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span
                        className="font-mono text-[var(--ink-muted)]"
                        title="Update sourceUrl in src/data/portfolio.ts when ready"
                      >
                        Source: {project.sourceNote ?? 'Pending'}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Background */}
          <section id="background" className="scroll-mt-12">
            <h2 className="text-sm font-medium text-[var(--ink-muted)]">Background</h2>

            <div className="mt-5 space-y-6 text-[15px] leading-[1.72] text-[var(--ink-secondary)]">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-[var(--ink)]">{profile.education.institution}</h3>
                  <span className="font-mono text-xs text-[var(--ink-muted)]">
                    {profile.education.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--ink-secondary)]">
                  {profile.education.degree} · CGPA {profile.education.cgpa}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-[var(--ink)]">2D Game Development (Side Craft)</h3>
                  <span className="font-mono text-xs text-[var(--ink-muted)]">
                    Godot Engine · JavaScript
                  </span>
                </div>
                <p className="mt-1.5 text-[14.5px] leading-[1.7] text-[var(--ink-secondary)]">
                  Building small 2D games independently keeps me close to clean state management,
                  responsive feedback loops, and intuitive UX feel—habits I bring back into every
                  web application I work on.
                </p>
              </div>
            </div>
          </section>

          {/* Skills (Zero daily-stack dots or bars) */}
          <section id="skills" className="scroll-mt-12">
            <h2 className="text-sm font-medium text-[var(--ink-muted)]">Skills</h2>

            <dl className="mt-5 space-y-4">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className="grid gap-1 sm:grid-cols-[135px_minmax(0,1fr)] sm:items-baseline sm:gap-4"
                >
                  <dt className="font-mono text-xs text-[var(--ink-muted)]">{group.category}</dt>
                  <dd className="text-[14.5px] leading-relaxed text-[var(--ink)]">
                    {group.items.join(', ')}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Contact (Zero LinkedIn) */}
          <section id="contact" className="scroll-mt-12 border-t border-[var(--border)] pt-12">
            <h2 className="text-sm font-medium text-[var(--ink-muted)]">Contact</h2>

            <p className="mt-4 text-[15px] leading-[1.75] text-[var(--ink-secondary)]">
              I&apos;m currently looking for{' '}
              <span className="font-medium text-[var(--ink)]">
                {profile.targetRoles.join(', ')}
              </span>{' '}
              roles at remote-first startups, early-stage product teams, ed-tech, dev-tools, or
              human-centric and wellness tech companies.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <a href={`mailto:${profile.email}`} className="accent-link font-mono text-[13.5px]">
                {profile.email}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-xs text-[var(--ink-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-[var(--accent)]" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </button>

              {profile.emailIsPlaceholder && (
                <span className="font-mono text-[11px] text-[var(--ink-muted)]">
                  (placeholder email)
                </span>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link inline-flex items-center gap-1"
              >
                github.com/{profile.githubHandle}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={profile.resumeUrl ?? '#contact'}
                target={profile.resumeReady ? '_blank' : undefined}
                rel={profile.resumeReady ? 'noopener noreferrer' : undefined}
                onClick={handleResumeClick}
                className="prose-link"
              >
                {profile.resumeReady ? 'Download Resume (PDF)' : 'Resume (placeholder)'}
              </a>
            </div>
          </section>
        </main>

        {/* Quiet Footer */}
        <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-6 font-mono text-xs text-[var(--ink-muted)]">
          <p>
            &copy; {year} {profile.name} · {profile.location}
          </p>
          <a href="#top" className="transition-colors hover:text-[var(--ink)]">
            Back to top ↑
          </a>
        </footer>
      </div>

      {/* Unobtrusive placeholder notice for Resume */}
      {resumeToastOpen && (
        <div
          role="status"
          className="fixed right-5 bottom-5 z-50 flex max-w-sm items-start gap-3 rounded-md border border-[var(--border-strong)] bg-[var(--bg)] p-4 text-xs shadow-lg"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
          <div className="space-y-1 text-[var(--ink-secondary)]">
            <p className="font-semibold text-[var(--ink)]">Resume PDF placeholder</p>
            <p className="leading-relaxed">
              Add{' '}
              <code className="rounded bg-[var(--bg-subtle)] px-1 py-0.5 font-mono text-[11px] text-[var(--ink)]">
                public/Praneet_R_Resume.pdf
              </code>{' '}
              and set <code className="font-mono text-[11px]">resumeReady: true</code> in{' '}
              <code className="font-mono text-[11px]">src/data/portfolio.ts</code>.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setResumeToastOpen(false)}
            aria-label="Dismiss notification"
            className="cursor-pointer rounded p-0.5 text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
