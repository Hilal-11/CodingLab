"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Image from 'next/image'
import hilal from '@/assets/hilal.jpg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { profileConfig } from '@/config/profileConfig'
function Profile() {
  return (
    <div className='w-full h-auto relative'>
        <Header />
        
        <div className='flex flex-col py-10 container mx-auto'>
            {/* Profile box */}
            <div className='flex items-center justify-center w-full h-[300px]'>
                <div className='col-span-2 pb-6 pt-6 grid grid-cols-1 gap-5 lg:gap-10 items-center justify-center overflow-hidden relative h-[250px] w-full'>
                            <div
                                className={cn(
                                    "h-full md:h-full absolute inset-0",
                                    "[background-size:10px_10px]",
                                    "[background-image:linear-gradient(to_right,rgba(228,228,231,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.7)_1px,transparent_1px)]",
                                    "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.7)_1px,transparent_1px)]"
                                  )}
                                />
                                <div className=" pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-neutral-950"></div>
                        
                        <div className='z-50 flex items-start gap-5 pl-4 lg:gap-10 lg:pl-20'>
                            <div className='p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-full bg-neutral-100'>
                                <Image className='w-40 rounded-full' src={hilal} alt='Profile image'></Image>
                            </div>
                            <div className='py-5'>
                                <h1 className='text-4xl font-sans font-medium'>Hilal</h1>
                                <p className='py-1 text-neutral-700 dark:text-neutral-300 font-sans font-medium'>Platfrom ID: <span className='font-bold'>Hilal-11</span></p>
                            </div>
                        </div>
                    </div>
            </div>
            {/* prodile info */}
            <div className='w-[100%] lg:w-[80%] mx-auto px-2'>
                <Tabs defaultValue="account" className="rounded-md h-auto ">
                    <TabsList className='h-[80px] p-2 overflow-x-auto bg-neutral-100 dark:bg-neutral-900  flex gap-2 justify-evenly items-center font-2xl font-sans font-medium shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                        <TabsTrigger className='text-md font-sans font-medium' value="account">Basic Info</TabsTrigger>
                        <TabsTrigger className='text-md font-sans font-medium' value="account_social">Account Info</TabsTrigger>
                        <TabsTrigger className='text-md font-sans font-medium' value="graph">Graph Viwe</TabsTrigger>
                        <TabsTrigger className='text-md font-sans font-medium' value="progress">Progress Track</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account" className='py-4 px-1'>
                        <div className='mx-auto w-full  h-auto  rounded-xl bg-white dark:bg-neutral-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                            <div className='flex flex-col w-full h-auto gap-3 pb-4'>
                                <div className='px-5 py-4'>
                                    <h1 className='text-xl font-sans font-medium'>Basic Info</h1>
                                </div> <br />
                                {
                                    profileConfig.map((item) => (
                                        <>
                                        <div key={item.id} className='flex justify-between px-4 lg:px-10 pb-2'>
                                            <div className='font-sans  text-md'>{item.label}</div>
                                            <div className='font-sans font-medium text-md'>...</div>
                                            <button className='font-sans text-md text-blue-600'>Edit</button>
                                        </div>
                                        <Separator/></>
                                    ))
                                }
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="account_social">
                        <div className='mx-auto w-full  h-auto  rounded-xl bg-white dark:bg-neutral-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                            <div className='flex flex-col w-full h-auto gap-3 pb-4'>
                                <div className='px-5 py-4'>
                                    <h1 className='text-xl font-sans font-medium'>Basic Info</h1>
                                </div> <br />
                                    <div className='flex justify-between px-4 lg:px-10 pb-2'>
                                        <div className='font-sans  text-md'>Leetcode ID</div>
                                        <div className='font-sans font-medium text-md'>...</div>
                                        <button className='font-sans text-md text-blue-600'>Edit</button>
                                    </div>
                                    <Separator/>
                                    <div className='flex justify-between px-4 lg:px-10 pb-2'>
                                        <div className='font-sans  text-md'>User Email</div>
                                        <div className='font-sans font-medium text-md'>...</div>
                                        <button className='font-sans text-md text-blue-600'>Edit</button>
                                    </div>
                                    <Separator/>
                                    <div className='flex justify-between px-4 lg:px-10 pb-2'>
                                        <div className='font-sans  text-md'>Password</div>
                                        <div className='font-sans font-medium text-md text-blue-600'>Change Password</div>
                                    </div>
                                    <Separator/>
                            </div>
                        </div>
                    </TabsContent>

                </Tabs>
            </div>
        </div>

    </div>
  )
}

export default Profile
