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
        <div className="space-y-3 pt-4 border-t border-neutral-800/60">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold">
            <span>01</span>
            <span>//</span>
            <span>PROBLEM</span>
          </div>
          <h3 className="text-xl font-bold text-neutral-100">The Forensic Challenge</h3>
          <div className="text-base text-neutral-300 leading-relaxed font-sans max-w-3xl space-y-3">
            <p>
              Traditional forensic data collection relies heavily on ad-hoc shell scripts, manual CLI invocations, and platform-dependent collection tools. This creates significant operational challenges in digital forensics and incident response (DFIR):
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-neutral-400 text-sm pl-2">
              <li>Lack of reproducible investigation definitions across different analyst environments</li>
              <li>Inconsistent artifact schema structures between OS platforms (Linux vs. Windows)</li>
              <li>Unverified evidence integrity and missing cryptographic chain of custody metadata</li>
            </ul>
          </div>
        </div>

        {/* Stage 2: JOCKY's Approach */}
        <div className="space-y-3 pt-6 border-t border-neutral-800/60">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold">
            <span>02</span>
            <span>//</span>
            <span>JOCKY'S APPROACH</span>
          </div>
          <h3 className="text-xl font-bold text-neutral-100">Declarative Forensic Specifications</h3>
          <div className="text-base text-neutral-300 leading-relaxed font-sans max-w-3xl space-y-3">
            <p>
              JOCKY introduces a declarative domain-specific language (DSL) that decouples investigation intent from target operating system specifics. Investigators define <em>what</em> evidence primitives to collect (<code className="text-emerald-400 font-mono text-sm">system_info</code>, <code className="text-emerald-400 font-mono text-sm">process_list</code>, <code className="text-emerald-400 font-mono text-sm">network_connections</code>), while platform-specific providers execute the native collection routines deterministically.
            </p>
          </div>
        </div>

        {/* Stage 3: Why a DSL + Compiler */}
        <div className="space-y-3 pt-6 border-t border-neutral-800/60">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold">
            <span>03</span>
            <span>//</span>
            <span>WHY A DSL + COMPILER</span>
          </div>
          <h3 className="text-xl font-bold text-neutral-100">Static Validation & Forensic IR</h3>
          <div className="text-base text-neutral-300 leading-relaxed font-sans max-w-3xl space-y-3">
            <p>
              By treating investigation scripts as compiled source code, JOCKY performs static semantic analysis before runtime execution begins. This guarantees capability constraint checks, lowers code to an optimized Forensic Intermediate Representation (Forensic IR), and automatically applies SHA-256 evidence sealing and STIX 2.1 formatting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
