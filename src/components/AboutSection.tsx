import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 pb-14 lg:pb-16">
      {/* Compact profile header shown only on mobile/tablet where sidebar is hidden */}
      <div className="mb-8 border-b border-[var(--border)] pb-7 lg:hidden">
        <h1 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--ink)]">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm font-medium text-[var(--ink-secondary)]">{profile.role}</p>
        <p className="mt-2 inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          {profile.location} · {profile.availability}
        </p>
      </div>

      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-muted)]">
        About
      </h2>

      <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-[1.72] text-[var(--ink-secondary)]">
        <p>
          I&apos;m a full-stack software developer focused on web applications built with{' '}
          <span className="font-medium text-[var(--ink)]">
            Python (Flask, FastAPI), JavaScript / React, SQL databases, and REST APIs
          </span>
          . Alongside core web engineering, I integrate LLM APIs into products where structured
          outputs, matching, or summarization genuinely save users time.
        </p>

        <p>
          I pay close attention to human psychology and clean UX—preferring straightforward,
          responsive tools that respect the user&apos;s focus over bloated corporate dashboards. I
          graduated from <span className="font-medium text-[var(--ink)]">IIT Madras</span> (B.S. in
          Data Science and Applications, Sept 2026) and also build small 2D games on the side with
          Godot Engine and JavaScript.
        </p>
      </div>

      {/* Direct Action Row */}
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-[#0D0F12]"
        >
          View Projects
          <ArrowDown className="h-3.5 w-3.5" />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Get in Touch
        </a>

        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2 py-2 font-mono text-xs text-[var(--ink-muted)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
        >
          GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
