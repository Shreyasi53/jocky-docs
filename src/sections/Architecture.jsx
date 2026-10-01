import SectionHeader from '../components/SectionHeader';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

export default function Architecture() {
  return (
    <section id="architecture" className="scroll-mt-20 space-y-6">
      <SectionHeader
        number="05"
        title="Architecture"
        description="System layout highlighting the decoupling of DSL specifications, compiler intermediate layers, system providers, and forensic evidence generation."
      />

      <div className="space-y-6 font-sans">
        <ArchitectureDiagram />

        <div className="text-base text-neutral-300 leading-relaxed max-w-3xl space-y-3 font-sans">
          <h4 className="text-base font-bold text-neutral-100">Decoupled Compiler Abstraction</h4>
          <p>
            The JOCKY architecture maintains clean separation between high-level investigation semantics and low-level host execution. High-level DSL collection statements are compiled to target-agnostic Forensic IR, allowing seamless extension of OS providers (Linux, Windows) without altering existing investigation scripts.
          </p>
        </div>
      </div>
    </section>
  );
}
