import { ftTopStory } from "@/content/ftTopStory";
import { Section } from "./Section";

export function FtTopStory() {
  const paragraphs = ftTopStory.summary.split(/(?<=\.)\s+(?=[A-Z])/);

  return (
    <Section id="ft-story" heading={ftTopStory.heading} className="bg-surface/60">
      <article className="rounded-xl border border-line/80 bg-canvas px-4 py-5 sm:px-6 sm:py-6">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            {ftTopStory.source}
          </span>
          <time className="text-sm font-medium text-muted">{ftTopStory.dateLabel}</time>
        </div>

        <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {ftTopStory.headline}
        </h3>

        <p className="mt-3 text-base font-medium leading-relaxed text-muted sm:text-lg">
          {ftTopStory.standfirst}
        </p>

        <p className="mt-2 text-sm text-muted/90">By {ftTopStory.authors}</p>

        <div className="mt-6 space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-sm leading-relaxed text-ink/90 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Implications
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/90 sm:text-base">
            {ftTopStory.implications.map((item) => (
              <li key={item.slice(0, 48)}>{item}</li>
            ))}
          </ul>
        </div>

        <a
          href={ftTopStory.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex text-sm font-medium text-accent transition hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Read on FT →
        </a>
      </article>
    </Section>
  );
}
