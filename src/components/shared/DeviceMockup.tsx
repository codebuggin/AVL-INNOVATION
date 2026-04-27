export function WebsiteMockup() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-bg-elevated p-8">
      <div className="absolute inset-10 rounded-full bg-purple-glow-radial opacity-50 blur-3xl" />
      <div className="relative mx-auto mt-12 max-w-sm rounded-xl border border-border-strong bg-bg p-4 shadow-purple-glow">
        <div className="mb-4 flex gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-light" />
          <span className="h-2 w-2 rounded-full bg-purple" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
        </div>
        <div className="space-y-3">
          <div className="h-10 rounded-lg bg-purple-gradient" />
          <div className="h-20 rounded-lg bg-white/5" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 rounded-lg bg-white/5" />
            <div className="h-16 rounded-lg bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AppMockup() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-bg-elevated p-8">
      <div className="absolute inset-10 rounded-full bg-purple-glow-radial opacity-50 blur-3xl" />
      <div className="relative mx-auto h-full max-h-[520px] w-[220px] rounded-[40px] border-2 border-border-strong bg-bg p-4 shadow-card">
        <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-white/20" />
        <div className="space-y-4">
          <div className="h-20 rounded-2xl bg-purple-gradient" />
          <div className="h-28 rounded-2xl bg-white/5" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-20 rounded-2xl bg-white/5" />
            <div className="h-20 rounded-2xl bg-white/5" />
          </div>
          <div className="h-12 rounded-2xl bg-white/5" />
        </div>
      </div>
    </div>
  )
}

export function ChatbotMockup() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-bg-elevated p-8">
      <div className="absolute inset-10 rounded-full bg-purple-glow-radial opacity-50 blur-3xl" />
      <div className="relative mx-auto mt-8 max-w-md rounded-3xl border border-border-strong bg-bg p-6 shadow-purple-glow">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-purple-gradient" />
          <div>
            <p className="font-display text-lg font-bold">Website Assistant</p>
            <p className="text-xs text-text-muted">Online now</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="max-w-[80%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-text-soft">
            Hi, what service are you looking for?
          </div>
          <div className="ml-auto max-w-[78%] rounded-2xl bg-purple px-4 py-3 text-sm text-white">
            I need a website for my clinic.
          </div>
          <div className="max-w-[86%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-text-soft">
            Great. I can collect your details and send them to the AVL team.
          </div>
          <div className="mt-8 h-12 rounded-full border border-border bg-white/5" />
        </div>
      </div>
    </div>
  )
}
