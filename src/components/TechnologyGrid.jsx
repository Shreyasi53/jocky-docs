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
          className="p-3.5 rounded border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-colors flex items-start justify-between"
        >
          <div className="space-y-1">
            <div className="font-mono text-sm font-bold text-neutral-100">{tech.name}</div>
            <div className="text-emerald-400 font-medium text-xs">{tech.role}</div>
            <div className="text-neutral-400 text-[11px] font-sans pt-1">{tech.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
