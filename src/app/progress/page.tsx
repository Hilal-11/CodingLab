"use client "
import React from 'react'
import TrackProgress from '@/components/TrackGraphs/TrackProgress/ProgressTract'
function page() {
  return (
    <div>
      <TrackProgress title="Draggable Window">
        <p>You can drag this window anywhere inside the viewport.</p>
        <p>This is a simple drabble window created with Next.js and Framer Motion.</p>
      </TrackProgress>
    </div>
  )
}

export default page
