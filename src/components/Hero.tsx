import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { profile } from '../data/portfolio';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--border)] pt-16 pb-16 sm:pt-24 sm:pb-24"
    >
      {/* Subtle radial editorial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[520px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--hero-glow) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Availability & Location Pill */}
          <div className="mb-7 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs text-[var(--ink-muted)] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="font-medium text-[var(--ink)]">{profile.availability}</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span className="inline-flex items-center gap-1 font-mono text-[11px]">
              <MapPin className="h-3 w-3 text-[var(--accent)]" />
              {profile.location}
            </span>
          </div>

          {/* Primary Editorial Headline */}
          <h1 className="max-w-3xl font-serif text-[2.85rem] leading-[1.03] tracking-[-0.02em] text-[var(--ink)] sm:text-[4.15rem] lg:text-[4.85rem]">
            Full-stack software built for{' '}
            <span className="italic text-[var(--accent)]">clarity,</span> not clutter.
          </h1>

          {/* Positioning Statement */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg sm:leading-relaxed">
            I&apos;m <strong className="font-semibold text-[var(--ink)]">{profile.name}</strong>, a{' '}
            <strong className="font-semibold text-[var(--ink)]">{profile.role}</strong> building
            reliable web applications with{' '}
            <span className="text-[var(--ink)]">Python, React, SQL, and REST APIs</span>—and
            integrating practical LLM features that solve real user problems without bloated UI.
          </p>

          {/* Primary CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#FAF8F5] shadow-xs transition-all hover:bg-[var(--accent-hover)] dark:text-[#121210]"
            >
              Explore Projects
              <ArrowDownRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get in Touch
            </a>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-3 font-mono text-xs font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
            >
              github.com/praneet-r
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Editorial Fact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3"
        >
          <div className="bg-[var(--surface)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)]">
              Core Engineering
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--ink)]">
              Python · Flask &amp; FastAPI · React · SQL
            </p>
            <p className="mt-1 text-xs text-[var(--ink-muted)]">
              RESTful architectures, auth flows &amp; clean client state
            </p>
          </div>

          <div className="bg-[var(--surface)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)]">
              Education
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--ink)]">
              {profile.education.institution} — B.S. Data Science
            </p>
            <p className="mt-1 text-xs text-[var(--ink-muted)]">
              {profile.education.graduation} · CGPA {profile.education.cgpa}
            </p>
          </div>

          <div className="bg-[var(--surface)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)]">
              Ideal Fit
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--ink)]">
              Full-Stack &amp; Product Engineering
            </p>
            <p className="mt-1 text-xs text-[var(--ink-muted)]">
              Remote-first startups, dev-tools, ed-tech &amp; wellness tech
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
