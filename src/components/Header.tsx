"use client"
import React, { useState } from 'react'
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { siteConfig } from "@/config/siteConfig"
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
function Header() {
  const [isOpen , setIsOpen] = useState(false);
  return (
    <div className='flex justify-center relative w-full border-b-1  mx-auto'>
      <div className='z-50 fixed top-0 flex justify-between w-full items-center lg:container mx-auto lg:bg-transparent bg-neutral-100 lg:dark:bg-transparent dark:bg-neutral-950'>
        <div className='px-4 flex w-full py-4 items-center justify-start space-x-20'>
          <div>
            <h1 className='text-xl font-sans'>Brain Fuck</h1>
          </div>
          <div className='hidden lg:flex'>
            <ul className='flex space-x-4'>
              {
                siteConfig.map((item) => (
                  <Link className='font-sans' key={item.id} href={item.path}>{item.name}</Link>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='flex gap-2 items-center px-4'>
          <button className='hidden lg:flex shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] cursor-pointer justify-center items-center rounded-full w-8 h-8 text-center font-medium'><FcBusinessman className='text-2xl' /></button>
          <button className='hidden lg:flex items-center justify-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] cursor-pointer text-center bg-gray-600 px-3 h-8 rounded-md text-sm text-neutral-100 fira-code-one'>Premium</button>

          <div>
            <ThemeSwitcher />
          </div>

          {
            isOpen ? <button className='lg:hidden text-2xl' onClick={() => setIsOpen(false)}><IoMdClose /></button> : <button className='lg:hidden text-2xl' onClick={() => setIsOpen(true)}><HiOutlineMenuAlt3 /></button>
          }
        </div>

        {/*  on small screens */}
        {
          isOpen && <div className='lg:hidden absolute inset-0 left-0   bg-neutral-200 w-full h-screen'>
            <button className='lg:hidden text-2xl' onClick={() => setIsOpen(false)}><IoMdClose /></button>
          </div>
        }

      </div>
    </div>
  )
}
export default Header
