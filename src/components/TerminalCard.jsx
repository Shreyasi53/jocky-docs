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
    <div className="rounded-sm border border-[#252525] bg-[#111111]/90 overflow-hidden font-mono text-xs sm:text-sm shadow-sm">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-3.5 py-2 bg-[#090909] border-b border-[#252525] gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-[#a1a1aa]">
            <span className="w-2 h-2 rounded-full bg-[#00c896]"></span>
            <span className="font-semibold text-[#f5f5f5]">{title}</span>
          </span>

          {/* OS Tabs */}
          {tabs && tabs.length > 1 && (
            <div className="flex items-center gap-1 bg-[#111111] p-0.5 rounded border border-[#252525] text-[11px]">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-2 py-0.5 rounded-sm transition-colors ${
                    activeTab === idx
                      ? 'bg-[#252525] text-[#f5f5f5] font-semibold'
                      : 'text-[#71717a] hover:text-[#f5f5f5]'
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
          <span className="text-[#71717a] text-[10px] uppercase tracking-wider hidden sm:inline">
            {currentLanguage}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors text-[11px] px-2 py-0.5 rounded border border-[#252525] hover:border-[#71717a] bg-[#111111] font-mono"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-4 overflow-x-auto text-[#a1a1aa] leading-relaxed font-mono">
        <pre className="whitespace-pre">
          <code>
            {activeCode && activeCode.split('\n').map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell select-none text-[#71717a] pr-3 text-right text-[11px]">{i + 1}</span>
                <span className="table-cell">
                  {line.startsWith('#') ? (
                    <span className="text-[#71717a] italic">{line}</span>
                  ) : line.startsWith('git') || line.startsWith('python') || line.startsWith('pip') || line.startsWith('cmake') || line.startsWith('make') || line.startsWith('uvicorn') || line.startsWith('cd') || line.startsWith('mkdir') || line.startsWith('npm') || line.startsWith('docker') || line.startsWith('source') || line.startsWith('.') ? (
                    <span>
                      <span className="text-[#71717a] select-none">$ </span>
                      <span className="text-[#f5f5f5]">{line}</span>
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
        <div className="px-3.5 py-2 bg-[#090909]/90 border-t border-[#252525] text-[11px] text-[#a1a1aa] flex flex-wrap items-center justify-between gap-2">
          <span className="text-[#71717a]">Expected artifact / output:</span>
          <span className="text-[#a1a1aa] font-mono font-medium bg-[#111111] px-2 py-0.5 rounded border border-[#252525]">
            {expected}
          </span>
        </div>
      )}
    </div>
  );
}
