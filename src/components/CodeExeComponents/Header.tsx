"use client"
import * as React from "react"
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"
import { TbArrowsShuffle } from "react-icons/tb";
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SiCodeigniter } from "react-icons/si";
import { CiStickyNote } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLayout } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { PiGraph } from "react-icons/pi";
import { LuFlame } from "react-icons/lu";
import { RiMenuFold3Line } from "react-icons/ri";

function Header() {

    const [label, setLabel] = React.useState("personal")
  return (
    <div className='flex justify-between items-center bg-neutral-200 dark:bg-neutral-900 py-4 fixed w-full'>
        {/* Header box */}
      <div className='w-full flex justify-between items-center h-auto px-0'>


        <div className='flex gap-2 items-center px-2'>
            <div><Link href={'/problemslist'}><SiCodeigniter className="inline-block text-3xl" /></Link></div>
            <div className='flex gap-1 items-center lg:pl-4 pl-1'>
                <ButtonGroup>
                    <ButtonGroup>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline"><RiMenuFold3Line/></Button>
                        </SheetTrigger>
                        <SheetContent side={"left"}>

                        </SheetContent>
                        </Sheet>
                        <Button variant="outline" size="icon" aria-label="Go Back">
                        <ArrowLeftIcon />
                        </Button>
                        <Button variant="outline" size="icon" aria-label="Go Back">
                        <ArrowRightIcon />
                        </Button>
                        <Button variant="outline" size="icon" aria-label="Go Back">
                        <TbArrowsShuffle />


                        
                        </Button>
                            <Button className="hidden lg:flex md:flex" variant="outline"><CiStickyNote /></Button>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild className="lg:hidden md:hidden">
                            <Button variant="outline" size="icon" aria-label="More Options">
                            <MoreHorizontalIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-52">
                            <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <CiStickyNote />
                                Create Note
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <IoPersonAddOutline />
                                Invite
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <PiGraph />
                                Progress Graph
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FiLayout />
                                Editor View
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <MdOutlineTimer />
                                Set Timer
                            </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <IoSettingsOutline />
                                Settings
                            </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
        </div>
        
        <div className="flex gap-2 justify-end w-full">
            <ButtonGroup className="hidden lg:block md:block">
                <Button variant="outline" size="icon" aria-label="Go Back">
                <PiGraph />
                </Button>
            </ButtonGroup>
            <ButtonGroup className="hidden lg:block md:block">
                <Button variant="outline" size="icon" aria-label="Go Back">
                <FiLayout />
                </Button>
            </ButtonGroup>
            <ButtonGroup className="hidden lg:block md:block">
                <Button variant="outline" size="icon" aria-label="Go Back">
                <IoSettingsOutline />
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outline" size="icon" aria-label="Go Back">
                <LuFlame />
                </Button>
                <Button className="flex justify-center items-center lg:block md:block" variant="outline" size="icon" aria-label="Go Back">
                <MdOutlineTimer />
                </Button>
                <Button variant="outline" size="icon" aria-label="Go Back">
                <IoPersonAddOutline />
                </Button>
            </ButtonGroup>
            <ButtonGroup >
                <Button className="bg-gradient-to-r from-[hsla(33,100%,53%,1)] to-[hsla(58,100%,68%,1)]" variant="outline" size="icon" aria-label="Go Back">
                <CgProfile />
                </Button>
            </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default Header
