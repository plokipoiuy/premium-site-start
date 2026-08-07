import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-ink/10 px-6 py-10 font-mono text-[11px] tracking-wide text-muted">
      <div className="flex gap-6">
        <span>INSTAGRAM</span>
        <span>SOUNDCLOUD</span>
        <span>SPOTIFY</span>
      </div>
      <p>
        © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.domainLabel}
      </p>
    </footer>
  );
}
