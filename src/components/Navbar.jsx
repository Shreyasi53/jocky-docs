export default function Navbar({ onToggleMobileMenu }) {
  const navLinks = [
    { name: 'Docs', href: '#installation' },
    { name: 'Quick Start', href: '#quick-start' },
    { name: 'Architecture', href: '#architecture' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#090909]/90 backdrop-blur-md border-b border-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleMobileMenu}
              className="lg:hidden text-[#71717a] hover:text-[#f5f5f5] focus:outline-none p-1 rounded hover:bg-[#111111] border border-[#252525]"
              aria-label="Open documentation navigation"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <a href="#hero" className="flex items-center gap-2.5 group">
              <img src="/jocky.png" alt="Jocky Logo" className="w-6 h-6 object-contain drop-shadow" />
              <div className="flex items-baseline gap-2">
                <span className="font-mono font-bold text-sm text-[#f5f5f5] tracking-wider transition-colors">
                  JOCKY
                </span>
                <span className="text-[10px] font-mono text-[#71717a] uppercase tracking-widest border-l border-[#252525] pl-2">
                  FORENSIC DSL
                </span>
              </div>
            </a>
          </div>

          {/* Right Navigation & GitHub Icon */}
          <div className="flex items-center gap-5 text-sm font-sans">
            <nav className="hidden sm:flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors text-xs sm:text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="h-4 w-px bg-[#252525] hidden sm:block" />

            <a
              href="https://github.com/Debashich/mahoraga.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#f5f5f5] transition-colors p-1 rounded hover:bg-[#111111]"
              title="GitHub"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
