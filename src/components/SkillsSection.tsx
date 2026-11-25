import { motion } from 'motion/react';
import { skillGroups } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-[var(--border)] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
              03 / Technical Toolkit
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
              Focused stack, <span className="italic">zero bloat.</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[var(--ink-subtle)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Primary daily stack
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="editorial-card flex flex-col justify-between rounded-2xl p-6"
            >
              <div>
                <h3 className="font-serif text-2xl tracking-tight text-[var(--ink)]">
                  {group.category}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-muted)]">
                  {group.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                        skill.primary
                          ? 'border-[var(--accent-border)] bg-[var(--accent-soft)]/70 text-[var(--ink)]'
                          : 'border-[var(--border)] bg-[var(--surface-muted)]/60 text-[var(--ink-muted)]'
                      }`}
                    >
                      {skill.primary && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      )}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
