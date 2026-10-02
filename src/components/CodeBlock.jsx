import { useState } from 'react';
import { highlightLine } from '../utils/highlighter';

export default function CodeBlock({ title, code = '', language = 'jocky', placeholder = false, showLineNumbers = true }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code ? code.split('\n') : [];
  const displayLineNumbers = showLineNumbers && language !== 'text' && language !== 'plain' && lines.length > 1;

  return (
    <div className="rounded-lg border border-[#27272a] bg-[#09090b] overflow-hidden font-mono text-xs sm:text-sm my-4 shadow-xl">
      {/* Header Bar */}
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#121215] border-b border-[#27272a] text-xs text-[#a1a1aa]">
          <span className="flex items-center gap-2 font-mono font-medium text-[#e2e8f0]">
            <span className="w-2 h-2 rounded-full bg-[#B08A3E]/70"></span>
            <span>{title}</span>
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[#a1a1aa] text-[10px] uppercase font-mono tracking-wider bg-[#18181b] px-2 py-0.5 rounded border border-[#27272a]">
              {language}
            </span>
            {code && !placeholder && (
              <button
                type="button"
                onClick={handleCopy}
                className="text-[#a1a1aa] hover:text-[#f8fafc] transition-colors text-[11px] px-2.5 py-0.5 rounded border border-[#27272a] hover:border-[#52525b] bg-[#18181b] font-mono flex items-center gap-1.5"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Code Body */}
      <div className="p-4 overflow-x-auto text-[#e2e8f0] leading-relaxed font-mono bg-[#0c0c0e]">
        {placeholder ? (
          <div className="text-[#64748b] italic py-1 text-xs">
            {code || '[PLACEHOLDER — Output pending execution details]'}
          </div>
        ) : (
          <div className="inline-block min-w-full">
            {lines.map((line, idx) => (
              <div key={idx} className="flex min-w-full leading-6">
                {displayLineNumbers && (
                  <span className="select-none text-[#52525b] text-right min-w-[2.2rem] pr-4 shrink-0 font-mono text-[11px] opacity-70 border-r border-[#1f1f23] mr-4">
                    {idx + 1}
                  </span>
                )}
                <span className="whitespace-pre font-mono text-xs sm:text-sm text-[#e2e8f0]">
                  {highlightLine(line, language)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
