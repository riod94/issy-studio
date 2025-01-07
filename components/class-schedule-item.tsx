interface ClassScheduleItemProps {
  time: string
  duration: string
  name: string
  type: string
  availability: {
    status: 'available' | 'full'
    slots?: number
    total?: number
  }
}

export function ClassScheduleItem({
  time,
  duration,
  name,
  type,
  availability
}: ClassScheduleItemProps) {
  return (
    <div className="flex items-center justify-between py-6 border-b">
      <div className="flex items-start gap-8">
        <div className="w-32">
          <div className="text-primary font-medium">{time}</div>
          <div className="text-sm text-gray-500">{duration} Mins</div>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-1">{name}</h3>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
            {type}
          </span>
          <div className="text-sm text-gray-500 mt-1">For Group</div>
        </div>
      </div>
      <div>
        {availability.status === 'available' ? (
          <div className="text-blue-500">
            {availability.slots} Slot Available <br />
            of {availability.total}
          </div>
        ) : (
          <div className="text-red-500">Full</div>
        )}
      </div>
    </div>
  )
}

