import SectionHeader from '../components/SectionHeader';
import ExecutionFlowDiagram from '../components/ExecutionFlowDiagram';

export default function ForensicExecution() {
  return (
    <section id="forensic-execution" className="scroll-mt-20 space-y-6">
      <SectionHeader
        number="06"
        title="Forensic Execution"
        description="Lifecycle of an investigation primitive from specification resolution to cryptographic integrity verification and STIX finding generation."
      />

      <div className="space-y-6 font-sans">
        <ExecutionFlowDiagram />

        <div className="text-base text-neutral-300 leading-relaxed max-w-3xl space-y-3 font-sans">
          <h4 className="text-base font-bold text-neutral-100">Cryptographic Chain of Custody</h4>
          <p>
            During native acquisition, JOCKY binds explicit provenance metadata (timestamps, system environment details, execution parameters) directly to raw evidence buffers. The evidence sealer calculates SHA-256 digests before serializing into standard STIX 2.1 threat intelligence bundles, ensuring complete tamper-evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
