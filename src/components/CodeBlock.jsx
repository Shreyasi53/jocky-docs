import { useState } from 'react';

export default function CodeBlock({ title, code, language = 'jocky', placeholder = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-md border border-[#252525] bg-[#111111]/90 overflow-hidden font-mono text-xs sm:text-sm my-4">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#090909]/80 border-b border-[#252525] text-xs text-[#71717a]">
          <span className="flex items-center gap-2 font-mono font-medium text-[#a1a1aa]">
            <span className="w-2 h-2 rounded-full bg-[#00c896]/80"></span>
            <span>{title}</span>
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[#71717a] text-[10px] uppercase font-mono">{language}</span>
            {code && !placeholder && (
              <button
                type="button"
                onClick={handleCopy}
                className="text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors text-[11px] px-2 py-0.5 rounded border border-[#252525] hover:border-[#71717a] bg-[#111111] font-mono"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            )}
          </div>
        </div>
      )}
      <div className="p-4 overflow-x-auto text-[#a1a1aa] leading-relaxed font-mono">
        {placeholder ? (
          <div className="text-[#71717a] italic py-1 text-xs">
            {code || '[PLACEHOLDER — Output pending execution details]'}
          </div>
        ) : (
          <pre className="whitespace-pre">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
