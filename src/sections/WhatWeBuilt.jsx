import SectionHeader from '../components/SectionHeader';

export default function WhatWeBuilt() {
  const items = [
    { title: 'DSL Specification & Grammar', note: 'Formal syntax and grammar rules for forensic collection requests.' },
    { title: 'Lexer & Parser Frontend', note: 'AST generation and syntax validation toolchain.' },
    { title: 'Forensic Intermediate Representation (IR)', note: 'Intermediate representation schema for forensic ops.' },
    { title: 'Extensible Provider Architecture', note: 'Modular OS collection engines for Windows and Linux.' },
    { title: 'Cryptographic Evidence Sealing', note: 'Automated SHA-256 hash digests and metadata binding.' },
    { title: 'STIX 2.1 Format Serialization', note: 'Standardized threat intelligence format export.' },
    { title: 'Command-Line Interface (CLI)', note: 'Developer and practitioner compiler runner.' },
  ];

  const romanNumerals = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.'];

  return (
    <section id="what-we-built" className="scroll-mt-20 space-y-6">
      <SectionHeader
        number="08"
        title="What We Built"
        description="Overview of core system modules developed within the JOCKY project."
      />

      <div className="space-y-4 font-sans">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="py-3 border-b border-[#252525] last:border-b-0 flex items-start gap-4"
          >
            <span className="font-mono text-xs font-bold text-[#B08A3E] shrink-0 mt-0.5">
              {romanNumerals[index]}
            </span>
            <div className="space-y-0.5">
              <h3 className="text-base font-bold text-[#f5f5f5] font-sans">{item.title}</h3>
              <p className="text-sm text-[#a1a1aa] font-sans leading-relaxed">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
