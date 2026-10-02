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
        { name: 'GitHub', href: 'https://github.com/Debashich/mahoraga.git', external: true },
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

    const handleScroll = () => {
      // Top of page
      if (window.scrollY < 80) {
        setActiveId('#hero');
        return;
      }

      // Bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveId('#learn-more');
        return;
      }

      // Section scroll spy
      const offset = 120;
      let currentActive = '#hero';

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset) {
            currentActive = `#${id}`;
          } else {
            break;
          }
        }
      }

      setActiveId(currentActive);
    };

    handleScroll();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const navContent = (
    <nav className="space-y-5 text-[13px] font-sans">
      {navigation.map((section) => (
        <div key={section.group} className="space-y-1">
          <h4 className="font-mono text-[10px] font-bold text-[#71717a] uppercase tracking-wider">
            {section.group}
          </h4>
          <ul className="space-y-0.5 border-l border-[#252525]">
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
                        ? 'text-[#B08A3E] font-medium border-l border-[#B08A3E]'
                        : 'text-[#a1a1aa] hover:text-[#f5f5f5] border-l border-transparent'
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
      <aside className="w-56 shrink-0 hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-5 pr-4 border-r border-[#252525]">
        {navContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="relative w-64 max-w-full bg-[#090909] border-r border-[#252525] p-5 overflow-y-auto z-10 space-y-5">
            <div className="flex items-center justify-between border-b border-[#252525] pb-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#f5f5f5]">
                <span className="text-[#B08A3E]">JK</span> JOCKY DOCS
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-[#71717a] hover:text-[#f5f5f5] p-1 font-mono text-xs"
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
