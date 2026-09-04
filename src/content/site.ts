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
    { label: "Agenda", href: "#agenda" },
    { label: "About", href: "#about" },
    { label: "Finance news", href: "#finance-news" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  footer: {
    note: "Built with Next.js · Ready for Vercel",
  },
} as const;

export type SiteContent = typeof site;
