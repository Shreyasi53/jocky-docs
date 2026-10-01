import SectionHeader from '../components/SectionHeader';
import TechnologyGrid from '../components/TechnologyGrid';

export default function Technology() {
  return (
    <section id="technology" className="scroll-mt-20 space-y-6">
      <SectionHeader
        number="07"
        title="Technology"
        description="Core technical stack powering the JOCKY compiler, execution runtime, and artifact interchange ecosystem."
      />

      <TechnologyGrid />
    </section>
  );
}
