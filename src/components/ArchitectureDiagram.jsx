export default function ArchitectureDiagram() {
  return (
    <div className="py-6 my-4 font-mono text-xs">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* DSL Top */}
        <div className="flex flex-col items-center">
          <div className="px-5 py-2 bg-[#111111] border border-[#252525] text-[#f5f5f5] font-bold rounded-sm">
            JOCKY DSL
          </div>
          <div className="text-[#71717a] my-1 text-[10px]">│</div>
          <div className="text-[#71717a] text-[10px]">▼</div>
        </div>

        {/* Compiler */}
        <div className="flex flex-col items-center">
          <div className="px-6 py-2 bg-[#111111] border border-[#252525] text-[#f5f5f5] font-bold rounded-sm">
            Compiler Core
          </div>
          <div className="text-[#71717a] my-1 text-[10px]">│</div>
          <div className="px-4 py-1 bg-[#090909] border border-[#252525] text-[#a1a1aa] text-[11px] rounded-sm">
            Forensic IR
          </div>
          <div className="text-[#71717a] my-1 text-[10px]">│</div>
        </div>

        {/* Split CMI & Providers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3.5 rounded border border-[#252525] bg-[#111111]/60 flex flex-col items-center">
            <span className="text-[#71717a] text-[10px] uppercase mb-1">Control Interface</span>
            <span className="font-bold text-[#f5f5f5]">CMI / API</span>
          </div>

          <div className="p-3.5 rounded border border-[#252525] bg-[#111111]/60 flex flex-col items-center space-y-2">
            <span className="text-[#71717a] text-[10px] uppercase">Execution Providers</span>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 bg-[#090909] border border-[#252525] text-[#a1a1aa] text-[11px] rounded">
                Linux Provider
              </span>
              <span className="px-2.5 py-1 bg-[#090909] border border-[#252525] text-[#a1a1aa] text-[11px] rounded">
                Windows Provider
              </span>
            </div>
          </div>
        </div>

        {/* Output Evidence */}
        <div className="flex flex-col items-center pt-2">
          <div className="text-[#71717a] text-[10px]">▼</div>
          <div className="px-6 py-2 mt-1 bg-[#111111] border border-[#252525] text-[#f5f5f5] font-bold rounded-sm">
            Evidence Packager
          </div>
          <div className="grid grid-cols-2 gap-3 my-3 w-full max-w-md">
            <div className="p-2 bg-[#090909] border border-[#252525] text-[#a1a1aa] text-center text-[11px] rounded">
              SHA-256 Digest
            </div>
            <div className="p-2 bg-[#090909] border border-[#252525] text-[#a1a1aa] text-center text-[11px] rounded">
              STIX 2.1 Schema
            </div>
          </div>
          <div className="text-[#71717a] text-[10px]">▼</div>
          <div className="px-5 py-2 mt-1 bg-[#111111] border border-[#252525] text-[#f5f5f5] font-bold rounded-sm">
            Workbench Output
          </div>
        </div>
      </div>
    </div>
  );
}
