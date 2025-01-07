interface CalendarCellProps {
  date: number
  day: string
  isSelected?: boolean
  isToday?: boolean
  onClick?: () => void
}

export function CalendarCell({
  date,
  day,
  isSelected,
  isToday,
  onClick
}: CalendarCellProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-2 rounded-lg transition-colors
        ${isSelected ? 'bg-primary text-white' : 'hover:bg-gray-100'}
        ${isToday ? 'border-2 border-primary' : ''}
      `}
    >
      <span className="text-sm font-medium">{day}</span>
      <span className="text-lg">{date}</span>
    </button>
  )
}

