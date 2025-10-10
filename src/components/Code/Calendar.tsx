"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"


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
      <div className="w-full h-[100px] rounded-xl bg-[linear-gradient(90deg,hsla(33,100%,53%,1)_0%,hsla(58,100%,68%,1)_100%)]  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">

      </div>
    </div>
  )
}

export default Calendar1