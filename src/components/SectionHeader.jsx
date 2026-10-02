export default function SectionHeader({ number, title, description }) {
  return (
    <div className="mb-4 pt-3 border-t border-[#252525] first:border-t-0 first:pt-0">
      <div className="flex items-center gap-2 font-mono text-[11px] font-semibold mb-1">
        {number && <span className="text-[#B08A3E]">{number}</span>}
        {number && <span className="text-[#71717a]">//</span>}
        <span className="text-[#71717a] uppercase tracking-wider">DOCUMENTATION</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-[#f5f5f5] tracking-tight font-sans">
        {title}
      </h2>
      {description && (
        <p className="mt-1.5 text-xs sm:text-sm text-[#a1a1aa] font-sans leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
