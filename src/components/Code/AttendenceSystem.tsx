"use client"
import { useEffect, useState } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'
import { cn } from '../../lib/utils';

const data = [
  {
    date: '2025-01-01',
    count: 2,
    level: 1,
  },
  {
    date: '2025-08-02',
    count: 16,
    level: 4,
  },
  {
    date: '2025-12-31',
    count: 11,
    level: 3,
  },
]



function AttendenceSystem() {


  return <div className="w-full h-auto mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center bg-neutral-100 dark:bg-neutral-800 py-5 px-2 mx-auto w-full md:px-8">
        <ActivityCalendar
          fontSize={13}
          blockMargin={4}
          blockRadius={2}
          blockSize={12}
          theme={{
            light: ['#404040', '#0e4429', '#006d32', '#26a641', '#39d353'],
            dark:  ['#e5e5e5', '#0e4429', '#006d32', '#26a641', '#39d353'], // example blue scale for dark mode
          }}
          style={{
            borderRadius: '4px',
            fontFamily: 'sans-serif',
            fontWeight: '500',
            width: '100%',
            maxWidth: '100%', // Add this line
            display: 'block',  // Add this line
          }}
          hideColorLegend
          data={data}
        />
      </div>
    </div>
}

export default AttendenceSystem