"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"


function Calendar1() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <div className="flex flex-col gap-2 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      />
      <div className="bg-neutral-100 dark:bg-neutral-900 w-full h-[100px] rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] relative">
        <div
          className={cn(
              "h-full md:h-full absolute inset-0",
              "[background-size:5px_5px]",
              "[background-image:linear-gradient(to_right,rgba(228,228,231,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.7)_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.7)_1px,transparent_1px)]"
            )}
          />
      </div>
    </div>
  )
}

export default Calendar1