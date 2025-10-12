"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Image from 'next/image'
import hilal from '@/assets/hilal.jpg'
function Profile() {
  return (
    <div className='w-full h-svh relative'>
        <div
            className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-200 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-neutral-950"></div>
        <Header />
        
        <div className='my-16 grid grid-col-1 gap-6'>
            <div className='bg-[linear-gradient(90deg,hsla(33,100%,53%,1)_0%,hsla(58,100%,68%,1)_100%)] col-span-2 pb-6 pt-6 grid grid-cols-1 gap-8 lg:gap-10 items-center justify-center overflow-hidden relative h-[300px] '>
                            <div
                                className={cn(
                                    "h-full md:h-full absolute inset-0",
                                    "[background-size:10px_10px]",
                                    "[background-image:linear-gradient(to_right,rgba(228,228,231,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.7)_1px,transparent_1px)]",
                                    "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.7)_1px,transparent_1px)]"
                                  )}
                                />
                                <div className=" pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-neutral-950"></div>
                        
                        <div className='z-50 w-[90%] g:w-[70%] md:w-[70%] mx-auto flex items-start gap-10'>
                            <div className='p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-full bg-neutral-100'>
                                <Image className='w-40 rounded-full' src={hilal} alt='Profile image'></Image>
                            </div>
                            <div className='py-5'>
                                <h1 className='text-4xl font-sans font-medium'>Hilal</h1>
                                <p className='py-1 text-neutral-700 font-sans font-medium'>Platfrom ID: <span className='font-bold'>Hilal-11</span></p>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default Profile
