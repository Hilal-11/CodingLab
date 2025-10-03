import AttendenceSystem from '@/components/Code/AttendenceSystem'
import ProblemTopicLists from '@/components/Code/ProblemTopicLists'
import Header from '@/components/Header'
import React from 'react'

function Problems() {
  return (
    <div className='mx-aut' >
        <Header />
        <div className='py-16 main-container h-auto grid grid-cols-1 lg:grid-cols-6'>

    
            <div className='hidden lg:block h-[100%] bg-neutral-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-r-1'>
            </div>

            <div className='lg:col-span-4 w-full h-[2000px] bg-neutral-100 dark:bg-neutral-900    shadow-   [0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-r-1 mx-auto py-6'>

              <AttendenceSystem />
              <div className='px-2 py-5'>
                <ProblemTopicLists />
              </div>
            </div>

            <div className="hidden h-svh  lg:flex flex-col gap-2 z-20 bg-neutral-100 dark:bg-neutral-900    shadow-   [0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
           
            </div>


</div>
    </div>
  )
}

export default Problems
