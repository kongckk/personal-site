import { financeNews } from "@/content/financeNews";
import { Section } from "./Section";

export function FinanceNews() {
  return (
    <Section id="finance-news" heading={financeNews.heading} className="bg-surface/60">
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-sm font-medium text-accent">{financeNews.dateLabel}</p>
        <p className="text-xs text-muted/80">{financeNews.timezone}</p>
      </div>

      <ul className="space-y-4">
        {financeNews.items.map((item) => (
          <li
            key={item.url}
            className="rounded-xl border border-line/80 bg-canvas px-4 py-4 sm:px-5"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg font-semibold text-ink transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.headline}
                </a>
                <span className="text-xs font-medium uppercase tracking-wide text-accent">
                  {item.source}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {item.blurb}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent transition hover:text-accent-hover"
              >
                Read more →
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
