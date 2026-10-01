export default function TechnologyGrid() {
  const technologies = [
    { name: 'JOCKY', role: 'Domain-Specific Language', detail: 'Syntax & Lexer Specification' },
    { name: 'Python', role: 'Runtime Core', detail: 'Compiler Frontend & Execution Orchestration' },
    { name: 'MLIR', role: 'Intermediate Representation', detail: 'Forensic Dialect Transformation Passes' },
    { name: 'C++', role: 'Native Operations', detail: 'High-Performance System Collectors' },
    { name: 'FastAPI', role: 'Control Interface', detail: 'REST API & Daemon Control Service' },
    { name: 'React / Vite', role: 'Documentation & Tools', detail: 'Web UI & Tooling Ecosystem' },
    { name: 'STIX 2.1', role: 'Threat Intelligence Standard', detail: 'Canonical Evidence Output Engine' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 font-sans text-xs">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="p-3.5 rounded border border-[#252525] bg-[#111111]/40 hover:border-[#71717a] transition-colors flex items-start justify-between"
        >
          <div className="space-y-1">
            <div className="font-mono text-sm font-bold text-[#f5f5f5]">{tech.name}</div>
            <div className="text-[#71717a] font-medium text-xs">{tech.role}</div>
            <div className="text-[#a1a1aa] text-[11px] font-sans pt-1">{tech.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
