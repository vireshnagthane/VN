import React, { useState } from 'react';

export interface CalendarDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ActivityCalendarProps {
  days: CalendarDay[];
  colorScheme?: 'green' | 'amber';
  emptyLabel?: string;
}

export const ActivityCalendar: React.FC<ActivityCalendarProps> = ({
  days,
  colorScheme = 'green',
  emptyLabel = 'No activity on this day',
}) => {
  const [hoveredDay, setHoveredDay] = useState<{ day: CalendarDay; x: number; y: number } | null>(null);

  // Group days into 7-day columns (weeks)
  const weeks: CalendarDay[][] = [];
  let currentWeek: CalendarDay[] = [];

  // Pad the first week to align with the correct day of week
  if (days.length > 0) {
    const firstDate = new Date(days[0].date);
    const firstDayIndex = firstDate.getDay(); // 0 is Sunday
    for (let i = 0; i < firstDayIndex; i++) {
      currentWeek.push({ date: '', count: -1, level: 0 });
    }
  }

  days.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push({ date: '', count: -1, level: 0 });
    }
    weeks.push(currentWeek);
  }

  // Get color for intensity level
  const getColorClass = (level: number, count: number) => {
    if (count === -1) return 'opacity-0 pointer-events-none';
    if (level === 0 || count === 0) {
      return 'bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.03] dark:border-white/[0.04]';
    }

    if (colorScheme === 'green') {
      switch (level) {
        case 1:
          return 'bg-emerald-200 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-800';
        case 2:
          return 'bg-emerald-400 dark:bg-emerald-700 border-emerald-500 dark:border-emerald-600';
        case 3:
          return 'bg-emerald-500 dark:bg-emerald-500 border-emerald-600 dark:border-emerald-400';
        case 4:
        default:
          return 'bg-emerald-600 dark:bg-emerald-400 border-emerald-700 dark:border-emerald-300';
      }
    } else {
      switch (level) {
        case 1:
          return 'bg-amber-200 dark:bg-amber-950/80 border-amber-300 dark:border-amber-800';
        case 2:
          return 'bg-amber-400 dark:bg-amber-700 border-amber-500 dark:border-amber-600';
        case 3:
          return 'bg-amber-500 dark:bg-amber-500 border-amber-600 dark:border-amber-400';
        case 4:
        default:
          return 'bg-amber-600 dark:bg-amber-400 border-amber-700 dark:border-amber-300';
      }
    }
  };

  // Extract month labels along top
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthHeaders: { name: string; colIndex: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, wIndex) => {
    const validDay = week.find((d) => d.date && d.count !== -1);
    if (validDay) {
      const month = new Date(validDay.date).getMonth();
      if (month !== lastMonth) {
        monthHeaders.push({ name: months[month], colIndex: wIndex });
        lastMonth = month;
      }
    }
  });

  return (
    <div className="w-full relative">
      {/* Scrollable Container with nice fade indicator */}
      <div className="w-full overflow-x-auto pb-2 pt-1 scrollbar-thin">
        <div className="min-w-[650px] sm:min-w-full">
          {/* Month labels positioned precisely above their start week */}
          <div className="relative h-4 text-[10px] text-muted-foreground font-mono mb-1 select-none">
            {monthHeaders.map((m, idx) => (
              <span
                key={idx}
                className="absolute"
                style={{ left: `${28 + m.colIndex * 15}px` }}
              >
                {m.name}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            {/* Day of week labels */}
            <div className="flex flex-col justify-between text-[9px] text-muted-foreground font-mono py-0.5 select-none w-5">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Grid of days */}
            <div className="flex gap-[3.5px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3.5px]">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={(e) => {
                        if (day.count !== -1 && day.date) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({ day, x: rect.left + rect.width / 2, y: rect.top });
                        }
                      }}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`size-[11px] sm:size-[11.5px] rounded-[2.5px] transition-transform duration-100 hover:scale-125 cursor-pointer ${getColorClass(
                        day.level,
                        day.count
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tooltip */}
      {hoveredDay && (
        <div
          className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-full mb-2 px-2.5 py-1 text-[11px] rounded-lg shadow-md bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 font-medium whitespace-nowrap animate-in fade-in zoom-in-95 duration-100"
          style={{ left: hoveredDay.x, top: hoveredDay.y - 6 }}
        >
          {hoveredDay.day.count > 0 ? (
            <span>
              <strong>{hoveredDay.day.count}</strong> contribution{hoveredDay.day.count > 1 ? 's' : ''} on{' '}
              {new Date(hoveredDay.day.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          ) : (
            <span>
              {emptyLabel} on{' '}
              {new Date(hoveredDay.day.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-muted-foreground font-mono">
        <span>Less</span>
        <div className="size-2.5 rounded-[2px] bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.03] dark:border-white/[0.04]" />
        <div className="size-2.5 rounded-[2px] bg-emerald-200 dark:bg-emerald-950/80" />
        <div className="size-2.5 rounded-[2px] bg-emerald-400 dark:bg-emerald-700" />
        <div className="size-2.5 rounded-[2px] bg-emerald-500 dark:bg-emerald-500" />
        <div className="size-2.5 rounded-[2px] bg-emerald-600 dark:bg-emerald-400" />
        <span>More</span>
      </div>
    </div>
  );
};
