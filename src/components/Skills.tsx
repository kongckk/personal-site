import { site } from "@/content/site";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" heading={site.skills.heading}>
      <ul className="flex flex-wrap gap-2.5" aria-label="Skills">
        {site.skills.items.map((skill) => (
          <li key={skill}>
            <span className="inline-flex rounded-full border border-line bg-canvas px-3.5 py-1.5 text-sm font-medium text-ink shadow-sm transition hover:border-accent/30 hover:bg-accent-soft">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
