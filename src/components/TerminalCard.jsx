import { useState } from 'react';

export default function TerminalCard({ tabs, code, title = 'Terminal', expected }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTabObj = tabs && tabs.length > 0 ? tabs[activeTab] : null;
  const activeCode = currentTabObj ? currentTabObj.code : code;
  const currentLanguage = currentTabObj ? (currentTabObj.language || 'bash') : 'bash';

  const handleCopy = () => {
    if (!activeCode) return;
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-sm border border-neutral-800 bg-neutral-900/90 overflow-hidden font-mono text-xs sm:text-sm shadow-sm">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-3.5 py-2 bg-neutral-950 border-b border-neutral-800 gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-neutral-300">{title}</span>
          </span>

          {/* OS Tabs */}
          {tabs && tabs.length > 1 && (
            <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded border border-neutral-800 text-[11px]">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-2 py-0.5 rounded-sm transition-colors ${
                    activeTab === idx
                      ? 'bg-neutral-800 text-emerald-400 font-semibold'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Copy Button & Language Label */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-neutral-600 text-[10px] uppercase tracking-wider hidden sm:inline">
            {currentLanguage}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="text-neutral-400 hover:text-neutral-200 transition-colors text-[11px] px-2 py-0.5 rounded border border-neutral-800 hover:border-neutral-700 bg-neutral-900 font-mono"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-4 overflow-x-auto text-neutral-200 leading-relaxed font-mono">
        <pre className="whitespace-pre">
          <code>
            {activeCode && activeCode.split('\n').map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell select-none text-neutral-600 pr-3 text-right text-[11px]">{i + 1}</span>
                <span className="table-cell">
                  {line.startsWith('#') ? (
                    <span className="text-neutral-500 italic">{line}</span>
                  ) : line.startsWith('git') || line.startsWith('python') || line.startsWith('pip') || line.startsWith('cmake') || line.startsWith('make') || line.startsWith('uvicorn') || line.startsWith('cd') || line.startsWith('mkdir') || line.startsWith('npm') || line.startsWith('docker') || line.startsWith('source') || line.startsWith('.') ? (
                    <span>
                      <span className="text-emerald-400 select-none">$ </span>
                      <span className="text-neutral-100">{line}</span>
                    </span>
                  ) : (
                    <span>{line}</span>
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Expected Indicator */}
      {expected && (
        <div className="px-3.5 py-2 bg-neutral-950/90 border-t border-neutral-800 text-[11px] text-neutral-400 flex flex-wrap items-center justify-between gap-2">
          <span className="text-neutral-500">Expected artifact / output:</span>
          <span className="text-emerald-400 font-mono font-medium bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900/60">
            {expected}
          </span>
        </div>
      )}
    </div>
  );
}
