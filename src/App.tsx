import { useCallback, useEffect, useState } from 'react';
import { Info, X } from 'lucide-react';
import { AboutSection } from './components/AboutSection';
import { BackgroundSection } from './components/BackgroundSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileHeader } from './components/MobileHeader';
import { ProjectsSection } from './components/ProjectsSection';
import { Sidebar, navItems } from './components/Sidebar';
import { SkillsSection } from './components/SkillsSection';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('about');
  const [resumeToastOpen, setResumeToastOpen] = useState(false);

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleResumePlaceholderClick = useCallback(() => {
    setResumeToastOpen(true);
    window.setTimeout(() => setResumeToastOpen(false), 4500);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <MobileHeader
        theme={theme}
        onToggleTheme={toggleTheme}
        onResumePlaceholderClick={handleResumePlaceholderClick}
      />

      <div className="mx-auto max-w-[1080px] px-5 sm:px-8 lg:grid lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-14">
        <Sidebar
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggleTheme}
          onResumePlaceholderClick={handleResumePlaceholderClick}
        />

        <main className="py-10 lg:py-14">
          <AboutSection />
          <ProjectsSection />
          <BackgroundSection />
          <SkillsSection />
          <ContactSection onResumePlaceholderClick={handleResumePlaceholderClick} />
          <Footer />
        </main>
      </div>

      {/* Unobtrusive placeholder hint when clicking Resume before PDF is added */}
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
