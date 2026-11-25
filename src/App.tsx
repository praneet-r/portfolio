import { useCallback, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from 'motion/react';
import { Info, X } from 'lucide-react';
import { ApproachSection } from './components/ApproachSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [resumeToastOpen, setResumeToastOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  const handleResumePlaceholderClick = useCallback(() => {
    setResumeToastOpen(true);
    window.setTimeout(() => setResumeToastOpen(false), 4500);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="paper-grain relative min-h-screen bg-[var(--bg)] text-[var(--ink)]">
        {/* Scroll Progress Hairline */}
        <motion.div
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 h-[2px] origin-left bg-[var(--accent)]"
          style={{ scaleX }}
        />

        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onResumePlaceholderClick={handleResumePlaceholderClick}
        />

        <main>
          <Hero />
          <ProjectsSection />
          <ApproachSection />
          <SkillsSection />
          <ContactSection onResumePlaceholderClick={handleResumePlaceholderClick} />
        </main>

        <Footer />

        {/* Friendly toast when clicking the Resume PDF placeholder */}
        <AnimatePresence>
          {resumeToastOpen && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.2 }}
              className="fixed right-5 bottom-5 z-50 flex max-w-sm items-start gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-4 text-xs shadow-lg"
            >
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
              <div className="space-y-1 text-[var(--ink-muted)]">
                <p className="font-semibold text-[var(--ink)]">Resume PDF placeholder</p>
                <p className="leading-relaxed">
                  Drop your PDF into{' '}
                  <code className="rounded bg-[var(--surface-muted)] px-1 py-0.5 font-mono text-[11px] text-[var(--ink)]">
                    public/Praneet_R_Resume.pdf
                  </code>{' '}
                  and toggle <code className="font-mono text-[11px]">resumeReady: true</code> in{' '}
                  <code className="font-mono text-[11px]">src/data/portfolio.ts</code>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setResumeToastOpen(false)}
                aria-label="Dismiss notification"
                className="cursor-pointer rounded-md p-1 text-[var(--ink-subtle)] hover:text-[var(--ink)]"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
