import { useState } from 'react';
import { highlightLine } from '../utils/highlighter';

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

  const lines = activeCode ? activeCode.split('\n') : [];

  return (
    <div className="rounded-lg border border-[#27272a] bg-[#09090b] overflow-hidden font-mono text-xs sm:text-sm shadow-xl">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#121215] border-b border-[#27272a] gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs text-[#a1a1aa]">
            <span className="w-2 h-2 rounded-full bg-[#B08A3E]/70"></span>
            <span className="font-semibold text-[#e2e8f0] font-mono">{title}</span>
          </span>

          {/* OS Tabs */}
          {tabs && tabs.length > 1 && (
            <div className="flex items-center gap-1 bg-[#18181b] p-0.5 rounded border border-[#27272a] text-[11px]">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    activeTab === idx
                      ? 'bg-[#27272a] text-[#f8fafc] font-semibold'
                      : 'text-[#a1a1aa] hover:text-[#f8fafc]'
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
          <span className="text-[#a1a1aa] text-[10px] uppercase font-mono tracking-wider bg-[#18181b] px-2 py-0.5 rounded border border-[#27272a] hidden sm:inline">
            {currentLanguage}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="text-[#a1a1aa] hover:text-[#f8fafc] transition-colors text-[11px] px-2.5 py-0.5 rounded border border-[#27272a] hover:border-[#52525b] bg-[#18181b] font-mono"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-4 overflow-x-auto text-[#e2e8f0] leading-relaxed font-mono bg-[#0c0c0e]">
        <div className="inline-block min-w-full">
          {lines.map((line, idx) => (
            <div key={idx} className="flex min-w-full leading-6">
              {lines.length > 1 && (
                <span className="select-none text-[#52525b] text-right min-w-[2.2rem] pr-4 shrink-0 font-mono text-[11px] opacity-70 border-r border-[#1f1f23] mr-4">
                  {idx + 1}
                </span>
              )}
              <span className="whitespace-pre font-mono text-xs sm:text-sm text-[#e2e8f0]">
                {highlightLine(line, currentLanguage)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Expected Indicator */}
      {expected && (
        <div className="px-4 py-2 bg-[#121215] border-t border-[#27272a] text-[11px] text-[#a1a1aa] flex flex-wrap items-center justify-between gap-2">
          <span className="text-[#71717a]">Expected artifact / output:</span>
          <span className="text-[#C9A24A] font-mono font-medium bg-[#18181b] px-2.5 py-0.5 rounded border border-[#27272a]">
            {expected}
          </span>
        </div>
      )}
    </div>
  );
}
