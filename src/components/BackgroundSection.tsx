import { profile } from '../data/portfolio';

export function BackgroundSection() {
  return (
    <section
      id="background"
      className="scroll-mt-20 border-t border-[var(--border)] py-14 lg:py-16"
    >
      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-muted)]">
        Background
      </h2>

      <div className="mt-6 divide-y divide-[var(--border)]">
        {/* Education */}
        <div className="grid gap-2 pb-7 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
          <div className="font-mono text-xs text-[var(--ink-muted)]">Education</div>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-[15px] font-semibold text-[var(--ink)]">
                {profile.education.institution}
              </h3>
              <span className="font-mono text-xs text-[var(--ink-muted)]">
                {profile.education.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-[var(--ink-secondary)]">
              {profile.education.degree} · CGPA {profile.education.cgpa}
            </p>
          </div>
        </div>

        {/* Indie 2D Game Dev Side Craft */}
        <div className="grid gap-2 pt-7 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
          <div className="font-mono text-xs text-[var(--ink-muted)]">Side Craft</div>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-[15px] font-semibold text-[var(--ink)]">
                Independent 2D Game Development
              </h3>
              <span className="font-mono text-xs text-[var(--ink-muted)]">
                Godot Engine · JavaScript
              </span>
            </div>
            <p className="mt-2 max-w-xl text-sm leading-[1.68] text-[var(--ink-secondary)]">
              Outside web development, I build small 2D games in Godot and JavaScript. Working on
              game loops, state machines, and responsive player feedback carries directly into how I
              structure client state and user interactions in web apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
