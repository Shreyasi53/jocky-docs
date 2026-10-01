export default function Hero() {
  return (
    <section id="hero" className="pb-4 border-b border-neutral-800/60 scroll-mt-20">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Domain-Specific Forensic Language
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-100 tracking-tight font-sans">
          JOCKY
        </h1>

        <p className="text-lg font-medium text-neutral-400 font-sans tracking-tight">
          Forensic Investigation Language
        </p>

        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans max-w-2xl pt-1">
          A domain-specific language for describing reproducible forensic investigations.
        </p>
      </div>
    </section>
  );
}
