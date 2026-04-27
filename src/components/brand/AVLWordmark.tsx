interface AVLWordmarkProps {
  className?: string
  compact?: boolean
}

export default function AVLWordmark({ className = '', compact = false }: AVLWordmarkProps) {
  return (
    <div className={`inline-flex items-center gap-3 leading-none ${className}`}>
      <svg className={compact ? 'h-9 w-[78px]' : 'h-11 w-[96px]'} viewBox="0 0 180 82" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="avlWordmarkGradient" x1="8" y1="8" x2="116" y2="78" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B066FF" />
            <stop offset="1" stopColor="#6D2BF2" />
          </linearGradient>
        </defs>
        <path d="M8 64 36 17h18l29 47H62L45 35 28 64H8Z" fill="url(#avlWordmarkGradient)" />
        <path d="M72 17h20l28 35 25-35h21l-40 47h-17L72 17Z" fill="url(#avlWordmarkGradient)" />
        <path d="M139 25c11-14 22-20 31-17 7 2 8 9 4 15" stroke="#C9A6FF" strokeWidth="5" strokeLinecap="round" />
        <circle cx="166" cy="32" r="7" fill="#C9A6FF" />
        <path d="M146 35h16v28h28l-10 9h-34V35Z" fill="#F8F7FF" />
      </svg>
      {!compact ? (
        <span className="hidden sm:block">
          <span className="block font-display text-[15px] font-extrabold tracking-[0.16em] text-white">AVL</span>
          <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.34em] text-text-muted">Innovation</span>
        </span>
      ) : null}
    </div>
  )
}
