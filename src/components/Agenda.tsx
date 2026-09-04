import { agenda } from "@/content/agenda";
import { Section } from "./Section";

export function Agenda() {
  const hasEvents = agenda.events.length > 0;

  return (
    <Section id="agenda" heading={agenda.heading} className="bg-surface/60">
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-sm font-medium text-accent">{agenda.dateLabel}</p>
        <p className="text-xs text-muted/80">{agenda.timezone}</p>
      </div>

      {hasEvents ? (
        <ol className="space-y-3">
          {agenda.events.map((event) => (
            <li
              key={`${event.start}-${event.title}`}
              className="flex flex-col gap-1 rounded-xl border border-line/80 bg-canvas px-4 py-3 sm:flex-row sm:items-center sm:gap-4 sm:px-5"
            >
              <time className="shrink-0 font-mono text-sm font-medium tabular-nums text-accent">
                {event.start}–{event.end}
              </time>
              <span className="text-base text-ink sm:text-lg">{event.title}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          Nothing on the calendar today.
        </p>
      )}
    </Section>
  );
}
