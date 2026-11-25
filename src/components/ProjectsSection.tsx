import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, type ProjectItem } from '../data/portfolio';

function StatusTag({ project }: { project: ProjectItem }) {
  if (project.statusTone === 'completed') {
    return (
      <span
        className="inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px] font-medium"
        style={{
          backgroundColor: 'var(--status-done-bg)',
          color: 'var(--status-done-text)',
          borderColor: 'var(--status-done-border)',
        }}
      >
        {project.status}
      </span>
    );
  }

  if (project.statusTone === 'wip') {
    return (
      <span
        className="inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px] font-medium"
        style={{
          backgroundColor: 'var(--status-wip-bg)',
          color: 'var(--status-wip-text)',
          borderColor: 'var(--status-wip-border)',
        }}
      >
        {project.status}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded border border-[var(--border)] bg-[var(--bg-subtle)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--ink-muted)]">
      {project.status}
    </span>
  );
}

function WorkflowTable({ project }: { project: ProjectItem }) {
  const workflows = project.workflows ?? [];
  const [activeId, setActiveId] = useState(workflows[0]?.id ?? '');
  const active = workflows.find((w) => w.id === activeId) ?? workflows[0];

  if (!active) return null;

  return (
    <div className="mt-5 overflow-hidden rounded-md border border-[var(--border)] bg-[var(--bg-subtle)]">
      <div
        role="tablist"
        aria-label="Application workflows"
        className="flex items-center justify-between border-b border-[var(--border)] px-3.5"
      >
        <div className="flex items-center gap-4">
          {workflows.map((wf) => {
            const selected = wf.id === active.id;
            return (
              <button
                key={wf.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(wf.id)}
                className={`-mb-px cursor-pointer border-b-2 py-2.5 text-xs font-medium transition-colors ${
                  selected
                    ? 'border-[var(--accent)] text-[var(--ink)]'
                    : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]'
                }`}
              >
                {wf.label}
              </button>
            );
          })}
        </div>
        <span className="hidden font-mono text-[11px] text-[var(--ink-muted)] sm:inline">
          Workflow Architecture
        </span>
      </div>

      <div className="divide-y divide-[var(--border)] bg-[var(--bg)]">
        {active.steps.map((row) => (
          <div
            key={row.step}
            className="grid gap-1 px-3.5 py-2.5 text-xs sm:grid-cols-[36px_minmax(0,1fr)_auto] sm:items-center sm:gap-3"
          >
            <span className="font-mono text-[11px] text-[var(--ink-muted)]">{row.step}</span>
            <span className="text-[var(--ink-secondary)]">{row.action}</span>
            <span className="font-mono text-[11px] text-[var(--accent)]">{row.layer}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: ProjectItem }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs">
      {project.liveDemoUrl ? (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-[var(--accent)] underline decoration-[var(--accent-border)] underline-offset-4 hover:decoration-[var(--accent)]"
        >
          Live demo
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span
          className="text-[var(--ink-muted)]"
          title="Set liveDemoUrl in src/data/portfolio.ts when ready"
        >
          Demo: {project.liveDemoNote ?? 'Coming soon'}
        </span>
      )}

      {project.sourceUrl ? (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-[var(--ink)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
        >
          Source code
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span
          className="text-[var(--ink-muted)]"
          title="Set sourceUrl in src/data/portfolio.ts when ready"
        >
          Source: {project.sourceNote ?? 'Pending'}
        </span>
      )}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-[var(--border)] py-14 lg:py-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-muted)]">
          Projects
        </h2>
        <span className="font-mono text-xs text-[var(--ink-muted)]">
          {projects.length} selected
        </span>
      </div>

      <div className="mt-6 divide-y divide-[var(--border)]">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`${index === 0 ? 'pb-9' : 'py-9'} ${
              index === projects.length - 1 ? 'pb-0' : ''
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-[18px] font-semibold tracking-[-0.015em] text-[var(--ink)]">
                {project.title}
              </h3>
              <StatusTag project={project} />
            </div>

            <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.68] text-[var(--ink-secondary)]">
              {project.summary}
            </p>

            <ul className="mt-4 max-w-2xl space-y-1.5 text-[13.5px] leading-relaxed text-[var(--ink-secondary)]">
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

            {project.workflows && <WorkflowTable project={project} />}

            <p className="mt-4 font-mono text-xs text-[var(--ink-muted)]">
              {project.stack.join(' · ')}
            </p>

            <ProjectLinks project={project} />
          </article>
        ))}
      </div>
    </section>
  );
}
