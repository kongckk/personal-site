/**
 * Site content — edit this file to update copy across the portfolio.
 * Strings marked [PLACEHOLDER] are ready to replace with your real details.
 */

export const site = {
  name: "Kong",
  title: "Kong — Ops & Finance",
  description:
    "Personal portfolio of Kong — operations and finance professional focused on clarity, process, and outcomes.",
  tagline: "Ops & Finance",
  /** [PLACEHOLDER] Short positioning line under the name */
  heroSubtitle:
    "[PLACEHOLDER] Helping teams run smoother operations and clearer financial decisions.",
  /** [PLACEHOLDER] Optional location / availability line */
  location: "[PLACEHOLDER] Based in Singapore · Open to opportunities",

  about: {
    heading: "About",
    paragraphs: [
      "[PLACEHOLDER] I work at the intersection of operations and finance — turning messy day-to-day work into reliable processes, accurate reporting, and decisions people can trust.",
      "[PLACEHOLDER] I care about clean handoffs, measurable outcomes, and documentation that actually gets used. Whether it’s streamlining a workflow or closing the books with fewer surprises, I aim for calm and clarity.",
    ],
  },

  experience: {
    heading: "Experience",
    roles: [
      {
        company: "[PLACEHOLDER] Company Name",
        title: "Operations Manager",
        period: "2023 — Present",
        location: "Singapore",
        bullets: [
          "[PLACEHOLDER] Owned end-to-end ops for core workflows, reducing cycle time and improving on-time delivery.",
          "[PLACEHOLDER] Partnered with finance on forecasting, vendor management, and monthly performance reviews.",
          "[PLACEHOLDER] Introduced lightweight process documentation and metrics dashboards used by leadership.",
        ],
      },
      {
        company: "[PLACEHOLDER] Previous Company",
        title: "Finance & Operations Analyst",
        period: "2021 — 2023",
        location: "Singapore",
        bullets: [
          "[PLACEHOLDER] Built monthly close checklists and reconciliations that cut close time and error rates.",
          "[PLACEHOLDER] Supported budgeting, expense controls, and variance analysis for ops leadership.",
        ],
      },
      {
        company: "[PLACEHOLDER] Earlier Role",
        title: "Operations Coordinator",
        period: "2019 — 2021",
        location: "Singapore",
        bullets: [
          "[PLACEHOLDER] Coordinated cross-functional handoffs and tracked SLAs across vendors and internal teams.",
          "[PLACEHOLDER] Improved intake and triage so high-priority work was clearer and faster to resolve.",
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
      "[PLACEHOLDER] Interested in working together or just saying hello? Reach out anytime.",
    /** [PLACEHOLDER] Replace with your real email */
    email: "kong@example.com",
    /** [PLACEHOLDER] Replace with your LinkedIn profile URL */
    linkedin: "https://www.linkedin.com/in/your-profile",
    linkedinLabel: "LinkedIn",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  footer: {
    note: "Built with Next.js · Ready for Vercel",
  },
} as const;

export type SiteContent = typeof site;
