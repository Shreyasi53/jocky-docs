import { useEffect, useState } from 'react';

export default function Sidebar({ mobileOpen, onClose }) {
  const [activeId, setActiveId] = useState('#hero');

  const navigation = [
    {
      group: 'GETTING STARTED',
      items: [
        { name: 'Introduction', href: '#hero' },
        { name: 'Installation', href: '#installation' },
        { name: 'Quick Start', href: '#quick-start' },
      ],
    },
    {
      group: 'UNDERSTANDING JOCKY',
      items: [
        { name: 'What is JOCKY?', href: '#what-is-jocky' },
        { name: 'How JOCKY Works', href: '#how-it-works' },
        { name: 'Architecture', href: '#architecture' },
        { name: 'Forensic Execution', href: '#forensic-execution' },
      ],
    },
    {
      group: 'REFERENCE',
      items: [
        { name: 'Technology', href: '#technology' },
        { name: 'What We Built', href: '#what-we-built' },
      ],
    },
    {
      group: 'RESOURCES',
      items: [
        { name: 'Learn More', href: '#learn-more' },
        { name: 'GitHub', href: 'https://github.com/Shreyasi53/mahoraga', external: true },
      ],
    },
  ];

  useEffect(() => {
    const sectionIds = [
      'hero',
      'installation',
      'quick-start',
      'what-is-jocky',
      'how-it-works',
      'architecture',
      'forensic-execution',
      'technology',
      'what-we-built',
      'learn-more',
    ];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(`#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-70px 0px -65% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navContent = (
    <nav className="space-y-5 text-[13px] font-sans">
      {navigation.map((section) => (
        <div key={section.group} className="space-y-1">
          <h4 className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
            {section.group}
          </h4>
          <ul className="space-y-0.5 border-l border-neutral-800/80">
            {section.items.map((item) => {
              const isActive = activeId === item.href;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => {
                      if (!item.external) setActiveId(item.href);
                      if (onClose) onClose();
                    }}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className={`block pl-3 py-0.5 -ml-px transition-colors leading-normal ${
                      isActive
                        ? 'text-emerald-400 font-medium border-l-2 border-emerald-400'
                        : 'text-neutral-400 hover:text-neutral-200 border-l border-transparent'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-56 shrink-0 hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-5 pr-4 border-r border-neutral-800/60">
        {navContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="relative w-64 max-w-full bg-neutral-950 border-r border-neutral-800 p-5 overflow-y-auto z-10 space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-100">
                <span className="text-emerald-400">JK</span> JOCKY DOCS
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-neutral-400 hover:text-neutral-100 p-1 font-mono text-xs"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            {navContent}
          </div>
        </div>
      )}
    </>
  );
}
