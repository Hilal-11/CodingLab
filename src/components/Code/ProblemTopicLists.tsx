import React from 'react'
import { problemTopic } from '@/config/platformConfig/problemTopics'
function ProblemTopicLists() {
  return (
    <div className='px-1 md:py-4 w-full mx-auto'>
      <div className='w-full h-auto flex flex-wrap gap-3 lg:gap-4'>
        {
            problemTopic.map((topic) => (
                <h4 className='cursor-pointer flex items-center justify-center bg-white dark:bg-neutral-950 px-1 rounded-full py-1 text-sans text-sm hover:underline transition duration-300' key={topic.id}>{topic.topic}<span className=' text-[10px] font-sans font-medium text-orange-600'>{topic.totalProblems}</span></h4>
            ))
        }
      </div>
    </div>
  )
}

export default ProblemTopicLists
