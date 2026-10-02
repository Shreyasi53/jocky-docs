export default function Hero() {
  return (
    <section id="hero" className="pb-4 border-b border-[#252525] scroll-mt-20">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[11px] font-mono text-[#71717a] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B08A3E]"></span>
          Domain-Specific Forensic Language
        </div>

        <div className="pt-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#f5f5f5] tracking-tight font-sans inline-flex items-center leading-none">
            <span>J</span>
            <img
              src="/jocky.png"
              alt="O"
              className="h-[0.98em] sm:h-[1.02em] w-auto object-contain mx-[0.02em] shrink-0 self-center select-none hero-logo-spin"
            />
            <span>CKY</span>
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
