import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" heading={site.about.heading}>
      <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
        {site.about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
