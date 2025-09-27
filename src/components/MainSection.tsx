import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils";
import bentoImage1 from "../../public/BentoImage1.avif"
import { AiOutlineCodepenCircle } from "react-icons/ai";
import { MdTrackChanges } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
function MainSection() {
  return (
    <div className='flex flex-col w-full mx-auto h-auto py-40 px-2'>

        <div className='flex flex-col justify-center items-center z-10'>
            <h1 className='text-4xl lg:text-7xl font-sans font-bold text-center px-2'>Get better by doing harder things</h1>
            <p className='py-4 text-md font-sans text-center px-6 lg:w-2/3 mx-auto text-neutral-700 dark:text-neutral-200'>Face impactful challenges that sharpen how you think and how you build. Real problems lead to real learning—and with every step, you grow into a stronger, more confident developer on your journey forward.</p>
        </div> <br /><br />

        
         
        <div className='grid grid-col-1 gap-6 '>
            <div className='col-span-2 pb-6 pt-6 grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 items-center justify-center overflow-hidden relative bg-white dark:bg-neutral-900 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] lg:h-auto md:h-auto h-auto'>
                        <div
                        className={cn(
                            "h-full md:h-full absolute inset-0",
                            "[background-size:10px_10px]",
                            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.7)_1px,transparent_1px)]",
                            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.7)_1px,transparent_1px)]"
                          )}
                        />
                        <div className=" pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-neutral-950"></div>
                
                <div className='z-30 px-6 lg:px-10'>
                    <AiOutlineCodepenCircle className='text-4xl lg:text-6xl text-orange-600' />
                    <h1 className='text-4xl lg:text-5xl font-sans font-bold py-3'>Train your brain, upgrade your code</h1>
                    <p className='text-md font-sans text-neutral-700 dark:text-neutral-200 py-5'>Take on bite-sized coding challenges designed to strengthen your problem-solving abilities and sharpen your logical thinking. Each task focuses on improving specific techniques, helping you build confidence in your primary language—or explore new technologies as you level up through real, hands-on practice and continuous progress.</p>
                    <button className='font-sans px-10 py-2 rounded-md bg-white dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Start Coding</button>
                </div>
                <div className='px-6'>
                    <Image className='z-30 relative lg:-right-20' src={bentoImage1} alt='challenge image'></Image>
                </div>

            </div>
        </div>
        <div className=' w-full grid grid-cols-1 lg:grid-cols-2 py-5 gap-4'>
                <div className='bg-white w-full pb-6 pt-6 items-center justify-center dark:bg-neutral-900 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] '>
                <div className='px-6 lg:px-10'>
                    <MdTrackChanges className='text-4xl lg:text-6xl text-orange-600' />
                    <h1 className='text-3xl lg:text-4xl font-sans font-bold py-3'>Track Your Progress</h1>
                    <p className='text-md font-sans text-neutral-700 dark:text-neutral-200 py-5'>Try multiple solutions for the same problem and see how each performs. Test, optimize, and iterate to discover the most efficient approach. Strengthen your problem-solving skills and learn to write cleaner, more elegant code with each attempt.</p>
                    <button className='font-sans px-10 py-2 rounded-md bg-neutral-950 dark:bg-neutral-100 dark:text-neutral-950 text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Start Coding</button>
                </div>
            </div>

             <div className='bg-white w-full pb-6 pt-6 items-center justify-center dark:bg-neutral-900 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <div className='z-30 px-6 lg:px-10'>
                    <TbTargetArrow className='text-4xl lg:text-6xl text-orange-600' />
                    <h1 className='text-3xl lg:text-4xl font-sans font-bold py-3'>Strengthen your DSA skills</h1>
                    <p className='text-md font-sans text-neutral-700 dark:text-neutral-200 py-5'>Solve algorithmic challenges that focus on arrays, trees, graphs, and more. Each problem is crafted to enhance your understanding of data structures, sharpen your logic, and help you implement efficient solutions like a pro..</p>
                    <button className='font-sans px-10 py-2 rounded-md bg-neutral-950 dark:bg-neutral-100 dark:text-neutral-950 text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Start Coding</button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default MainSection
