export function CalendarSection() {
  // August 2026 calendar
  const weddingDay = 7
  const month = "ТАМЫЗ"
  const year = 2026
  const dayOfWeek = "ЖҰМА"

  // August 2026 starts on Saturday (index 5 in 0-based, where Monday is 0)
  // Days: Mon=0, Tue=1, Wed=2, Thu=3, Fri=4, Sat=5, Sun=6
  const daysInMonth = 31
  const startDay = 5 // Saturday

  const weekDays = ["ДС", "СС", "СР", "БС", "ЖМ", "СН", "ЖС"]

  // Generate calendar grid
  const calendarDays: (number | null)[] = []
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-sm mx-auto">
        {/* Title */}
        <h3 
          className="text-3xl text-primary text-center mb-8"
          style={{ fontFamily: 'var(--font-balmoral)' }}
        >
          Той салтанаты:
        </h3>

        {/* Date display */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-lg font-medium text-foreground">{dayOfWeek}</span>
          <div className="flex items-center">
            <div className="border-l-2 border-primary h-16 mx-4" />
            <div className="text-center">
              <span className="text-5xl font-bold text-foreground">{weddingDay}</span>
              <p className="text-sm text-muted-foreground mt-1">{year}</p>
            </div>
            <div className="border-r-2 border-primary h-16 mx-4" />
          </div>
          <span className="text-lg font-medium text-foreground">{month}</span>
        </div>

        {/* Calendar grid */}
        <div className="bg-card rounded-lg p-4 shadow-sm">
          {/* Week days header */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {weekDays.map((day, index) => (
              <div 
                key={day} 
                className={`text-center text-sm font-medium ${
                  index === 4 ? 'text-primary' : 'text-foreground'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`text-center py-2 text-sm ${
                  day === weddingDay
                    ? 'relative'
                    : day
                    ? 'text-foreground'
                    : ''
                }`}
              >
                {day === weddingDay ? (
                  <span className="relative inline-flex items-center justify-center">
                    <svg 
                      className="absolute w-10 h-10 text-primary" 
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M20 5 L23 15 L20 12 L17 15 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <path
                        d="M20 8 Q28 16 28 22 Q28 32 20 35 Q12 32 12 22 Q12 16 20 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="relative z-10 font-semibold text-primary">{day}</span>
                  </span>
                ) : (
                  day
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
