import SectionHeader from '../components/SectionHeader';

export default function LearnMore() {
  const links = [
    {
      title: 'GitHub Organization',
      description: 'Explore source code repositories, language specs, and compiler source.',
      href: 'https://github.com',
      badge: 'Repository',
    },
    {
      title: 'Interactive Demo',
      description: 'Run sample JOCKY specs inside an isolated web environment [Placeholder].',
      href: '#',
      badge: 'Demo Placeholder',
    },
    {
      title: 'Specification Documentation',
      description: 'Detailed grammar reference, standard library docs, and dialect definitions [Placeholder].',
      href: '#',
      badge: 'Docs Placeholder',
    },
  ];

  return (
    <section id="learn-more" className="scroll-mt-20 space-y-6">
      <SectionHeader
        number="09"
        title="Learn More"
        description="Links to external resources, code repositories, and documentation artifacts."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
        {links.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="p-4 rounded border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-emerald-400">
                  {item.badge}
                </span>
                <span className="text-neutral-500 group-hover:text-emerald-400 font-mono text-xs transition-colors">↗</span>
              </div>
              <h3 className="text-base font-bold font-sans text-neutral-200 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-xs font-sans text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
