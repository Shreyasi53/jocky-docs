import SectionHeader from '../components/SectionHeader';
import CodeBlock from '../components/CodeBlock';
import TerminalCard from '../components/TerminalCard';

export default function QuickStart() {
  const codeExample = `investigation "Host Sweep" {
    collect system_info as sys
    collect process_list as procs
    collect network_connections as conns

    emit evidence
}`;

  return (
    <section id="quick-start" className="scroll-mt-20 space-y-6">
      <SectionHeader
        number="03"
        title="Quick Start"
        description="Write your first JOCKY investigation spec and execute it through the compiler pipeline."
      />

      <div className="space-y-6 font-sans">
        <p className="text-base text-[#a1a1aa] leading-relaxed max-w-3xl">
          Create a new file named <code className="text-[#a1a1aa] font-mono text-xs bg-[#111111] px-1 py-0.5 rounded border border-[#252525]">host_sweep.jocky</code> and define your investigation routines using JOCKY DSL primitives:
        </p>

        {/* Code Example Block */}
        <div>
          <div className="text-xs font-mono text-[#71717a] mb-1">
            host_sweep.jocky
          </div>
          <CodeBlock
            title="host_sweep.jocky"
            language="jocky"
            code={codeExample}
          />
        </div>

        {/* Command & Execution */}
        <div className="space-y-2 pt-4">
          <h4 className="text-base font-bold text-[#f5f5f5] font-sans">Executing the Investigation</h4>
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            Run the compiler CLI runner targeting your specification file:
          </p>
          <TerminalCard
            title="Terminal"
            code="jocky run host_sweep.jocky"
          />
        </div>

        {/* Explanation */}
        <div className="pt-2 text-sm text-[#a1a1aa] leading-relaxed space-y-2">
          <h4 className="text-sm font-bold text-[#f5f5f5] font-sans">Specification Breakdown</h4>
          <p>
            The specification declares an investigation block named <code className="text-[#a1a1aa] font-mono text-xs bg-[#111111] px-1 py-0.5 rounded border border-[#252525]">"Host Sweep"</code>. It collects three primitives (<code className="text-[#a1a1aa] font-mono text-xs">system_info</code>, <code className="text-[#a1a1aa] font-mono text-xs">process_list</code>, <code className="text-[#a1a1aa] font-mono text-xs">network_connections</code>), binds them to symbolic names (<code className="text-[#a1a1aa] font-mono text-xs">sys</code>, <code className="text-[#a1a1aa] font-mono text-xs">procs</code>, <code className="text-[#a1a1aa] font-mono text-xs">conns</code>), and emits a cryptographically sealed evidence package.
          </p>
        </div>
      </div>
    </section>
  );
}
