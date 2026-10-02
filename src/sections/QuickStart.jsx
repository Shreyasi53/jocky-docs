import SectionHeader from '../components/SectionHeader';
import CodeBlock from '../components/CodeBlock';
import TerminalCard from '../components/TerminalCard';

export default function QuickStart() {
  const codeExample = `investigation "Endpoint Triage" {
    collect system_info as sys
    collect process_list as procs
    collect network_connections as conns

    emit evidence
}`;

  const buildOutput = `[1/2] Compiling examples/endpoint_triage.jocky to IR/Instructions...
      -> Plain IR: out/instructions/endpoint_triage.json
[2/2] Generating polymorphic encrypted payload...
[OK] Portable payload built successfully: out/instructions/endpoint_triage.enc`;

  return (
    <section id="quick-start" className="scroll-mt-20 space-y-6">
      <SectionHeader
        number="03"
        title="Quick Start"
        description="Write your first JOCKY investigation spec, compile the encrypted payload, and execute it."
      />

      <div className="space-y-8 font-sans">
        {/* Step 1: Write Spec */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-[#f5f5f5]">
            <span className="w-6 h-6 rounded-full bg-[#00c896]/10 text-[#00c896] border border-[#00c896]/30 flex items-center justify-center font-mono text-xs font-bold">1</span>
            <h3>Write Investigation Specification</h3>
          </div>
          <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-3xl pl-8">
            Create a file named <code className="text-[#a1a1aa] font-mono text-xs bg-[#111111] px-1.5 py-0.5 rounded border border-[#252525]">examples/endpoint_triage.jocky</code> and define your investigation routines:
          </p>

          <div className="pl-8">
            <CodeBlock
              title="examples/endpoint_triage.jocky"
              language="jocky"
              code={codeExample}
            />
          </div>
        </div>

        {/* Step 2: Build Payload */}
        <div className="space-y-3 border-t border-[#252525] pt-6">
          <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-[#f5f5f5]">
            <span className="w-6 h-6 rounded-full bg-[#00c896]/10 text-[#00c896] border border-[#00c896]/30 flex items-center justify-center font-mono text-xs font-bold">2</span>
            <h3>Build the JOCKY Investigation</h3>
          </div>
          <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-3xl pl-8">
            Compile and encrypt the Jocky file into the portable payload in <strong>just one command</strong>:
          </p>

          <div className="pl-8 space-y-4">
            <TerminalCard
              title="Terminal"
              tabs={[
                {
                  label: 'Linux / Ubuntu (Your Teammate)',
                  language: 'bash',
                  code: `./mahoraga build examples/endpoint_triage.jocky`,
                },
                {
                  label: 'Windows PowerShell',
                  language: 'powershell',
                  code: `.\\mahoraga build examples/endpoint_triage.jocky`,
                },
              ]}
              expected="out/instructions/endpoint_triage.enc"
            />

            {/* Separate Output Block */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-[#f5f5f5] font-sans uppercase tracking-wider">Output:</h4>
              <CodeBlock
                title="Output"
                language="text"
                code={buildOutput}
              />
            </div>
          </div>
        </div>

        {/* Step 3: Execute Payload */}
        <div className="space-y-3 border-t border-[#252525] pt-6">
          <div className="flex items-center gap-2.5 font-mono text-sm font-bold text-[#f5f5f5]">
            <span className="w-6 h-6 rounded-full bg-[#00c896]/10 text-[#00c896] border border-[#00c896]/30 flex items-center justify-center font-mono text-xs font-bold">3</span>
            <h3>Execute Portable Payload</h3>
          </div>
          <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-3xl pl-8">
            You receive <code className="text-[#a1a1aa] font-mono text-xs bg-[#111111] px-1.5 py-0.5 rounded border border-[#252525]">endpoint_triage.enc</code>. To execute it natively and seal the evidence in <strong>just one command</strong>:
          </p>

          <div className="pl-8 space-y-4">
            <TerminalCard
              title="Terminal"
              tabs={[
                {
                  label: 'Windows PowerShell',
                  language: 'powershell',
                  code: `.\\mahoraga endpoint_triage.enc`,
                },
                {
                  label: 'Linux / Ubuntu',
                  language: 'bash',
                  code: `./mahoraga endpoint_triage.enc`,
                },
              ]}
              expected="out/evidence/endpoint_triage_sealed.json"
            />
          </div>
        </div>

        {/* Specification Breakdown */}
        <div className="pt-4 border-t border-[#252525] space-y-2">
          <h4 className="text-sm font-bold text-[#f5f5f5] font-sans">Specification Breakdown</h4>
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            The specification declares an investigation block named <code className="text-[#a1a1aa] font-mono text-xs bg-[#111111] px-1.5 py-0.5 rounded border border-[#252525]">"Endpoint Triage"</code>. It collects three primitives (<code className="text-[#a1a1aa] font-mono text-xs">system_info</code>, <code className="text-[#a1a1aa] font-mono text-xs">process_list</code>, <code className="text-[#a1a1aa] font-mono text-xs">network_connections</code>), binds them to symbolic names (<code className="text-[#a1a1aa] font-mono text-xs">sys</code>, <code className="text-[#a1a1aa] font-mono text-xs">procs</code>, <code className="text-[#a1a1aa] font-mono text-xs">conns</code>), and emits a cryptographically sealed evidence package.
          </p>
        </div>
      </div>
    </section>
  );
}
