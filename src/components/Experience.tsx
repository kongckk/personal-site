import { site } from "@/content/site";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" heading={site.experience.heading} className="bg-surface/60">
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {site.experience.roles.map((role) => (
          <li key={`${role.company}-${role.title}`} className="relative">
            <span
              className="absolute -left-[1.55rem] top-1.5 flex h-3 w-3 rounded-full border-2 border-accent bg-canvas sm:-left-[2.05rem]"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {role.title}
                </h3>
                <p className="text-sm font-medium text-accent">{role.company}</p>
              </div>
              <div className="shrink-0 text-sm text-muted">
                <time>{role.period}</time>
                <span className="mx-1.5 text-line" aria-hidden="true">
                  ·
                </span>
                <span>{role.location}</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
              {role.bullets.map((bullet) => (
                <li key={bullet.slice(0, 48)} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
