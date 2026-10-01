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
            <div className="w-full px-4 py-2 bg-neutral-900/80 border border-neutral-800 rounded flex items-center justify-between">
              <span className="font-bold text-neutral-200">{step.title}</span>
              <span className="text-neutral-500 text-[11px] font-sans">{step.desc}</span>
            </div>
            <span className="text-neutral-600 text-[10px] my-0.5">↓</span>
          </div>
        ))}

        {/* Branch */}
        <div className="grid grid-cols-2 gap-3 py-1">
          <div className="p-2.5 bg-neutral-900/80 border border-neutral-800 text-center rounded">
            <div className="font-bold text-neutral-200 text-xs">Metadata</div>
            <div className="text-[10px] text-neutral-500 font-sans mt-0.5">Provenance & Context</div>
          </div>
          <div className="p-2.5 bg-neutral-900/80 border border-neutral-800 text-center rounded">
            <div className="font-bold text-neutral-200 text-xs">SHA-256</div>
            <div className="text-[10px] text-neutral-500 font-sans mt-0.5">Cryptographic Digest</div>
          </div>
        </div>

        {/* Rejoin */}
        <div className="flex flex-col items-center space-y-2 pt-1">
          <span className="text-neutral-600 text-[10px]">↓</span>
          <div className="w-full px-4 py-2 bg-neutral-900/80 border border-emerald-900/60 rounded flex items-center justify-between">
            <span className="font-bold text-emerald-400">Evidence Seal</span>
            <span className="text-neutral-400 text-[11px] font-sans">Tamper-evident package</span>
          </div>
          <span className="text-neutral-600 text-[10px]">↓</span>
          <div className="w-full px-4 py-2 bg-neutral-950 border border-emerald-800/80 rounded flex items-center justify-between">
            <span className="font-bold text-emerald-300">STIX Finding</span>
            <span className="text-emerald-400 text-[11px] font-mono">STIX 2.1 JSON Schema</span>
          </div>
        </div>
      </div>
    </div>
  );
}
