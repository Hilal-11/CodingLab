import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { companiesProblemTags } from "@/config/platformConfig/CompaniesPremiumProblemsTags"

function CompanyPremiumProblemsTags() {
  return (
    <ScrollArea className="h-96 full pb-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="px-2 py-4">
        <h4 className="mb-2 px-1 text-sm leading-none font-medium">Trending Companies</h4>
        <input className='w-full px-2 py-2 rounded-sm bg-neutral-200 dark:bg-neutral-900 font-sana text-md outline-none ' type="text" placeholder='Search problem:- '/>
        <Separator className="my-2" />
            <div className="w-full flex flex-wrap gap-3">
                {
                    companiesProblemTags.map((problemTag) => (
                        <span key={problemTag.id} className="cursor-pointer bg-white dark:bg-neutral-900 px-3 py-[2px] rounded-full font-sans font-medium flex gap-2 items-center text-xs text-neutral-500">{problemTag.company}<span className="text-[11px] text-orange-600">{problemTag.total_problems}</span></span>
                    ))
                }
            </div>
      </div>
    </ScrollArea>
  )
}
export default CompanyPremiumProblemsTags
