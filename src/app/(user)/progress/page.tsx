import AttendenceSystem from '@/components/Code/AttendenceSystem'
import Header from '@/components/Header'
import React from 'react'

function page() {
  return (
    <div className=''>
        <Header />
      <div className='mx-auto container h-svh w-svw py-20'>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            <div className='row-span-3 p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
            </div>
            <div className='md:col-span-3 lg:col-span-4 p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <AttendenceSystem />
            </div>
            <div className='row-span-6 md:col-span-3 lg:col-span-4 p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                
            </div>
            <div className='row-span-2 p-5 bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default page
