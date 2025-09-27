import React from 'react'
import { cn } from "@/lib/utils";
import CodeBlock from '@/components/CodeBlock';
function Hero() {
  return (
    <div>
      <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className='lg:pt-36 pt-20 px-4 md:px-8 w-full flex justify-center items-center'>
        <div className='w-full z-40 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 justify-between'>
            <div className='flex flex-col items-center '>
                <h1 className='text-neutral-700 dark:text-neutral-200 lg:px-4 lg:text-5xl md:text-4xl lg:text-left text-center leading-tight text-3xl font-bold font-sans'>Solve problems, practice interviews, and rise to the top with our problem-solving platform.</h1> <br />
                <p className='text-md font-sans px-4 lg:px-10 mx-auto py-6'>Deadlock is your ultimate coding arena — designed to help you strengthen problem-solving skills, prepare for coding interviews, and compete in global contests. Whether you’re a beginner or expert, we give you the tools to grow as a developer.</p>
                <div className='flex flex-wrap gap-4 justify-center items-center py-6'>
                    <button className='font-sans px-10 py-2 rounded-md bg-neutral-900 text-neutral-100 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Explore Problems</button>
                    <button className='font-sans px-10 py-2 rounded-md bg-white dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Start Practice</button>
                </div>
            </div>
             <div className='z-40'>
                <CodeBlock /> 
            </div>
        </div>
      </div>  
    </div>
  )
}



export default Hero
