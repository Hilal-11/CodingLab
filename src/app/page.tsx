
"use client"
import { useEffect } from "react";
import Header from '@/components/Header'
import Container from '@/components/Container'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { HiOutlineArrowSmRight } from "react-icons/hi";

function page() {


  
  return (
     <div className='relative'>
      <div
          className={cn(
            "h-screen absolute inset-0",
            "[background-size:6px_6px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.7)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.7)_1px,transparent_1px)]"
          )}
          />
          <div className="border h-screen pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-black"></div>
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
          <button className="z-30 relative flex items-center bg-white dark:bg-neutral-900 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full text-[16px] px-5 py-[2.5px] font-sans font-medium">Automated Lead Generation

            <span className="inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 bottom-0 h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent"></span>
            <span className="z-50 inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 -bottom-16 h-10 w-[100%] mx-auto bg-zinc-600 dark:bg-neutral-400 blur-2xl rounded-b-full "></span>
            {/* <span className="z-10 inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 -bottom-10 -left-60 h-30 w-[100%] mx-auto bg-zinc-600 dark:bg-gray-400 -rotate-45 -bottom-40 blur-2xl rounded-t-full "></span>
            <span className="z-10 inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 -bottom-10 h-30 w-[100%] left-30 mx-auto bg-zinc-600 dark:bg-gray-400 rotate-40 -bottom-40 blur-2xl rounded-t-full"></span> */}
          </button>


        </div> <br /> <br />
        <div className="text-center z-50">
          <h1 className=" z-50 text-3xl lg:text-[6.7rem] font-sana font-bold heading-lg">Generate Images, Text and Videos with AI</h1>
          <p className="px-2 py-4 lg:w-2/3 mx-auto font-sans font-medium lg:py-0 text-[17px] lg:text-lg z-50">Everything AI seamlessly integrated all the modern AI generation tools into one platform so that you can generate content with a single click.Generate images with text.</p>
        </div>
              <br /> <br />
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-4 py-3 lg:py-1 z-30">
          <motion.button
            initial={{
              scale: 0.98,
              
            }}
            style={{
                translateZ : 100
            }}
            whileHover={{
              scale: 1,
              y: -4,
            }}
            transition={{
              duration: 0.2,
            }}
          className="z-30 cursor-pointer font-sana font-bold bg-neutral-900 dark:bg-white dark:text-black px-14 py-[9px] rounded-lg text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">Start for free</motion.button>
          <motion.button
            initial={{
              scale: 0.98,
              
            }}
              style={{
                translateZ : 100
            }}
            whileHover={{
              scale: 1,
              y: -4,
              // rotateX: -6,
              rotateY: -18,
            }}
            transition={{
              duration: 0.2,
            }}
          className="z-30 cursor-pointer relative font-sana font-bold cursor-pointer dark:bg-zinc-900 dark:text-white bg-white px-14 py-[9px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center gap-2">See Our Services <motion.span
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
          </motion.button>
        </div>

          <div className=" justify-center items-center pb-8 py-10 space-y-2 z-30">
              <p className="text-center font-sans font-medium z-30">Trusted by Founders and Entrepreneurs from all over the world</p>
              <div className="flex gap-2 justify-center items-center">
                <img className="w-[46px] cursor-pointer ring-2 ring-gray-200 relative left-9 rounded-full shadow-md shadow-neutral-950 hover:z-50 hover:scale-[1.08] duration-300" src="https://randomuser.me/api/portraits/men/6.jpg" alt="" />
                <img className="w-[46px] cursor-pointer ring-2 ring-gray-200 relative left-6 rounded-full shadow-md shadow-neutral-950 hover:z-50 hover:scale-[1.08] duration-300" src="https://randomuser.me/api/portraits/women/7.jpg" alt="" />
                <img className="w-[46px] cursor-pointer ring-2 ring-gray-200 relative left-3 rounded-full shadow-md shadow-neutral-950 hover:z-50 hover:scale-[1.08] duration-300" src="https://randomuser.me/api/portraits/men/14.jpg" alt="" />
                <img className="w-[46px] cursor-pointer ring-2 ring-gray-200 relative rounded-full shadow-md shadow-neutral-950 hover:z-50 hover:scale-[1.08] duration-300" src="https://randomuser.me/api/portraits/women/13.jpg" alt="" />
                <img className="w-[46px] cursor-pointer ring-2 ring-gray-200 relative -left-3 rounded-full shadow-md shadow-neutral-950 hover:z-50 hover:scale-[1.08] duration-300" src="https://randomuser.me/api/portraits/men/8.jpg" alt="" />
                <img className="w-[46px] cursor-pointer ring-2 ring-gray-200 relative -left-6 rounded-full shadow-md shadow-neutral-950 hover:z-50 hover:scale-[1.08] duration-300" src="https://randomuser.me/api/portraits/women/11.jpg" alt="" />
                <img className="w-[46px] cursor-pointer ring-2 ring-gray-200 relative -left-9 rounded-full shadow-md shadow-neutral-950 hover:z-50 hover:scale-[1.08] duration-300" src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />
              </div>
          </div>
                
        {/* HERO SECTION MAI IMAGE COMPONENT */}
        <div className="py-10 z-30">

        </div>
      </div>
      </Container>
     </div>

  )
}

export default page
