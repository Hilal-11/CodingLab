"use client"
import React, { useState } from 'react'
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { HiOutlineArrowSmUp } from "react-icons/hi";

function ProblemTopicLists() {
    const [expand , setExpand] = useState(false)
  return (
    <div className='px-1 md:py-4 w-full mx-auto'>
      <div className={`w-full ${expand ? `h-auto` : `lg:h-[200px] h-[320px] overflow-y-hidden`} flex flex-wrap gap-3 lg:gap-3  `}>
        {/* {
            problemTopic.map((topic) => (
                <h4 className='shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] cursor-pointer flex items-center justify-center text-neutral-700  dark:bg-neutral-950 dark:text-neutral-400 px-3 rounded-full py-1 text-sans text-sm hover:underline transition duration-300' key={topic.id}>{topic.topic}<span className=' text-[10px] font-sans font-medium bg-[linear-gradient(145deg,hsla(33,100%,53%,1)_0%,hsla(33,50%,68%,1)_100%)] text-transparent bg-clip-text'>{topic.totalProblems}</span></h4>
            ))
        } */}
      </div>
        <div className='relative w-full py-0'>
            <button className='flex items-center gap-0 bg-[linear-gradient(145deg,hsla(33,100%,53%,1)_0%,hsla(33,50%,68%,1)_100%)] text-transparent bg-clip-text absolute right-2 md:right-4 font-sans cursor-pointer text-sm' onClick={() => setExpand(!expand)}>{expand ? (<>Collapse<HiOutlineArrowSmUp className="text-orange-500" size={20}/></>) : (<>Expand more<HiOutlineArrowSmDown className="text-orange-500" size={20}/></>)}</button>
        </div>
    </div>
  )
}

export default ProblemTopicLists
