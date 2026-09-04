import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line/60"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-soft via-canvas to-canvas"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.14em] text-accent">
          {site.tagline}
        </p>
        <h1
          id="hero-heading"
          className="animate-fade-up mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl"
          style={{ animationDelay: "60ms" }}
        >
          {site.name}
        </h1>
        <p
          className="animate-fade-up mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: "120ms" }}
        >
          {site.heroSubtitle}
        </p>
        <p
          className="animate-fade-up mt-4 text-sm text-muted/80"
          style={{ animationDelay: "180ms" }}
        >
          {site.location}
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Get in touch
          </a>
          <a
            href="#ft-story"
            className="inline-flex items-center justify-center rounded-full border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink/20 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            FT top story
          </a>
        </div>
      </div>
    </section>
  );
}
