import SectionHeader from '../components/SectionHeader';

export default function WhatIsJocky() {
  return (
    <section id="what-is-jocky" className="scroll-mt-20 space-y-8">
      <SectionHeader
        number="02"
        title="What is JOCKY?"
        description="A structured overview of the problem domain, JOCKY's design paradigm, and the technical rationale for a domain-specific compiler."
      />

      <div className="space-y-10 font-sans">
        {/* Stage 1: Problem */}
        <div className="space-y-3 pt-4 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold">
            <span className="text-[#00c896]">01</span>
            <span className="text-[#71717a]">//</span>
            <span className="text-[#71717a]">PROBLEM</span>
          </div>
          <h3 className="text-xl font-bold text-[#f5f5f5]">The Forensic Challenge</h3>
          <div className="text-base text-[#a1a1aa] leading-relaxed font-sans max-w-3xl space-y-3">
            <p>
              Traditional forensic data collection relies heavily on ad-hoc shell scripts, manual CLI invocations, and platform-dependent collection tools. This creates significant operational challenges in digital forensics and incident response (DFIR):
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[#a1a1aa] text-sm pl-2">
              <li>Lack of reproducible investigation definitions across different analyst environments</li>
              <li>Inconsistent artifact schema structures between OS platforms (Linux vs. Windows)</li>
              <li>Unverified evidence integrity and missing cryptographic chain of custody metadata</li>
            </ul>
          </div>
        </div>

        {/* Stage 2: JOCKY's Approach */}
        <div className="space-y-3 pt-6 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold">
            <span className="text-[#00c896]">02</span>
            <span className="text-[#71717a]">//</span>
            <span className="text-[#71717a]">JOCKY'S APPROACH</span>
          </div>
          <h3 className="text-xl font-bold text-[#f5f5f5]">Declarative Forensic Specifications</h3>
          <div className="text-base text-[#a1a1aa] leading-relaxed font-sans max-w-3xl space-y-3">
            <p>
              JOCKY introduces a declarative domain-specific language (DSL) that decouples investigation intent from target operating system specifics. Investigators define <em>what</em> evidence primitives to collect (<code className="text-[#a1a1aa] font-mono text-xs bg-[#111111] px-1 py-0.5 rounded border border-[#252525]">system_info</code>, <code className="text-[#a1a1aa] font-mono text-xs bg-[#111111] px-1 py-0.5 rounded border border-[#252525]">process_list</code>, <code className="text-[#a1a1aa] font-mono text-xs bg-[#111111] px-1 py-0.5 rounded border border-[#252525]">network_connections</code>), while platform-specific providers execute the native collection routines deterministically.
            </p>
          </div>
        </div>

        {/* Stage 3: Why a DSL + Compiler */}
        <div className="space-y-3 pt-6 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold">
            <span className="text-[#00c896]">03</span>
            <span className="text-[#71717a]">//</span>
            <span className="text-[#71717a]">WHY A DSL + COMPILER</span>
          </div>
          <h3 className="text-xl font-bold text-[#f5f5f5]">Static Validation & Forensic IR</h3>
          <div className="text-base text-[#a1a1aa] leading-relaxed font-sans max-w-3xl space-y-3">
            <p>
              By treating investigation scripts as compiled source code, JOCKY performs static semantic analysis before runtime execution begins. This guarantees capability constraint checks, lowers code to an optimized Forensic Intermediate Representation (Forensic IR), and automatically applies SHA-256 evidence sealing and STIX 2.1 formatting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
