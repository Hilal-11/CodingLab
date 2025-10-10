"use client"
import AttendenceSystem from '@/components/Code/AttendenceSystem'
import ProblemTopicLists from '@/components/Code/ProblemTopicLists'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { RiProgress2Line } from "react-icons/ri";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { IoMdDoneAll } from "react-icons/io";
import { LuClipboardPenLine } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi2";
import { problemsDataList } from '@/config/platformConfig/ProblemsList'
function Problems() {
  const [isTags , setIsTags] = useState(false)
  const [solvedList , setSolvedList] = useState(false)
  const [favorite , setFavorite] = useState(false)


  return (
    <div className='mx-auto' >
        <Header />
        <div className='py-16 main-container h-auto grid grid-cols-1 lg:grid-cols-6'>

    
            <div className='pb-20 hidden lg:block h-[100%] bg-neutral-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-r-1'>

            </div>

            <div className='pb-20 overflow-y-scroll lg:col-span-4 w-full h-auto bg-neutral-100 dark:bg-neutral-900    shadow-   [0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-r-1 mx-auto py-0'>

              <AttendenceSystem />
              <div className='px-2 py-6'>
                <ProblemTopicLists />
              </div>

              <span className='mt-6 block w-full border-t-1'></span>
              {/*  Searching , filtering and total problems*/}
              <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center px-4 md:px-4 pt-3'>
                <div className='relative lg:order-none md:col-span-1 md:order-none order-2  md:px-4 lg:px-4'>
                  <span className='absolute left-3 md:left-7 lg:left-7 top-3 text-xl text-neutral-800 dark:text-neutral-200'><IoMdSearch /></span>
                  <input className='w-full px-9 py-2 rounded-full bg-neutral-200 dark:bg-neutral-800 font-sana text-md outline-none' type="text" placeholder='search problem:- '/>
                </div>
                  
                <div className='w-full flex items-center justify-between px-3 pt-2 pb-2'>
                  <div className='flex gap-2'>
                    <span className='inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-lg font-medium text-neutral-800 dark:text-neutral-200 '><CiFilter /></span>
                    {
                      isTags ? (<span onClick={() => setIsTags(!isTags)} className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-lg font-medium text-neutral-800 dark:text-neutral-200 '><IoIosEye /></span>) : (<span onClick={() => setIsTags(!isTags)} className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-lg font-medium text-neutral-800 dark:text-neutral-200 '><IoIosEyeOff /></span>)
                    }
                    {
                      solvedList ? (<span onClick={() => setSolvedList(!solvedList)} className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-lg font-medium text-neutral-800 dark:text-neutral-200 '><IoMdDoneAll /></span>) : (<span onClick={() => setSolvedList(!solvedList)} className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-lg font-medium text-neutral-800 dark:text-neutral-200 '><LuClipboardPenLine /></span>)
                    }
                  </div>
                  <div className='flex gap-1 items-center'>
                    <span className='font-sans text-xl font-medium text-neutral-800 dark:text-neutral-200 '><RiProgress2Line/></span>
                    <p className='font-sans text-sm font-medium text-neutral-800 dark:text-neutral-200 '>0/3049 Solved</p>
                  </div>
                </div>

              </div>
              {/*  questions or problems list*/}

              <div className='flex flex-col gap-2 px-3 md:px-8 pt-6'>
                    {/* Problem */}
                {
                  problemsDataList.map((list) =>(
                     list?.data?.questions.map((question) => (
                        <div key={question.id} className='flex items-center justify-between bg-neutral-200 dark:bg-neutral-800 py-2 rounded-xl px-1 w-full'>
                          <div className='flex items-center '>
                            {
                              solvedList ? (<span onClick={() => setSolvedList(!solvedList)} className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-lg font-medium text-neutral-800 dark:text-neutral-200 '><IoMdDoneAll /></span>) : (<span onClick={() => setSolvedList(!solvedList)} className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-lg font-medium text-neutral-800 dark:text-neutral-200 '><LuClipboardPenLine /></span>)
                            }
                            <p className='max-w-[120px] text-nowrap md:max-w-[400px] overflow-hidden  px-2 md:pl-2 font-sans text-xs lg:text-[16px] font-medium text-neutral-800 dark:text-neutral-200'>{question.title}</p>
                            

                          </div>
                          
                          <div className='lg:px-4 gap-2 flex lg:gap-10 md:gap-10 items-center'>
                            <p className='text-md font-sans text-neutral-400'>{question.acRate.toFixed(3)}</p>
                            <p className={`text-md font-sans ${
                                question.difficulty.toLocaleLowerCase() === "easy"
                                  ? "text-teal-500"
                                  : question.difficulty.toLocaleLowerCase() === "medium"
                                  ? "text-yellow-500"
                                  : question.difficulty.toLocaleLowerCase() === "hard"
                                  ? "text-red-500"
                                  : "text-gray-400"
                              }`}>{question.difficulty.toLocaleLowerCase()}</p>
                            {
                              favorite ? (<span onClick={() => setFavorite(!favorite)} className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-xl font-medium text-neutral-800 dark:text-neutral-200 '><FaStar /></span>) : (<span onClick={() => setFavorite(!favorite)} className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-xl font-medium text-neutral-800 dark:text-neutral-200 '><HiOutlineStar /></span>)
                            }
                          </div>
                          <div className='flex gap-3'>
                              {
                                question?.topicTags.map((topicTags, index) => (
                                  <span className='text-xs px-3 font-sans font-medium py-px rounded-full bg-neutral-100 dark:bg-neutral-900' key={index}>{topicTags.name}</span>
                                ))
                              }
                            </div>
                        </div>
                     ))
                  ))
                }
              </div>



            </div>

            <div className="pb-20 hidden h-auto  lg:flex flex-col gap-2 z-20 bg-neutral-100 dark:bg-neutral-900    shadow-   [0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            </div>


</div>

    </div>
  )
}

export default Problems
