import { skillGroups } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-[var(--border)] py-14 lg:py-16">
      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-muted)]">
        Skills
      </h2>

      <div className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="grid gap-2 py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-baseline sm:gap-6"
          >
            <h3 className="font-mono text-xs font-medium text-[var(--ink-muted)]">
              {group.category}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--ink)]">{group.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
