export default function Hero() {
  return (
    <section id="hero" className="pb-4 border-b border-[#252525] scroll-mt-20">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[11px] font-mono text-[#71717a] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00c896]"></span>
          Domain-Specific Forensic Language
        </div>

        <div className="flex items-center gap-3 pt-1">
          <img src="/jocky.png" alt="Jocky Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#f5f5f5] tracking-tight font-sans">
            JOCKY
          </h1>
        </div>

        <p className="text-lg font-medium text-[#a1a1aa] font-sans tracking-tight">
          Forensic Investigation Language
        </p>

        <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-sans max-w-2xl pt-1">
          A domain-specific language for describing reproducible forensic investigations.
        </p>
      </div>
    </section>
  );
}
