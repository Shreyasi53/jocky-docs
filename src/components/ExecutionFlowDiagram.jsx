export default function ExecutionFlowDiagram() {
  const steps = [
    { title: 'Investigation', desc: 'DSL target definition' },
    { title: 'Capability', desc: 'Resolved operational primitive' },
    { title: 'Provider', desc: 'Platform execution engine' },
    { title: 'Native Collection', desc: 'Raw system acquisition' },
    { title: 'Forensic Artifact', desc: 'Canonical evidence object' },
  ];

  return (
    <div className="py-4 my-4 font-mono text-xs">
      <div className="max-w-md mx-auto space-y-2.5">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center">
            <div className="w-full px-4 py-2 bg-[#111111]/80 border border-[#252525] rounded flex items-center justify-between">
              <span className="font-bold text-[#f5f5f5]">{step.title}</span>
              <span className="text-[#71717a] text-[11px] font-sans">{step.desc}</span>
            </div>
            <span className="text-[#71717a] text-[10px] my-0.5">↓</span>
          </div>
        ))}

        {/* Branch */}
        <div className="grid grid-cols-2 gap-3 py-1">
          <div className="p-2.5 bg-[#111111]/80 border border-[#252525] text-center rounded">
            <div className="font-bold text-[#f5f5f5] text-xs">Metadata</div>
            <div className="text-[10px] text-[#71717a] font-sans mt-0.5">Provenance & Context</div>
          </div>
          <div className="p-2.5 bg-[#111111]/80 border border-[#252525] text-center rounded">
            <div className="font-bold text-[#f5f5f5] text-xs">SHA-256</div>
            <div className="text-[10px] text-[#71717a] font-sans mt-0.5">Cryptographic Digest</div>
          </div>
        </div>

        {/* Rejoin */}
        <div className="flex flex-col items-center space-y-2 pt-1">
          <span className="text-[#71717a] text-[10px]">↓</span>
          <div className="w-full px-4 py-2 bg-[#111111]/80 border border-[#252525] rounded flex items-center justify-between">
            <span className="font-bold text-[#f5f5f5]">Evidence Seal</span>
            <span className="text-[#a1a1aa] text-[11px] font-sans">Tamper-evident package</span>
          </div>
          <span className="text-[#71717a] text-[10px]">↓</span>
          <div className="w-full px-4 py-2 bg-[#090909] border border-[#252525] rounded flex items-center justify-between">
            <span className="font-bold text-[#f5f5f5]">STIX Finding</span>
            <span className="text-[#a1a1aa] text-[11px] font-mono">STIX 2.1 JSON Schema</span>
          </div>
        </div>
      </div>
    </div>
  );
}
