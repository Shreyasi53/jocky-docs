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
    <div className="rounded-md border border-neutral-800 bg-neutral-900/90 overflow-hidden font-mono text-xs sm:text-sm my-4">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-950/80 border-b border-neutral-800 text-xs text-neutral-400">
          <span className="flex items-center gap-2 font-mono font-medium text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
            <span>{title}</span>
          </span>
          <div className="flex items-center gap-3">
            <span className="text-neutral-600 text-[10px] uppercase font-mono">{language}</span>
            {code && !placeholder && (
              <button
                type="button"
                onClick={handleCopy}
                className="text-neutral-400 hover:text-neutral-200 transition-colors text-[11px] px-2 py-0.5 rounded border border-neutral-800 hover:border-neutral-700 bg-neutral-900 font-mono"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            )}
          </div>
        </div>
      )}
      <div className="p-4 overflow-x-auto text-neutral-200 leading-relaxed font-mono">
        {placeholder ? (
          <div className="text-neutral-500 italic py-1 text-xs">
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
