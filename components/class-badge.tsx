interface ClassBadgeProps {
  type: "GROUP CLASS" | "CHAIR CLASS"
  className?: string
}

export function ClassBadge({ type, className }: ClassBadgeProps) {
  return (
    <span 
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-800 ${className}`}
    >
      {type}
    </span>
  )
}

