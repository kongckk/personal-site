/**
 * Site content — edit this file to update copy across the portfolio.

 */

export const site = {
  name: "Kong",
  title: "Kong — Ops & Finance",
  description:
    "Personal portfolio of Kong — operations and finance professional focused on clarity, process, and outcomes.",
  tagline: "Ops & Finance",
  /** Short positioning line under the name */
  heroSubtitle:
    "Helping teams run smoother operations and clearer financial decisions.",
  /** Optional location / availability line */
  location: "Based in Singapore · Open to opportunities",

  about: {
    heading: "About",
    paragraphs: [
      "I work at the intersection of operations and finance — turning messy day-to-day work into reliable processes, accurate reporting, and decisions people can trust.",
      "I care about clean handoffs, measurable outcomes, and documentation that actually gets used. Whether it’s streamlining a workflow or closing the books with fewer surprises, I aim for calm and clarity.",
    ],
  },

  experience: {
    heading: "Experience",
    roles: [
      {
        company: "Company Name",
        title: "Operations Manager",
        period: "2023 — Present",
        location: "Singapore",
        bullets: [
          "Owned end-to-end ops for core workflows, reducing cycle time and improving on-time delivery.",
          "Partnered with finance on forecasting, vendor management, and monthly performance reviews.",
          "Introduced lightweight process documentation and metrics dashboards used by leadership.",
        ],
      },
      {
        company: "Previous Company",
        title: "Finance & Operations Analyst",
        period: "2021 — 2023",
        location: "Singapore",
        bullets: [
          "Built monthly close checklists and reconciliations that cut close time and error rates.",
          "Supported budgeting, expense controls, and variance analysis for ops leadership.",
        ],
      },
      {
        company: "Earlier Role",
        title: "Operations Coordinator",
        period: "2019 — 2021",
        location: "Singapore",
        bullets: [
          "Coordinated cross-functional handoffs and tracked SLAs across vendors and internal teams.",
          "Improved intake and triage so high-priority work was clearer and faster to resolve.",
        ],
      },
    ],
  },

  skills: {
    heading: "Skills",
    items: [
      "Operations management",
      "Process design",
      "Financial planning & analysis",
      "Budgeting & forecasting",
      "Vendor management",
      "SOPs & documentation",
      "KPI dashboards",
      "Cross-functional coordination",
      "Excel / Google Sheets",
      "Stakeholder communication",
    ],
  },

  contact: {
    heading: "Contact",
    blurb:
      "Interested in working together or just saying hello? Reach out anytime.",
    email: "hello@kong.dev",
    linkedin: "https://www.linkedin.com/in/kongckk",
    linkedinLabel: "LinkedIn",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  footer: {
    note: "Built with Next.js · Deployed on Vercel",
  },
} as const;

export type SiteContent = typeof site;
