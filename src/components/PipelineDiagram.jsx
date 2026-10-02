export default function PipelineDiagram() {
  const steps = [
    { stage: '01', title: 'JOCKY SOURCE', desc: 'Declarative DSL file' },
    { stage: '02', title: 'PARSER', desc: 'Lexical analysis & AST' },
    { stage: '03', title: 'AST', desc: 'Abstract Syntax Tree' },
    { stage: '04', title: 'SEMANTIC VALIDATION', desc: 'Capability constraint checks' },
    { stage: '05', title: 'FORENSIC IR', desc: 'High-level forensic IR' },
    { stage: '06', title: 'MLIR / FORENSIC DIALECT', desc: 'MLIR dialect passes' },
    { stage: '07', title: 'LOWERING', desc: 'Target platform translation' },
    { stage: '08', title: 'NATIVE OPERATION', desc: 'System collector execution' },
  ];

  return (
    <div className="py-4 my-4 font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((step, idx) => (
          <div key={step.stage} className="relative">
            <div className="p-3 rounded-md border border-[#252525] bg-[#111111]/60 flex flex-col justify-between h-full hover:border-[#71717a] transition-colors">
              <div>
                <span className="text-[10px] font-bold text-[#B08A3E] block mb-1">{step.stage}</span>
                <span className="text-xs font-bold text-[#f5f5f5] block tracking-wide">{step.title}</span>
              </div>
              <span className="text-[11px] text-[#a1a1aa] font-sans mt-2">{step.desc}</span>
            </div>
            {idx < steps.length - 1 && (
              <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#71717a] text-xs z-10 pointer-events-none">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
