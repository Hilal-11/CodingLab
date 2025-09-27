import React from 'react'
import CodeBlock from './CodeBlock'
import { PiStudentFill } from "react-icons/pi";
import { platfromForWhichConfig } from '@/config/siteConfig'
function LandingPageBodySecession() {
  return (
    <div className='w-full flex flex-col lg:py-4 h-auto'>
      <div className='flex flex-col gap-20 w-full h-auto px-4'>

        <div className="flex flex-col justify-center items-center z-10">
            <h2 className="text-4xl lg:text-7xl font-sans font-bold text-center px-1">
                Sharpen Your Coding Skills with Real Challenges
            </h2>
            <p className="py-6 text-md font-sans text-center px-3 lg:w-2/3 mx-auto text-neutral-700 dark:text-neutral-200">
                Whether you are a student, a professional developer, or a tech enthusiast, this section is designed to help you practice algorithms, master data structures, and enhance problem-solving skills. 
                Explore tailored challenges that match your level, learn from optimized solutions, and level up your coding expertise step by step.
            </p>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 justify-between'>

                 <div key={platfromForWhichConfig[0].id} className='px-4 lg:px-14'>
                    <div className='text-center flex gap-2 items-center'>
                        <h1 className='text-center text-6xl text-orange-600'><PiStudentFill /></h1>
                        <h1 className='text-4xl font-medium font-sans'>{platfromForWhichConfig[0].forWhich}</h1>
                    </div>
                    <div className='py-1'>
                        <span className='text-xs fira-code-one bg-neutral-950 dark:bg-neutral-100 dark:text-black px-4 py-[2px] rounded-full text-white'>{platfromForWhichConfig[0].heading}</span>
                        <p className='text-md font-sans text-neutral-700 dark:text-neutral-200 py-3'>{platfromForWhichConfig[0].description}</p>
                        <button className='my-6 font-sans px-10 py-2 rounded-md bg-neutral-900 text-neutral-100 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Get Start</button>
                    </div>
                </div>
                <div className='flex items-center '>
                    <CodeBlock height = "380px"/>
                </div>
        </div>
        <br />
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 justify-between'>
                <div className='flex items-center '>
                   <video
                        src="@/assets/video1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-full rounded-xl h-[430px]"
                        >
                    </video>
                </div>
                 <div key={platfromForWhichConfig[1].id} className='px-4 lg:px-14'>
                    <div className='text-center flex gap-2 items-center'>
                        <h1 className='text-center text-6xl text-orange-600'><PiStudentFill /></h1>
                        <h1 className='text-4xl font-medium font-sans'>{platfromForWhichConfig[1].forWhich}</h1>
                    </div>
                    <div className='py-1'>
                        <span className='text-xs fira-code-one bg-neutral-950 dark:bg-neutral-100 dark:text-black px-4 py-[2px] rounded-full text-white'>{platfromForWhichConfig[0].heading}</span>
                        <p className='text-md font-sans text-neutral-700 dark:text-neutral-200 py-3'>{platfromForWhichConfig[1].description}</p>
                        <button className='my-6 font-sans px-10 py-2 rounded-md bg-neutral-900 text-neutral-100 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Get Start</button>
                    </div>
                </div>

        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 justify-between'>
               
                 <div key={platfromForWhichConfig[2].id} className='px-4 lg:px-14'>
                    <div className='text-center flex gap-2 items-center'>
                        <h1 className='text-center text-6xl text-orange-600'><PiStudentFill /></h1>
                        <h1 className='text-4xl font-medium font-sans'>{platfromForWhichConfig[2].forWhich}</h1>
                    </div>
                    <div className='py-1'>
                        <span className='text-xs fira-code-one bg-neutral-950 dark:bg-neutral-100 dark:text-black px-4 py-[2px] rounded-full text-white'>{platfromForWhichConfig[0].heading}</span>
                        <p className='text-md font-sans text-neutral-700 dark:text-neutral-200 py-3'>{platfromForWhichConfig[2].description}</p>
                        <button className='my-6 font-sans px-10 py-2 rounded-md bg-neutral-900 text-neutral-100 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Get Start</button>
                    </div>
                </div>
                 <div className='flex items-center '>
                    <video
                        src='@/assets/video2.mp4'
                        autoPlay
                        loop
                        playsInline
                        muted
                        controls
                        className="w-full rounded-xl h-[430px]"
                        >
                    </video>
                </div>

        </div>




      </div>
    </div>
  )
}

export default LandingPageBodySecession
