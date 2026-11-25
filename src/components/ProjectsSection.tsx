import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  Layers,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { projects, type ProjectItem } from '../data/portfolio';

function StatusBadge({ project }: { project: ProjectItem }) {
  if (project.statusTone === 'completed') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 font-mono text-[11px] font-medium text-[var(--accent)]">
        <CheckCircle2 className="h-3.5 w-3.5" />
        {project.status}
      </span>
    );
  }

  if (project.statusTone === 'active') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--warm-dot)]/25 bg-[var(--warm-soft)] px-3 py-1 font-mono text-[11px] font-medium text-[var(--warm-text)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--warm-dot)]" />
        {project.status}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 font-mono text-[11px] font-medium text-[var(--ink-muted)]">
      <Wrench className="h-3 w-3" />
      {project.status}
    </span>
  );
}

function ProjectActions({ project }: { project: ProjectItem }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 pt-2">
      {project.liveDemoUrl ? (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[#FAF8F5] transition-colors hover:bg-[var(--accent-hover)] dark:text-[#121210]"
        >
          Live Demo
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span
          className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-[var(--border-strong)] bg-[var(--surface-muted)]/70 px-3.5 py-2 font-mono text-[11px] text-[var(--ink-muted)]"
          title="Update liveDemoUrl in src/data/portfolio.ts when ready"
        >
          <Clock className="h-3.5 w-3.5 text-[var(--ink-subtle)]" />
          {project.liveDemoNote ?? 'Live demo coming soon'}
        </span>
      )}

      {project.sourceUrl ? (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <Code2 className="h-3.5 w-3.5" />
          Source Code
        </a>
      ) : (
        <span
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 font-mono text-[11px] text-[var(--ink-subtle)]"
          title="Update sourceUrl in src/data/portfolio.ts when ready"
        >
          <Code2 className="h-3.5 w-3.5" />
          {project.sourceNote ?? 'Repo link placeholder'}
        </span>
      )}
    </div>
  );
}

function FlagshipArchitecturePanel({ project }: { project: ProjectItem }) {
  const workflows = project.workflows ?? [];
  const [activeId, setActiveId] = useState(workflows[0]?.id ?? '');
  const activeWorkflow = workflows.find((w) => w.id === activeId) ?? workflows[0];

  if (!activeWorkflow) return null;

  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]/75 p-5 sm:p-6">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)]">
            System Workflow
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--accent)]">
            <Layers className="h-3.5 w-3.5" />
            Role-Scoped
          </span>
        </div>

        {/* Interactive Role Switcher */}
        <div
          role="tablist"
          aria-label="Application workflow views"
          className="mt-3.5 grid grid-cols-2 gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1"
        >
          {workflows.map((wf) => {
            const selected = wf.id === activeWorkflow.id;
            return (
              <button
                key={wf.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(wf.id)}
                className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  selected
                    ? 'bg-[var(--accent)] text-[#FAF8F5] shadow-xs dark:text-[#121210]'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                }`}
              >
                {wf.role}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorkflow.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="mt-5"
          >
            <p className="text-xs italic text-[var(--ink-muted)]">
              &ldquo;{activeWorkflow.tagline}&rdquo;
            </p>

            <ol className="mt-4 space-y-2.5">
              {activeWorkflow.steps.map((step, idx) => (
                <li
                  key={step.label}
                  className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--accent-soft)] font-mono text-[10px] font-semibold text-[var(--accent)]">
                    0{idx + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[var(--ink)]">{step.label}</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-[var(--ink-muted)]">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Shared Backend Engine Footer */}
      <div className="mt-5 border-t border-[var(--border)] pt-4">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[var(--ink-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5 text-[var(--accent)]" />
            Flask API + SQL
          </span>
          <ArrowRight className="h-3 w-3 text-[var(--ink-subtle)]" />
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
            Structured LLM Pipeline
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const flagship = projects.find((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 border-b border-[var(--border)] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
            01 / Selected Work
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
            Practical software, engineered <span className="italic">end to end.</span>
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
            From role-based web applications backed by relational SQL schemas to lightweight daily
            utilities powered by structured LLM outputs.
          </p>
        </div>

        {/* Flagship Card */}
        {flagship && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-card mt-12 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-[var(--ink-subtle)]">
                      PROJECT {flagship.index}
                    </span>
                    <StatusBadge project={flagship} />
                  </div>

                  <h3 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-[var(--ink)] sm:text-[2.15rem]">
                    {flagship.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[var(--ink-subtle)]">
                    {flagship.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-[15px]">
                    {flagship.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {flagship.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--ink-muted)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 border-t border-[var(--border)] pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {flagship.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--border)] bg-[var(--surface-muted)]/70 px-2.5 py-1 font-mono text-[11px] text-[var(--ink-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ProjectActions project={flagship} />
                </div>
              </div>

              <div className="lg:col-span-5">
                <FlagshipArchitecturePanel project={flagship} />
              </div>
            </div>
          </motion.article>
        )}

        {/* Secondary Projects Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondary.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="editorial-card flex flex-col justify-between rounded-2xl p-6 sm:p-7"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-[var(--ink-subtle)]">
                    PROJECT {project.index}
                  </span>
                  <StatusBadge project={project} />
                </div>

                <h3 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-[var(--ink)] sm:text-[1.75rem]">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] text-[var(--ink-subtle)]">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--ink-muted)] sm:text-[13px]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--border-strong)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 space-y-4 border-t border-[var(--border)] pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface-muted)]/70 px-2.5 py-1 font-mono text-[11px] text-[var(--ink-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ProjectActions project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
