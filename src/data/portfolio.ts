/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ============================================================================
 * Swap your email, resume PDF path, and project demo/repo URLs right here.
 * Every section of the site reads from this file automatically.
 *
 * QUICK CHECKLIST BEFORE SHARING:
 *   1. EMAIL: Update `profile.email` below with your preferred contact email.
 *   2. RESUME: Drop your PDF into `public/Praneet_R_Resume.pdf`, then set
 *      `profile.resumeUrl` to `"/Praneet_R_Resume.pdf"` and
 *      `profile.resumeReady` to `true`.
 *   3. PROJECTS: Replace any `null` in `liveDemoUrl` / `sourceUrl` with your
 *      live URLs as you finish packaging each project.
 * ============================================================================
 */

export interface ProjectArchitectureStep {
  label: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  status: 'Completed Flagship' | 'In Progress' | 'Packaging Utility';
  statusTone: 'completed' | 'active' | 'utility';
  featured?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Set to your live URL (e.g. "https://demo.example.com") when ready, or null to show a clean placeholder pill. */
  liveDemoUrl: string | null;
  liveDemoNote?: string;
  /** Set to your GitHub repo URL (e.g. "https://github.com/praneet-r/repo") when ready, or null for placeholder. */
  sourceUrl: string | null;
  sourceNote?: string;
  /** Optional workflow tabs for the flagship architectural breakdown. */
  workflows?: {
    id: string;
    role: string;
    tagline: string;
    steps: ProjectArchitectureStep[];
  }[];
}

