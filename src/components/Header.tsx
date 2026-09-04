import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5 sm:h-16 sm:px-6">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {site.name}
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-surface hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-3 sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
