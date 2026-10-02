import SectionHeader from '../components/SectionHeader';
import TerminalCard from '../components/TerminalCard';
import CodeBlock from '../components/CodeBlock';

export default function Installation() {
  return (
    <section id="installation" className="scroll-mt-20 space-y-6">
      <SectionHeader
        number="01"
        title="Installation"
        description="Step-by-step developer guide for cloning, compiling, and running JOCKY."
      />

      <div className="space-y-6 font-sans">
        {/* 01 Requirements */}
        <div className="space-y-2.5 pt-3 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-[#B08A3E]">01.</span>
            <h3 className="text-sm font-bold text-[#f5f5f5] font-sans">Requirements</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
            Verify that system prerequisites, native toolchains, Python runtime, and container tools are installed before building.
          </p>

          <div className="p-3 rounded border border-[#252525] bg-[#111111]/60 font-mono text-xs space-y-2">
            <div className="text-[#71717a] font-bold uppercase tracking-wider text-[10px]">
              Required Toolchain & Versions
            </div>
            <ul className="space-y-1 text-[#a1a1aa] text-[11px]">
              <li className="flex items-center gap-2">
                <span className="text-[#71717a] font-bold">✓</span>
                <span><strong className="text-[#f5f5f5] font-sans">Docker & Docker Compose</strong> — Containerized execution runtime</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#71717a] font-bold">✓</span>
                <span><strong className="text-[#f5f5f5] font-sans">Node.js v20+</strong> — Frontend UI runtime</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#71717a] font-bold">✓</span>
                <span><strong className="text-[#f5f5f5] font-sans">Python 3.12+</strong> — Compiler frontend & CMI backend</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#71717a] font-bold">✓</span>
                <span><strong className="text-[#f5f5f5] font-sans">C++ Compiler (C++17)</strong> — GCC / Clang on Linux, MSVC on Windows</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#71717a] font-bold">✓</span>
                <span><strong className="text-[#f5f5f5] font-sans">CMake 3.14+</strong> — Native build generator</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 02 Clone the repository */}
        <div className="space-y-2.5 pt-4 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-[#B08A3E]">02.</span>
            <h3 className="text-sm font-bold text-[#f5f5f5] font-sans">Clone the repository</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
            Clone the Mahoraga repository from GitHub and move into the project workspace.
          </p>

          <TerminalCard
            title="Terminal"
            code={`git clone https://github.com/Debashich/mahoraga.git\ncd mahoraga`}
          />
        </div>

        {/* 03 Python environment */}
        <div className="space-y-2.5 pt-4 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-[#B08A3E]">03.</span>
            <h3 className="text-sm font-bold text-[#f5f5f5] font-sans">Python environment</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
            Initialize and activate an isolated Python 3.12 virtual environment to manage compiler tooling and CMI dependencies.
          </p>

          <TerminalCard
            title="Terminal"
            tabs={[
              {
                label: 'Linux / macOS',
                language: 'bash',
                code: `python3 -m venv .venv\nsource .venv/bin/activate`,
              },
              {
                label: 'Windows PowerShell',
                language: 'powershell',
                code: `python -m venv .venv\n.venv\\Scripts\\Activate.ps1`,
              },
            ]}
          />
        </div>

        {/* 04 Install dependencies */}
        <div className="space-y-2.5 pt-4 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-[#B08A3E]">04.</span>
            <h3 className="text-sm font-bold text-[#f5f5f5] font-sans">Install dependencies</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
            Install the Python packages required by the FastAPI CMI backend, AST parser, and dialect compilation tooling.
          </p>

          <TerminalCard
            title="Terminal"
            code={`pip install -r backend/requirements.txt`}
          />
        </div>

        {/* 05 Build native runtime */}
        <div className="space-y-2.5 pt-4 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-[#B08A3E]">05.</span>
            <h3 className="text-sm font-bold text-[#f5f5f5] font-sans">Build native runtime</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
            Build the native C++ runtime binary used by platform forensic providers for low-level system collection routines.
          </p>

          <TerminalCard
            title="Terminal"
            tabs={[
              {
                label: 'Linux',
                language: 'bash',
                code: `mkdir -p build\ncd build\ncmake ..\nmake -j$(nproc)\ncd ..`,
              },
              {
                label: 'Windows PowerShell',
                language: 'powershell',
                code: `cmake -S . -B build\ncmake --build build --config Release`,
              },
            ]}
            expected="build/mahoraga-run (Linux) or build/Release/mahoraga-run.exe (Windows)"
          />
        </div>

        {/* 06 Start CMI backend */}
        <div className="space-y-2.5 pt-4 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-[#B08A3E]">06.</span>
            <h3 className="text-sm font-bold text-[#f5f5f5] font-sans">Start backend</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
            Launch the FastAPI CMI backend service on port 8000 for handling DSL compilation requests and provider execution.
          </p>

          <TerminalCard
            title="Terminal"
            code={`uvicorn cmi.server:app --reload --host 0.0.0.0 --port 8000`}
          />

          <div className="p-2.5 rounded border border-[#252525] bg-[#111111]/40 font-mono text-xs flex flex-wrap items-center justify-between gap-2">
            <span className="text-[#71717a]">CMI API Endpoint:</span>
            <div className="flex gap-4">
              <a href="http://localhost:8000" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f5f5f5] underline">
                LIVE → http://localhost:8000
              </a>
              <a href="http://localhost:8000/docs" target="_blank" rel="noopener noreferrer" className="text-[#71717a] hover:text-[#f5f5f5]">
                Docs → http://localhost:8000/docs
              </a>
            </div>
          </div>
        </div>

        {/* 07 Start frontend */}
        <div className="space-y-2.5 pt-4 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-[#B08A3E]">07.</span>
            <h3 className="text-sm font-bold text-[#f5f5f5] font-sans">Start frontend</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
            Install dependencies and launch the Vite development server for the Jocky Forensic Workbench frontend application.
          </p>

          <TerminalCard
            title="Terminal"
            code={`cd frontend\nnpm install\nnpm run dev`}
          />

          <div className="p-2.5 rounded border border-[#252525] bg-[#111111]/40 font-mono text-xs flex items-center justify-between">
            <span className="text-[#71717a]">Workbench URL:</span>
            <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f5f5f5] underline">
              http://localhost:5173
            </a>
          </div>
        </div>

        {/* 08 Docker setup */}
        <div className="space-y-2.5 pt-4 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-[#B08A3E]">08.</span>
            <h3 className="text-sm font-bold text-[#f5f5f5] font-sans">Docker setup</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
            Run the entire Mahoraga stack (backend, frontend, and native execution dependencies) using Docker Compose.
          </p>

          <TerminalCard
            title="Terminal"
            tabs={[
              {
                label: 'Docker Compose',
                language: 'bash',
                code: `docker-compose up --build`,
              },
              {
                label: 'Native Build + Docker (Linux)',
                language: 'bash',
                code: `mkdir -p build\ncd build\ncmake ..\nmake -j$(nproc)\ncd ..\ndocker-compose up --build`,
              },
            ]}
          />
        </div>

        {/* 09 Verify installation */}
        <div className="space-y-2.5 pt-4 border-t border-[#252525]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-[#B08A3E]">09.</span>
            <h3 className="text-sm font-bold text-[#f5f5f5] font-sans">Verify installation</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl">
            Confirm that all services are live and performing forensic collection routines properly.
          </p>

          <div className="space-y-3 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
              <div className="p-2 rounded border border-[#252525] bg-[#111111]/60">
                <span className="text-[#71717a] block text-[10px]">Frontend UI</span>
                <a href="http://localhost:5173" className="text-[#a1a1aa] hover:text-[#f5f5f5] underline">http://localhost:5173</a>
              </div>
              <div className="p-2 rounded border border-[#252525] bg-[#111111]/60">
                <span className="text-[#71717a] block text-[10px]">CMI Backend</span>
                <a href="http://localhost:8000" className="text-[#a1a1aa] hover:text-[#f5f5f5] underline">http://localhost:8000</a>
              </div>
              <div className="p-2 rounded border border-[#252525] bg-[#111111]/60">
                <span className="text-[#71717a] block text-[10px]">API Documentation</span>
                <a href="http://localhost:8000/docs" className="text-[#a1a1aa] hover:text-[#f5f5f5] underline">http://localhost:8000/docs</a>
              </div>
              <div className="p-2 rounded border border-[#252525] bg-[#111111]/60">
                <span className="text-[#71717a] block text-[10px]">Native Binary</span>
                <span className="text-[#f5f5f5] font-semibold">build/mahoraga-run</span>
              </div>
            </div>

            <ol className="list-decimal list-inside space-y-1 text-[#a1a1aa] leading-relaxed font-sans text-xs pt-1">
              <li>Open the frontend at <code className="text-[#a1a1aa] font-mono bg-[#111111] px-1 py-0.5 rounded border border-[#252525]">http://localhost:5173</code>.</li>
              <li>Confirm CMI displays <code className="text-[#a1a1aa] font-mono bg-[#111111] px-1 py-0.5 rounded border border-[#252525]">LIVE / CONNECTED</code>.</li>
              <li>Open API docs at <code className="text-[#a1a1aa] font-mono bg-[#111111] px-1 py-0.5 rounded border border-[#252525]">http://localhost:8000/docs</code>.</li>
              <li>Run a test JOCKY investigation spec.</li>
              <li>Confirm evidence artifacts are generated under <code className="text-[#a1a1aa] font-mono bg-[#111111] px-1 py-0.5 rounded border border-[#252525]">out/</code>.</li>
            </ol>
          </div>
        </div>

        {/* Artifact Output Block */}
        <div className="pt-4 border-t border-[#252525]">
          <h4 className="text-sm font-bold text-[#f5f5f5] font-sans mb-2">Generated Artifact Output</h4>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-6">
              <CodeBlock
                title="Artifact Tree"
                language="text"
                showLineNumbers={false}
                code={`out/
├── instructions/
│   ├── <inv_id>.json
│   └── <inv_id>.enc
└── evidence/
    ├── raw_evidence.json
    ├── <inv_id>_sealed.json
    └── <inv_id>_stix.json`}
              />
            </div>
            <div className="md:col-span-6 text-xs text-[#a1a1aa] space-y-1.5 leading-relaxed font-sans">
              <p>
                <strong className="text-[#f5f5f5] font-mono">out/instructions/</strong> contains instruction manifests (<code className="text-[#a1a1aa] font-mono">.json</code>) and encrypted execution targets (<code className="text-[#a1a1aa] font-mono">.enc</code>).
              </p>
              <p>
                <strong className="text-[#f5f5f5] font-mono">out/evidence/</strong> contains raw evidence objects, cryptographically signed packages (<code className="text-[#a1a1aa] font-mono">_sealed.json</code>), and STIX 2.1 threat intelligence bundles (<code className="text-[#a1a1aa] font-mono">_stix.json</code>).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
