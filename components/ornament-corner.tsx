interface OrnamentCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export function OrnamentCorner({ position }: OrnamentCornerProps) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 -scale-x-100",
    "bottom-left": "bottom-0 left-0 -scale-y-100",
    "bottom-right": "bottom-0 right-0 scale-[-1]",
  }

  return (
    <div className={`absolute ${positionClasses[position]} w-32 h-32 pointer-events-none`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full text-primary/20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Kazakh ornamental pattern */}
        <path
          d="M10 60 Q30 30 60 10 Q40 40 60 60 Q40 80 60 110 Q30 90 10 60"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 60 Q35 40 50 20"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M20 60 Q35 80 50 100"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="60" cy="60" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M52 60 L68 60 M60 52 L60 68"
          stroke="currentColor"
          strokeWidth="1"
        />
        {/* Spiral elements */}
        <path
          d="M25 25 Q35 15 45 25 Q55 35 45 45 Q35 55 25 45"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  )
}
