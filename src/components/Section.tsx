import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  heading: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, heading, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <h2
          id={`${id}-heading`}
          className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          {heading}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
