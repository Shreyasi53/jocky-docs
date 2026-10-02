export default function ArchitectureDiagram() {
  return (
    <figure className="my-6 space-y-2">
      <div className="rounded-lg border border-[#27272a] bg-[#09090b] p-3 sm:p-4 overflow-x-auto shadow-xl">
        <div className="min-w-[600px] sm:min-w-0 flex items-center justify-center">
          <img
            src="/Jocky.drawio (1).svg"
            alt="JOCKY System Architecture"
            className="w-full h-auto block rounded"
          />
        </div>
      </div>
      <figcaption className="text-center font-mono text-xs text-[#71717a] pt-1">
        JOCKY System Architecture
      </figcaption>
    </figure>
  );
}