export interface SkillGroup {
  category: string;
  description: string;
  items: { name: string; primary?: boolean }[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  body: string;
}

export const profile = {
  name: 'Praneet R',
  monogram: 'PR',
  role: 'Full-Stack Software Developer',
  location: 'Bengaluru, India',
  availability: 'Open to Remote Roles',

  // TODO: Replace with your preferred public contact email address.
  email: 'hello@praneetr.dev',
  emailIsPlaceholder: true,

  // Pre-filled from your authenticated GitHub CLI account.
  githubUrl: 'https://github.com/praneet-r',
  githubHandle: '@praneet-r',

  // TODO: Place your resume PDF in `public/Praneet_R_Resume.pdf`, then set:
  //   resumeUrl: '/Praneet_R_Resume.pdf',
  //   resumeReady: true,
  resumeUrl: null as string | null,
  resumeReady: false,

  education: {
    degree: 'B.S. in Data Science and Applications',
    institution: 'IIT Madras',
    graduation: 'Graduated Sept 2026',
    cgpa: '8.06 / 10',
  },

  targetRoles: [
    'Full-Stack Developer',
    'Product Engineer',
    'Software Developer',
  ],

  targetTeams: [
    'Remote-first startups',
    'Early-stage product teams',
    'Ed-tech & dev-tools',
    'Human-centric & wellness tech',
  ],
};

export const projects: ProjectItem[] = [
  {
    id: 'ai-hiring-platform',
    index: '01',
    title: 'AI-Powered Hiring & Recruitment Platform',
    subtitle: 'Full-Stack Web Application · Role-Based Workflows & Structured LLM Matching',
    status: 'Completed Flagship',
    statusTone: 'completed',
    featured: true,
    summary:
      'An end-to-end hiring platform designed around clean, distinct journeys for candidates and hiring managers—combining a Python/Flask backend, relational SQL modeling, and structured LLM pipelines to eliminate resume screening noise.',
    highlights: [
      'Role-based authentication separating job seeker and hiring manager dashboards, permissions, and application pipelines.',
      'RESTful Flask API backed by normalized SQL tables for job postings, candidate profiles, applications, and screening states.',
      'Practical LLM API integration generating structured candidate-to-role match scores and concise, scannable resume summaries.',
      'Clean JavaScript frontend focused on fast review loops rather than cluttered enterprise HR forms.',
    ],
    stack: ['Python', 'Flask', 'JavaScript (ES6+)', 'SQL', 'REST APIs', 'LLM APIs', 'Role-Based Auth'],
    // TODO: Add your deployed live demo URL here when ready (e.g. 'https://hiring-demo.pages.dev')
    liveDemoUrl: null,
    liveDemoNote: 'Live demo packaging',
    // TODO: Add your GitHub repository URL here when ready (e.g. 'https://github.com/praneet-r/hiring-platform')
    sourceUrl: null,
    sourceNote: 'Repo link coming soon',
    workflows: [
      {
        id: 'hiring-manager',
        role: 'Hiring Manager Flow',
        tagline: 'Review signal, not 40-page resume PDFs.',
        steps: [
          { label: 'Post Role & Criteria', detail: 'Structured requirements stored in SQL' },
          { label: 'LLM Resume Digest', detail: 'Automated skills extraction & concise summary' },
          { label: 'Ranked Candidate Queue', detail: 'Match rationale + stage progression API' },
        ],
      },
      {
        id: 'job-seeker',
        role: 'Job Seeker Flow',
        tagline: 'Transparent status from upload to shortlist.',
        steps: [
          { label: 'Role-Scoped Auth', detail: 'Dedicated candidate session & profile state' },
          { label: 'One-Pass Apply', detail: 'Resume parsing paired with targeted openings' },
          { label: 'Live Application Tracker', detail: 'Clear pipeline updates without dark patterns' },
        ],
      },
    ],
  },
  {
    id: 'cognitive-reflection-companion',
    index: '02',
    title: 'Cognitive Reflection & Habit Companion',
    subtitle: 'Psychology-Informed Full-Stack Web App · FastAPI & React',
    status: 'In Progress',
    statusTone: 'active',
    summary:
      'A calm daily web companion blending cognitive behavioral reflection principles with schema-constrained LLM responses to help people untangle unhelpful thought loops and sustain lightweight reflection habits.',
    highlights: [
      'Typed FastAPI backend orchestrating strict JSON/structured LLM prompts so responses stay grounded, consistent, and gentle.',
      'React frontend designed to minimize cognitive load—quiet typography, low-friction daily check-ins, and clear habit timelines.',
      'Relational persistence for reflection entries, reframing history, and non-punitive streak tracking.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL / SQLite', 'Structured LLM Outputs'],
    // TODO: Add live demo URL once deployed
    liveDemoUrl: null,
    liveDemoNote: 'In active development',
    // TODO: Add GitHub repository URL once public
    sourceUrl: null,
    sourceNote: 'Repo link coming soon',
  },
  {
    id: 'voice-workflow-utility',
    index: '03',
    title: 'Voice-to-Text & Workflow Utility',
    subtitle: 'Lightweight Python Desktop & Browser Automation Tooling',
    status: 'Packaging Utility',
    statusTone: 'utility',
    summary:
      'A fast, unobtrusive productivity utility built to capture raw spoken thoughts via global hotkeys, transcribe them accurately, and apply lightweight LLM post-processing for clean, ready-to-paste writing.',
    highlights: [
      'Hotkey-triggered audio capture and transcription built in Python for near-instant thought-to-text capture.',
      'Configurable LLM cleanup pass that removes filler words and fixes punctuation while preserving natural tone.',
      'Playwright-powered browser workflow helpers to bridge repetitive web tasks without heavy extensions.',
    ],
    stack: ['Python', 'Playwright', 'LLM APIs', 'Desktop Hotkeys', 'CLI & Automation'],
    // TODO: Add walkthrough or release link when packaged
    liveDemoUrl: null,
    liveDemoNote: 'Release packaging soon',
    // TODO: Add GitHub repository URL when ready
    sourceUrl: null,
    sourceNote: 'Repo link coming soon',
  },
];

export const principles: PrincipleItem[] = [
  {
    number: '01',
    title: 'Full-stack fundamentals first',
    body: 'Clean relational schemas, predictable REST endpoints, and responsive React interfaces. Good architecture makes features easy to reason about six months later.',
  },
  {
    number: '02',
    title: 'Practical AI, zero hype',
    body: 'I treat LLMs as reliable product primitives—using structured outputs, summarization, and classification to remove real friction rather than bolting on gimmicky chatboxes.',
  },
  {
    number: '03',
    title: 'Software that respects attention',
    body: 'Influenced by human psychology and calm product design. Every click, state transition, and copy choice should reduce cognitive friction instead of competing for eyeballs.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Core languages I reach for daily across backend services, interfaces, and data modeling.',
    items: [
      { name: 'Python', primary: true },
      { name: 'JavaScript (ES6+)', primary: true },
      { name: 'SQL', primary: true },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    category: 'Backend & Web',
    description: 'End-to-end web engineering from API contracts and auth flows to responsive client state.',
    items: [
      { name: 'Flask', primary: true },
      { name: 'FastAPI', primary: true },
      { name: 'React', primary: true },
      { name: 'REST APIs', primary: true },
      { name: 'PostgreSQL' },
      { name: 'SQLite' },
    ],
  },
  {
    category: 'AI & Tools',
    description: 'Applied LLM integration, shipping pipelines, and indie interactive craft on the side.',
    items: [
      { name: 'LLM API Integration (Gemini / OpenAI)', primary: true },
      { name: 'Structured Outputs', primary: true },
      { name: 'Git & GitHub' },
      { name: 'Cloudflare Pages' },
      { name: 'Godot Engine' },
    ],
  },
];
