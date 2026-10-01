export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 py-12 mt-20 text-xs font-sans text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-base text-neutral-100">JOCKY</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded-sm">
                DSL
              </span>
            </div>
            <p className="text-neutral-400 text-xs">Forensic Investigation Language</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <a href="#what-is-jocky" className="hover:text-neutral-200 transition-colors">
              Docs
            </a>
            <a href="#quick-start" className="hover:text-neutral-200 transition-colors">
              Quick Start
            </a>
            <a href="#architecture" className="hover:text-neutral-200 transition-colors">
              Architecture
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-mono">
          <div>© {new Date().getFullYear()} JOCKY Language Specification. Open Documentation.</div>
          <div>Minimal & Technical Forensic DSL Architecture</div>
        </div>
      </div>
    </footer>
  );
}
