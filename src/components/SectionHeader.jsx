export default function SectionHeader({ number, title, description }) {
  return (
    <div className="mb-4 pt-3 border-t border-neutral-800/60 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 font-semibold mb-1">
        {number && <span>{number}</span>}
        {number && <span className="text-neutral-600">//</span>}
        <span className="uppercase tracking-wider">DOCUMENTATION</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-neutral-100 tracking-tight font-sans">
        {title}
      </h2>
      {description && (
        <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
