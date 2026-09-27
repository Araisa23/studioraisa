export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-glow left-1/4 top-0 h-[420px] w-[420px] bg-primary/40" />
      <div className="ambient-glow bottom-10 right-10 h-[520px] w-[520px] bg-violet-400/50" />
      <div className="ambient-glow left-10 top-1/2 h-[360px] w-[360px] bg-pink-400/40" />
    </div>
  )
}
