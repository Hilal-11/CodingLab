"use client"
import React, { useState } from 'react'
import dynamic from "next/dynamic"


const AttendenceSystem = dynamic(() => import('@/components/Code/AttendenceSystem'), { ssr: true })
const ProblemTopicLists = dynamic(() => import('@/components/Code/ProblemTopicLists'), { ssr: true })
const GraphView = dynamic(() => import('@/components/Code/GraphView'), { ssr: true })
const CompanyPremiumProblemsTags = dynamic(() => import('@/components/Code/CompanyPremiumProblemsTags'), { ssr: false })
const Calendar1 = dynamic(() => import('@/components/Code/Calendar'), { ssr: true })

import Header from '@/components/Header'

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
import { FcCheckmark } from "react-icons/fc";
import { IoClipboardOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { FiSidebar } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { BiLogoGraphql } from "react-icons/bi";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Problemslist() {

  const [isTags , setIsTags] = useState(false)
  const [solvedList , setSolvedList] = useState(false)
  const [favorite , setFavorite] = useState(false)
  const [solved , setSolved] = useState(false)

  const [showAll, setShowAll] = useState(false)
  const [showCompaniesPremiumProblems, setShowCompaniesPremiumProblems] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showGraph, setShowGraph] = useState(false)
  
  return (
    <div className='mx-auto' >
        <Header />
        <div className='py-16 main-container md:h-svh h-svh grid grid-cols-1 lg:grid-cols-6 relative'>

          {/*  For small screens */}

            <div className='z-40 lg:hidden  fixed right-2 bottom-2 flex flex-col gap-1'>

              {showAll ? <span className='text-2xl mx-2' onClick={() => setShowAll(!showAll)}><IoIosArrowDown/></span>: <span className='mx-2 text-2xl' onClick={() => setShowAll(!showAll)}><IoChevronUpSharp/></span>}

              { showAll && <>
              <div onClick={() => setShowGraph(!showGraph)} className='text-neutral-200 bg-neutral-950 p-3 rounded-full text-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'><BiLogoGraphql /></div>

              <div onClick={() => setShowCalendar(!showCalendar)} className='text-neutral-200 bg-neutral-950 p-3 rounded-full text-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'><MdDateRange /></div></>}
              
              <div className='p-3 rounded-full bg-neutral-950 text-white text-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'><FiSidebar /></div>

              <div onClick={() => setShowCompaniesPremiumProblems(!showCompaniesPremiumProblems)} className='bg-[linear-gradient(90deg,hsla(33,100%,53%,1)_0%,hsla(58,100%,68%,1)_100%)] p-3 rounded-full text-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'><BsBuildings /></div>

            </div>
              
            
            { showGraph && <div className='absolute left-1/2 top-1/2 w-full h-auto transform -translate-x-1/2 -translate-y-1/2 z-50 px-6'>
                <div className='relative py-2'>
                  <span className='absolute bottom-0 right-2 top-4 z-50 text-xl' onClick={() => setShowGraph(false)}><MdOutlineClose/></span>
                  <GraphView />
                </div>
              </div>
            }

            { showCompaniesPremiumProblems && <div className='absolute left-1/2 top-1/2 w-full h-auto transform -translate-x-1/2 -translate-y-1/2 z-50 px-6'>
                <div className='relative py-2'>
                  <span className='absolute bottom-0 right-2 top-4 z-50 text-xl' onClick={() => setShowCompaniesPremiumProblems(false)}><MdOutlineClose/></span>
                  <CompanyPremiumProblemsTags />
                </div>
              </div>
            }

            { showCalendar && <div className='absolute left-1/2 top-1/2 w-full h-auto transform -translate-x-1/2 -translate-y-1/2 z-50 px-6'>
                <div className='relative py-2'>
                  <span className='absolute bottom-0 right-2 top-4 z-50 text-xl' onClick={() => setShowCalendar(false)}><MdOutlineClose/></span>
                  <Calendar1 />
                </div>
              </div>
            }


            <div className={`${showCompaniesPremiumProblems || showCalendar || showGraph ? `blur-sm`: `blur-none`} hidden pb-20 h-svh bg-neutral-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-r-1 relative lg:grid lg:grid-rows-3 gap-1 px-2 `}>

              <div className='rounded-xl bg-neutral-100 dark:bg-neutral-800 row-span-2 mt-2 w-full h-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-2'>
                
              </div>

              <div>
                <GraphView/>
              </div>

            </div>

            <div className={`${showCompaniesPremiumProblems || showCalendar || showGraph ? `blur-sm`: `blur-none`} lg:px-10 pb-20 overflow-y-scroll lg:col-span-4 w-full h-auto bg-neutral-100 dark:bg-neutral-900    shadow-   [0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-r-1 mx-auto py-0`}>

              <AttendenceSystem />
              <div className='px-2 py-6'>
                <ProblemTopicLists />
              </div>

              <span className='mt-6 block w-full border-t-1'></span>
              {/*  Searching , filtering and total problems*/}
              <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center px-4 md:px-4 pt-3'>
                <div className='relative lg:order-none md:col-span-1 md:order-none order-2  md:px-4 lg:px-4'>
                  <span className='absolute left-3 md:left-7 lg:left-7 top-3 text-xl text-neutral-800 dark:text-neutral-200'><IoMdSearch /></span>
                  <input className='z-20 w-full px-9 py-2 rounded-full bg-neutral-200 dark:bg-neutral-800 font-sana text-md outline-none' type="text" placeholder='search problem:- '/>
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
                        <div key={question.id} className='border flex items-center justify-between bg-neutral-200 dark:bg-neutral-800 py-2 rounded-xl px-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                          <div className='flex items-center '>
                            {
                              solved ? (<span className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-lg font-medium text-blue-600 '><FcCheckmark /></span>) : (<span className=' cursor-pointer inline-block p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full font-sans text-lg font-medium text-neutral-800 dark:text-neutral-200 '><IoClipboardOutline /></span>)
                            }
                            <p className='max-w-[120px] text-nowrap md:max-w-[400px] overflow-hidden  px-1 md:pl-2 font-sans text-xs lg:text-[16px] font-medium text-neutral-800 dark:text-neutral-200'>{question.title}</p>
                            

                          </div>
                          
                          <div className='lg:px-4 gap-2 flex lg:gap-10 md:gap-10 items-center'>
                            <p className='text-xs font-semibold font-sans text-neutral-400'>{question.acRate.toFixed(3)}</p>
                            <p className={`text-sm font-medium font-sans ${
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
                        </div>
                        
                     ))
                  ))
                }
              </div>
            </div>

            <div className="pb-20 hidden h-auto  lg:flex flex-col gap-2 z-20 bg-neutral-100 dark:bg-neutral-900  shadow-   [0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <div className='p-2'>
                <Calendar1 />
              </div>
              <div className='p-2'>
                <CompanyPremiumProblemsTags />
              </div>
            </div>


</div>

    </div>
  )
}

export default Problemslist
