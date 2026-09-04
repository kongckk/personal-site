import { site } from "@/content/site";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" heading={site.contact.heading} className="bg-surface/60">
      <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        {site.contact.blurb}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.contact.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <MailIcon />
          {site.contact.email}
        </a>
        <a
          href={site.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink/20 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <LinkedInIcon />
          {site.contact.linkedinLabel}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </Section>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M3 4a2 2 0 0 0-2 2v.109l8 4.667 8-4.667V6a2 2 0 0 0-2-2H3Z" />
      <path d="M19 8.182l-7.557 4.408a2 2 0 0 1-1.886 0L2 8.182V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.182Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
