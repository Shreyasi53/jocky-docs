import SectionHeader from '../components/SectionHeader';
import PipelineDiagram from '../components/PipelineDiagram';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 space-y-6">
      <SectionHeader
        number="04"
        title="How JOCKY Works"
        description="The multi-stage compilation and execution pipeline transforming declarative JOCKY specifications into native system operations."
      />

      <div className="space-y-6 font-sans">
        <PipelineDiagram />

        <div className="text-base text-neutral-300 leading-relaxed max-w-3xl space-y-3 font-sans">
          <p>
            JOCKY processes investigation files through a traditional compiler architecture extended with specialized forensic semantics:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-neutral-400 pl-2">
            <li><strong className="text-neutral-200">Parsing & AST Generation</strong>: Converts raw DSL text into a structured Abstract Syntax Tree representation.</li>
            <li><strong className="text-neutral-200">Semantic Validation</strong>: Checks capability constraints, provider availability, and execution permissions before compilation.</li>
            <li><strong className="text-neutral-200">MLIR Forensic Dialect Passes</strong>: Translates AST into intermediate representations for platform-agnostic optimization.</li>
            <li><strong className="text-neutral-200">Native Lowering</strong>: Maps intermediate instructions directly to native C++ platform collectors on target hosts.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
