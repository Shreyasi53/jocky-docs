import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import Installation from './sections/Installation';
import WhatIsJocky from './sections/WhatIsJocky';
import QuickStart from './sections/QuickStart';
import HowItWorks from './sections/HowItWorks';
import Architecture from './sections/Architecture';
import ForensicExecution from './sections/ForensicExecution';
import Technology from './sections/Technology';
import WhatWeBuilt from './sections/WhatWeBuilt';
import LearnMore from './sections/LearnMore';

function App() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090909] text-[#a1a1aa] font-sans selection:bg-[#00c896]/20 selection:text-[#00c896]">
      <Navbar onToggleMobileMenu={() => setMobileSidebarOpen(!mobileSidebarOpen)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10">
          <Sidebar
            mobileOpen={mobileSidebarOpen}
            onClose={() => setMobileSidebarOpen(false)}
          />

          <main className="flex-1 min-w-0 py-8 space-y-16 max-w-3xl">
            <Hero />
            <Installation />
            <WhatIsJocky />
            <QuickStart />
            <HowItWorks />
            <Architecture />
            <ForensicExecution />
            <Technology />
            <WhatWeBuilt />
            <LearnMore />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
