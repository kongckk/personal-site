import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/80 py-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="text-muted/70">{site.footer.note}</p>
      </div>
    </footer>
  );
}
