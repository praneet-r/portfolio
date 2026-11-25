import { Gamepad2, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { principles, profile } from '../data/portfolio';

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-20 border-b border-[var(--border)] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
            02 / Approach &amp; Background
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
            Product engineering shaped by{' '}
            <span className="italic">human psychology</span> &amp; restraint.
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
            I care about how software feels to live inside every day—fast endpoints, predictable
            state, and interfaces that stay out of the user&apos;s way.
          </p>
        </div>

        {/* 3 Engineering Principles */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {principles.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.4, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="editorial-card rounded-2xl p-6"
            >
              <span className="font-mono text-xs font-medium text-[var(--accent)]">
                {item.number}
              </span>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)]">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Education & Indie Game Dev Spotlight */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-card flex flex-col justify-between rounded-2xl p-6 sm:p-7"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)]">
                  <GraduationCap className="h-4 w-4 text-[var(--accent)]" />
                  Academic Foundation
                </span>
                <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[var(--accent)]">
                  CGPA {profile.education.cgpa}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-2xl tracking-tight text-[var(--ink)]">
                {profile.education.institution}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--ink)]">
                {profile.education.degree}
              </p>
              <p className="mt-1 font-mono text-xs text-[var(--ink-subtle)]">
                {profile.education.graduation}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)]">
                Strong grounding in Python software development, database design, application
                architecture, and analytical problem-solving—applied directly to shipping full-stack
                web products.
              </p>
            </div>
          </motion.div>

          {/* Indie 2D Game Dev Side Craft */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-card flex flex-col justify-between rounded-2xl bg-[var(--surface-muted)]/55 p-6 sm:p-7"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)]">
                  <Gamepad2 className="h-4 w-4 text-[var(--accent)]" />
                  Side Craft
                </span>
                <span className="font-mono text-[11px] text-[var(--ink-subtle)]">
                  Godot Engine · JS
                </span>
              </div>

              <h3 className="mt-4 font-serif text-2xl tracking-tight text-[var(--ink)]">
                Independent 2D Game Development
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                Outside web engineering, I build small 2D games in Godot and JavaScript. Designing
                frame-tight loops, clean state machines, and immediate player feedback has shaped
                how I think about front-end state management and responsive, intuitive UX in every
                web app I ship.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
