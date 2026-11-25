/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ============================================================================
 * Update your email, resume PDF link, and project demo/repo URLs here.
 *
 * QUICK CHECKLIST:
 *   1. EMAIL: Update `profile.email` and set `profile.emailIsPlaceholder = false`.
 *   2. RESUME: Add `public/Praneet_R_Resume.pdf`, then set:
 *        resumeUrl: '/Praneet_R_Resume.pdf',
 *        resumeReady: true,
 *   3. PROJECTS: Replace `null` in `liveDemoUrl` / `sourceUrl` with your live
 *      URLs once each project is packaged and deployed.
 * ============================================================================
 */

export interface WorkflowStep {
  step: string;
  action: string;
  layer: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Utility';
  statusTone: 'completed' | 'wip' | 'neutral';
  summary: string;
  details: string[];
  stack: string[];
  /** Replace with live URL (e.g. 'https://app.example.com') when ready. */
  liveDemoUrl: string | null;
  liveDemoNote?: string;
  /** Replace with GitHub repo URL (e.g. 'https://github.com/praneet-r/repo') when ready. */
  sourceUrl: string | null;
  sourceNote?: string;
  /** Optional role-based workflow table for the flagship project. */
  workflows?: {
    id: string;
    label: string;
    steps: WorkflowStep[];
  }[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const profile = {
  name: 'Praneet R',
  role: 'Full-Stack Software Developer',
  location: 'Bengaluru, India',
  availability: 'Open to Remote',
  shortBio:
    'I build full-stack web applications with Python, React, and SQL, alongside practical LLM API integrations and lightweight workflow tools.',

  // TODO: Replace with your preferred contact email address.
  email: 'hello@praneetr.dev',
  emailIsPlaceholder: true,

  // Pre-filled from your GitHub account.
  githubUrl: 'https://github.com/praneet-r',
  githubHandle: 'praneet-r',

  // TODO: Drop your PDF in `public/Praneet_R_Resume.pdf`, then update below:
  //   resumeUrl: '/Praneet_R_Resume.pdf',
  //   resumeReady: true,
  resumeUrl: null as string | null,
  resumeReady: false,

  education: {
    institution: 'IIT Madras',
    degree: 'B.S. in Data Science and Applications',
    period: 'Graduated Sept 2026',
    cgpa: '8.06 / 10',
  },

  targetRoles: ['Full-Stack Developer', 'Product Engineer', 'Software Developer'],
  targetDomains: [
    'Remote-first startups',
    'Early-stage product teams',
    'Ed-tech',
    'Dev-tools',
    'Human-centric & wellness tech',
  ],
};

export const projects: ProjectItem[] = [
  {
    id: 'ai-hiring-platform',
    title: 'AI-Powered Hiring & Recruitment Platform',
    status: 'Completed',
    statusTone: 'completed',
    summary:
      'A full-stack recruitment web app with separate role-based workflows for job seekers and hiring managers. Built with Python, Flask, JavaScript, and SQL, using LLM APIs to summarize resumes and match candidates against job criteria.',
    details: [
      'Role-based authentication isolating job seeker and hiring manager views, permissions, and state transitions.',
      'Flask REST API over normalized SQL tables for job postings, candidate profiles, applications, and shortlist stages.',
      'LLM API pipeline returning structured candidate-to-job match scores and concise resume summaries for faster screening.',
      'Clean JavaScript frontend designed around direct review workflows instead of dense multi-page HR forms.',
    ],
    stack: ['Python', 'Flask', 'JavaScript (ES6+)', 'SQL', 'REST APIs', 'LLM APIs'],
    // TODO: Add your deployed demo URL when ready
    liveDemoUrl: null,
    liveDemoNote: 'Live demo being packaged',
    // TODO: Add your GitHub repo URL when ready
    sourceUrl: null,
    sourceNote: 'Repository link pending',
    workflows: [
      {
        id: 'hiring-manager',
        label: 'Hiring Manager',
        steps: [
          {
            step: '01',
            action: 'Publish job requirements & evaluation criteria',
            layer: 'Flask API → SQL',
          },
          {
            step: '02',
            action: 'Generate structured resume summary & match score',
            layer: 'LLM API Pipeline',
          },
          {
            step: '03',
            action: 'Review ranked applicants & update hiring stage',
            layer: 'Role-Scoped UI',
          },
        ],
      },
      {
        id: 'job-seeker',
        label: 'Job Seeker',
        steps: [
          {
            step: '01',
            action: 'Sign in to candidate workspace & upload profile',
            layer: 'Role-Based Auth',
          },
          {
            step: '02',
            action: 'Browse open listings & submit applications',
            layer: 'Flask REST API',
          },
          {
            step: '03',
            action: 'Track application progress across review stages',
            layer: 'SQL State View',
          },
        ],
      },
    ],
  },
  {
    id: 'cognitive-reflection-companion',
    title: 'Cognitive Reflection & Habit Companion',
    status: 'In Progress',
    statusTone: 'wip',
    summary:
      'A full-stack web application combining cognitive psychology frameworks with schema-constrained LLM outputs to help users examine thought patterns and maintain daily reflection habits.',
    details: [
      'FastAPI backend using structured LLM outputs to keep reflection prompts consistent, specific, and grounded.',
      'React frontend focused on low friction and calm readability for short daily check-ins.',
      'Relational storage for entries, reframing history, and simple habit tracking.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'JavaScript (ES6+)', 'SQL', 'Structured Outputs'],
    // TODO: Add your live demo URL when deployed
    liveDemoUrl: null,
    liveDemoNote: 'In active development',
    // TODO: Add your GitHub repo URL when public
    sourceUrl: null,
    sourceNote: 'Repository link pending',
  },
  {
    id: 'voice-workflow-utility',
    title: 'Voice-to-Text & Workflow Utility',
    status: 'Utility',
    statusTone: 'neutral',
    summary:
      'Lightweight Python desktop and browser utilities for hotkey-triggered voice transcription, followed by an LLM cleanup pass that turns raw speech into clean, ready-to-use text.',
    details: [
      'Global hotkey capture in Python for fast voice-to-text transcription without switching windows.',
      'Post-processing step via LLM APIs to clean filler words and punctuation while keeping natural phrasing.',
      'Playwright helpers for automating repetitive browser steps without heavy browser extensions.',
    ],
    stack: ['Python', 'Playwright', 'LLM APIs'],
    // TODO: Add walkthrough or release link when ready
    liveDemoUrl: null,
    liveDemoNote: 'Packaging release notes',
    // TODO: Add your GitHub repo URL when public
    sourceUrl: null,
    sourceNote: 'Repository link pending',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & Web',
    items: ['Flask', 'FastAPI', 'React', 'REST APIs', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'AI & Tools',
    items: [
      'LLM API Integration (Gemini / OpenAI)',
      'Structured Outputs',
      'Git',
      'GitHub',
      'Cloudflare Pages',
      'Godot Engine',
    ],
  },
];
