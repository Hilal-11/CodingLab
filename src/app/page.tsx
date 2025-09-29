
"use client"
import { useEffect } from "react";
import Header from '@/components/Header'
import Container from '@/components/Container'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
function page() {

  

  
  return (
     <div className='relative'>
      <div
          className={cn(
            "h-auto absolute inset-0",
            "[background-size:6px_6px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.7)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.7)_1px,transparent_1px)]"
          )}
          />
          <div className="border h-full pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-black"></div>
      <Container>
        <Header />
        
        
        <div className="container mx-auto py-10 lg:py-20 z-30">
        <div className="absolute">
          <motion.span 
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 1,
              scale: 1,
              
            }}
            transition={{
              duration: 1.9,
              delay: 2,
            }}
          className="hidden lg:block relative -top-100 -left-30 w-[100px] h-[500px] lg:h-[800px] bg-gray-300 blur-[80px] rounded-full -rotate-45 bg-neutral-700"></motion.span>
      </div>
      
      
      <br /><br />
        <div className="flex justify-center items-center z-30">
          <button className="z-30 relative flex items-center bg-white dark:bg-neutral-900 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full text-[16px] px-5 py-[2.5px] font-sans font-medium">The Brain Fuck Grind Zone

            <span className="inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 bottom-0 h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent"></span>
            <span className="z-50 inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 -bottom-16 h-10 w-[100%] mx-auto bg-zinc-600 dark:bg-neutral-400 blur-2xl rounded-b-full "></span>
          </button>


        </div> 
        <div className="pt-10 text-center z-50 px-4 space-y-8">
          <h1 className=" z-50 text-4xl md:text-5xl lg:text-[5rem] font-sana font-bold leading-tight">Solve Problems. Break Logic. Crush DSA. Level Up Relentlessly.</h1>
          <p className="px-2 py-4 lg:w-2/3 mx-auto font-sans font-medium lg:py-0 text-ms text-md z-50">All your coding chaos in one battleground. A hardcore problem-solving platform where you take on algorithms, data structures, and brain-melting challenges with zero mercy. Practice, compete, and grind your way through logic hell — one problem at a time. give me more relevent and better</p>
        </div>
              <br /> <br />
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-4 py-3 lg:py-1 z-30">
          <Link href="/signup"
            
          className="z-30 cursor-pointer font-sana font-bold bg-neutral-900 dark:bg-white dark:text-black px-14 py-[9px] rounded-lg text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">Create Account</Link>
          <Link href="/platform" 
          className="z-30 relative font-sana font-bold cursor-pointer dark:bg-zinc-900 dark:text-white bg-white px-14 py-[9px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center gap-2">Explore and Build<motion.span
            whileHover={{
              y: -10,
              x: 100,
              // y: 1,
              // repeatCount: Infinity,
              rotate: [0 , 360 , 0]
            }}
            // whileTap={{
            //   x: 100,
            //   rotateY: [2 , 4 , 2],
            //   opacity: 0,
            // }}
            transition={{
              duration: 1,
              
            }}
          className="text-xl z-30"><HiOutlineArrowSmRight /></motion.span>

            <span className="inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 bottom-0 h-px w-full mx-auto bg-gradient-to-r from-transparent via-slate-950 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent z-30"></span>
          </Link>
        </div>
        {/* HERO SECTION MAI IMAGE COMPONENT */}
        <div className="">
            <MacbookScroll />
        </div>

        <div className="w-full flex justify-center items-center pb-5 ">
          <button className="bg-[linear-gradient(90deg,hsla(33,100%,53%,1)_0%,hsla(58,100%,68%,1)_100%)] font-bold lg:w-[450px] w-1/2 py-2 rounded-full text-neutral-900 font-sans text-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Lets Go</button>
        </div>
      </div>
      </Container>
     </div>

  )
}

export default page
